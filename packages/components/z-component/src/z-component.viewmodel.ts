import { LitElement } from 'lit';
import { state } from 'lit/decorators.js';
import {
  ZThemeChangedEvent,
  THEME_CHANGED_EVENT_NAME,
} from './event/z-theme-changed.event';
import { ThemeChangedModel } from './model/theme-changed.model';

export class ZComponentViewModel extends LitElement {
  @state() dataTheme: 'light' | 'dark' = 'light';

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

  private _onThemeChanged = (event: ZThemeChangedEvent) => {
    this.dataTheme = event.detail.dataTheme;
    this._applyTheme();
  };

  private _initializeTheme() {
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    this.dataTheme = prefersDark ? 'dark' : 'light';
    this._applyTheme();
  }

  private _applyTheme() {
    this.setAttribute('data-theme', this.dataTheme);
    document.documentElement.setAttribute('data-theme', this.dataTheme);
  }

  protected dispatchThemeChangedEvent(detail: ThemeChangedModel) {
    this.dispatchEvent(new ZThemeChangedEvent(detail));
  }
}
