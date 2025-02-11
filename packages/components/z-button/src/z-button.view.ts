import { CSSResultGroup, CSSResultOrNative, TemplateResult, html } from 'lit';
import { ZButtonTheme } from './css/z-button.theme.css';
import { ZButtonViewModel } from './z-button.viewmodel';
import { when } from 'lit/directives/when.js';

export class ZButtonView extends ZButtonViewModel {
  protected static finalizeStyles(
    styles?: CSSResultGroup | undefined
  ): CSSResultOrNative[] {
    return [...super.finalizeStyles(styles), ZButtonTheme.cssBase];
  }

  public render(): TemplateResult {
    return html`
      <button
        class="button ${this.variant}"
        ?disabled=${this.disabled}
        part="button"
      >
        ${when(
          this.isLoading,
          () => html` <div class="loading-container" part="loading-container">
            <div class="hidden"><slot>Button</slot></div>
            <div class="loading-wave" part="loading-wave">
              <div class="loading-bar" part="loading-bar"></div>
              <div class="loading-bar" part="loading-bar"></div>
              <div class="loading-bar" part="loading-bar"></div>
              <div class="loading-bar" part="loading-bar"></div>
            </div>
          </div>`,
          () => html`<slot>Button</slot>`
        )}
      </button>
    `;
  }
}

if (!customElements.get('z-button')) {
  window.customElements.define('z-button', ZButtonView);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-button': ZButtonView;
  }
}
