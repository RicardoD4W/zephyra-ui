import { CSSResultGroup, CSSResultOrNative, TemplateResult, html } from 'lit';
import { ZAlertTheme } from './css/z-alert.theme.css';
import { ZAlertViewModel } from './z-alert.viewmodel';
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
    >
      <div class="alert-icon">
        <z-icon .state="${this.state}"></z-icon>
        <span
          >${this.state[0]?.toUpperCase() + this.state?.slice(1) || ''}</span
        >
      </div>
      <span class="alert-separator"> - </span>
      <slot class="alert-msg">Alert content</slot>
    </div>`;
  }
}

window.customElements.define('z-alert', ZAlertView);

declare global {
  interface HTMLElementTagNameMap {
    'z-alert': ZAlertView;
  }
}
