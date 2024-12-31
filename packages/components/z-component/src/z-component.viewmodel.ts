import { LitElement } from 'lit';
import { state } from 'lit/decorators.js';
import {
  ThemeChangedEvent,
  THEME_CHANGED_EVENT_NAME,
} from './event/theme-changed.event';
import { ThemeChangedModel } from './model/theme-changed.model';

export class ZComponentViewModel extends LitElement {
  @state() colorScheme: 'light' | 'dark' = 'light';

  constructor() {
    super();
    this._initializeTheme();
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener(
      THEME_CHANGED_EVENT_NAME,
      this._onThemeChanged as EventListener
    );
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener(
      THEME_CHANGED_EVENT_NAME,
      this._onThemeChanged as EventListener
    );
  }

  private _onThemeChanged = (event: ThemeChangedEvent) => {
    this.colorScheme = event.detail.colorScheme;
    this._applyTheme();
  };

  private _initializeTheme() {
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    this.colorScheme = prefersDark ? 'dark' : 'light';
    this._applyTheme();
  }

  private _applyTheme() {
    this.setAttribute('color-scheme', this.colorScheme);
    document.documentElement.setAttribute('color-scheme', this.colorScheme);
  }

  protected dispatchThemeChangedEvent(detail: ThemeChangedModel) {
    this.dispatchEvent(new ThemeChangedEvent(detail));
  }
}
