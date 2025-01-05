import { CSSResultGroup, CSSResultOrNative, TemplateResult, html } from 'lit';
import { ZColorViewModel } from './z-color.viewmodel';
import { ZColorTheme } from './css/z-color.theme.css';

export class ZColorView extends ZColorViewModel {
  protected static finalizeStyles(
    styles?: CSSResultGroup | undefined
  ): CSSResultOrNative[] {
    return [...super.finalizeStyles(styles), ZColorTheme.cssBase];
  }

  public render(): TemplateResult {
    return html`<div
      style="width: ${this.size}px;
      height: ${this.size}px;
      background-color: ${this.color};"
      class="color"
    ></div>`;
  }
}

if (!customElements.get('z-color')) {
  window.customElements.define('z-color', ZColorView);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-color': ZColorView;
  }
}
