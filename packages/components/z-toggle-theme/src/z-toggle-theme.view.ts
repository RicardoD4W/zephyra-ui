import { CSSResultGroup, CSSResultOrNative, TemplateResult, html } from 'lit';
import { ZToggleThemeTheme } from './css/z-toggle-theme.theme.css';
import { ZToggleThemeViewModel } from './z-toggle-theme.viewmodel';

export class ZToggleThemeView extends ZToggleThemeViewModel {
  protected static finalizeStyles(
    styles?: CSSResultGroup | undefined
  ): CSSResultOrNative[] {
    return [...super.finalizeStyles(styles), ZToggleThemeTheme.cssBase];
  }

  private toggleTheme() {
    this.isLightTheme = !this.isLightTheme;
    this.updateColorScheme();
  }

  render() {
    return html`
      <svg
        viewBox="0 0 100 100"
        @click="${this.toggleTheme}"
        class="${this.isLightTheme ? 'night' : 'day'}"
      >
        <circle class="sun" cx="50" cy="50" r="25" />

        <path
          class="moon"
          d="M50 25a25 25 0 1 0 25 25c-13.8 0-25-11.2-25-25z"
        />
      </svg>
    `;
  }
}

window.customElements.define('z-toggle-theme', ZToggleThemeView);

declare global {
  interface HTMLElementTagNameMap {
    'z-toggle-theme': ZToggleThemeView;
  }
}
