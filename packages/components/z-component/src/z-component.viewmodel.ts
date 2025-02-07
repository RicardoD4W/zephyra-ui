import { LitElement } from 'lit';
import { state } from 'lit/decorators.js';
import { ZComponentTheme } from './css/z-component.theme.css';

export class ZComponentViewModel extends LitElement {
  @state() dataTheme: 'light' | 'dark' = 'light';
  private _themeCssSheet = new CSSStyleSheet();

  constructor() {
    super();
    this._initializeTheme();
    this._setDefaultTheme();
  }

  private _initializeTheme() {
    this._detectedSysTheme();
    this.applyTheme();
  }

  private _detectedSysTheme() {
    const appTheme = localStorage.getItem('theme');

    if (!appTheme || (appTheme !== 'dark' && appTheme !== 'light')) {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      this.dataTheme = prefersDark ? 'dark' : 'light';
      this.persistTheme();
    } else {
      this.dataTheme = appTheme;
    }
  }

  public persistTheme() {
    localStorage.setItem('theme', this.dataTheme);
  }

  public applyTheme() {
    document.documentElement.setAttribute('data-theme', this.dataTheme);
  }

  private _setDefaultTheme() {
    this._themeCssSheet.replaceSync(
      `${ZComponentTheme.zBaseSheet.cssText}  ${ZComponentTheme.zBaseSheetDark.cssText}`
    );

    document.adoptedStyleSheets = [
      ...document.adoptedStyleSheets,
      this._themeCssSheet,
    ];
  }
}
