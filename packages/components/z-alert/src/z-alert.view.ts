import { CSSResultGroup, CSSResultOrNative, TemplateResult, html } from 'lit';
import { ZAlertTheme } from './css/z-alert.theme.css';
import { ZAlertViewModel } from './z-alert.viewmodel';
import { choose } from 'lit/directives/choose.js';

import '@zephyra-ui/z-icon';

export class ZAlertView extends ZAlertViewModel {
  protected static finalizeStyles(
    styles?: CSSResultGroup | undefined
  ): CSSResultOrNative[] {
    return [...super.finalizeStyles(styles), ZAlertTheme.cssBase];
  }

  public render(): TemplateResult {
    return html`<div
      role="alert"
      aria-live="assertive"
      class="alert-container ${this.state}"
      part="alert-container"
    >
      <div class="alert-icon" part="alert-icon">
        ${choose(
          this.state,
          [['success', () => html` <z-icon icon="check-circle"></z-icon>`]],
          () => html`<z-icon .icon="${this.state}"></z-icon>`
        )}
        <span part="alert-state"
          >${this.state[0]?.toUpperCase() + this.state?.slice(1) || ''}</span
        >
      </div>
      <span class="alert-separator" part="alert-separator"> - </span>
      <slot class="alert-msg" part="alert-msg">Alert content</slot>
    </div>`;
  }
}

if (!customElements.get('z-alert')) {
  window.customElements.define('z-alert', ZAlertView);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-alert': ZAlertView;
  }
}
