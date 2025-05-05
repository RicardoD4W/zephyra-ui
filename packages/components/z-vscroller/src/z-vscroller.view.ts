import { CSSResultGroup, CSSResultOrNative, TemplateResult, html } from 'lit';
import { ZVScrollerTheme } from './css/z-vscroller.theme.css';
import { ZVScrollerViewModel } from './z-vscroller.viewmodel';
import { repeat } from 'lit/directives/repeat.js';

export class ZVScrollerView extends ZVScrollerViewModel {
  protected static finalizeStyles(
    styles?: CSSResultGroup | undefined
  ): CSSResultOrNative[] {
    return [...super.finalizeStyles(styles), ZVScrollerTheme.cssBase];
  }

  render(): TemplateResult {
    return html`
      <div class="inner" part="inner" style="height: ${this.virtualHeight}px;">
        ${repeat(
          this.visibleItems,
          (element) => element.id,
          (element, index) => {
            return html`
              <div
                class="item"
                part="item"
                style="top: ${this.getItemTop(index)}px; height: ${this
                  .itemHeight}px;"
              >
                ${element.cloneNode(true)}
              </div>
            `;
          }
        )}
      </div>
      <slot hidden></slot>
    `;
  }
}

if (!customElements.get('z-vscroller')) {
  window.customElements.define('z-vscroller', ZVScrollerView);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-vscroller': ZVScrollerView;
  }
}
