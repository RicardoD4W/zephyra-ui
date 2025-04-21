import { CSSResultGroup, CSSResultOrNative, TemplateResult, html } from 'lit';
import { ZAvatarTheme } from './css/z-avatar.theme.css';
import { ZAvatarViewModel } from './z-avatar.viewmodel';
import { choose } from 'lit/directives/choose.js';

export class ZAvatarView extends ZAvatarViewModel {
  protected static finalizeStyles(
    styles?: CSSResultGroup | undefined
  ): CSSResultOrNative[] {
    return [...super.finalizeStyles(styles), ZAvatarTheme.cssBase];
  }

  public render(): TemplateResult {
    return html`
      <div
        class="avatar-container"
        part="avatar-container"
        style="--avatar-size: ${this.size}"
      >
        ${choose(this.type, [
          ['img', () => html` <slot part="img" class="img"></slot>`],
          [
            'initials',
            () =>
              html` <span part="initials" class="initials">
                ${this.getInitials()}
              </span>`,
          ],
        ])}
      </div>
    `;
  }
}

if (!customElements.get('z-avatar')) {
  window.customElements.define('z-avatar', ZAvatarView);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-avatar': ZAvatarView;
  }
}
