import { CSSResultGroup, CSSResultOrNative, TemplateResult, html } from 'lit';
import { ZIconTheme } from './css/z-icon.theme.css';
import { ZIconViewModel } from './z-icon.viewmodel';
import { choose } from 'lit/directives/choose.js';

export class ZIconView extends ZIconViewModel {
  protected static finalizeStyles(
    styles?: CSSResultGroup | undefined
  ): CSSResultOrNative[] {
    return [...super.finalizeStyles(styles), ZIconTheme.cssBase];
  }

  public render(): TemplateResult {
    return html`
      ${choose(
        this.state,
        [
          ['info', this._renderInfo],
          ['success', this._renderSuccess],
          ['warning', this._renderWarning],
          ['error', this._renderError],
        ],
        () => html`<span>unknow icon</span>`
      )}
    `;
  }

  private _renderInfo() {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      class="icon"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
      />
    </svg> `;
  }
  private _renderWarning() {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      class="icon"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
      />
    </svg> `;
  }
  private _renderError() {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      class="icon"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg> `;
  }
  private _renderSuccess() {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      class="icon"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg> `;
  }
}

if (!customElements.get('z-icon')) {
  window.customElements.define('z-icon', ZIconView);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-icon': ZIconView;
  }
}
