import { CSSResultGroup, CSSResultOrNative, TemplateResult, html } from 'lit';
import { ZSpoilerViewModel } from './z-spoiler.viewmodel';
import { classMap } from 'lit/directives/class-map.js';
import { ZSpoilerTheme } from './css/z-spoiler.theme.css';

export class ZSpoilerView extends ZSpoilerViewModel {
  protected static finalizeStyles(
    styles?: CSSResultGroup | undefined
  ): CSSResultOrNative[] {
    return [...super.finalizeStyles(styles), ZSpoilerTheme.cssBase];
  }

  public render(): TemplateResult {
    return html` <article
      @mouseenter=${this.makeItVisible(true)}
      @mouseleave=${this.makeItVisible(false)}
      class=${classMap({ spoiler: !this.isShowing })}
    >
      <div
        class=${classMap({
          hidden: !this.isShowing,
          revealed: this.isShowing,
        })}
      >
        <div class="content">
          <slot></slot>
        </div>
      </div>
    </article>`;
  }
}

if (!customElements.get('z-spoiler')) {
  window.customElements.define('z-spoiler', ZSpoilerView);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-spoiler': ZSpoilerView;
  }
}
