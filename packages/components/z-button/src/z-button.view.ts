import { CSSResultGroup, CSSResultOrNative, TemplateResult, html } from 'lit';
import { ZButtonTheme } from './css/z-button.theme.css';
import { ZButtonViewModel } from './z-button.viewmodel';

export class ZButtonView extends ZButtonViewModel {
  protected static finalizeStyles(
    styles?: CSSResultGroup | undefined
  ): CSSResultOrNative[] {
    return [...super.finalizeStyles(styles), ZButtonTheme.cssBase];
  }

  public render(): TemplateResult {
    return html`
      <button class="button" ?disabled=${this.disabled}>${this.label}</button>
    `;
  }
}

window.customElements.define('z-button', ZButtonView);

declare global {
  interface HTMLElementTagNameMap {
    'z-button': ZButtonView;
  }
}
