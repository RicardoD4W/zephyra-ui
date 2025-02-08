import { CSSResultGroup, CSSResultOrNative, TemplateResult, html } from 'lit';
import { ZIconTheme } from './css/z-icon.theme.css';
import { ZIconViewModel } from './z-icon.viewmodel';

export class ZIconView extends ZIconViewModel {
  protected static finalizeStyles(
    styles?: CSSResultGroup | undefined
  ): CSSResultOrNative[] {
    return [...super.finalizeStyles(styles), ZIconTheme.cssBase];
  }

  public render(): TemplateResult {
    return html`
      <div class="icon" role="icon" part="icon-container">
        <img
          part="icon"
          src="https://api.iconify.design/material-symbols/${this.icon}${this
            .variant}.svg?width=${this.size}&height=${this
            .size}&color=${encodeURIComponent(this.color)}"
          @error=${(event: Event) => this.handleError(event)}
        />
      </div>
    `;
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
