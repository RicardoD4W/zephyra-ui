import { ZComponent } from '@zephyra-ui/z-component';
import { property } from 'lit/decorators.js';

export class ZToggleThemeViewModel extends ZComponent {
  @property({ type: Boolean }) isLightTheme = false;
  @property({ type: Object }) pathElement!: SVGPathElement;

  constructor() {
    super();
    this._setInitialTheme();
  }

  private _setInitialTheme() {
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    this.isLightTheme = !prefersDark;
    this.updateColorScheme();
  }

  protected updateColorScheme() {
    const colorScheme = this.isLightTheme ? 'light' : 'dark';
    document.documentElement.style.setProperty('color-scheme', colorScheme);
  }
}
