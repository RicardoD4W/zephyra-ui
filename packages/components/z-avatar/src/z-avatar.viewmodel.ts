import { ZComponent } from '@zephyra-ui/z-component';
import { property } from 'lit/decorators.js';
import { ZAvatarType } from './model/z-avatar.model';

export class ZAvatarViewModel extends ZComponent {
  @property({ type: String }) size = '50px';
  @property({ type: String }) type: ZAvatarType = 'initials';

  getInitials(): string {
    const slotContent = this.textContent?.trim() || '?';

    const initials = slotContent
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase())
      .join('');
    return initials;
  }

  connectedCallback(): void {
    super.connectedCallback();

    if (this.children[0]?.tagName === 'IMG') {
      this.type = 'img';
    }
  }
}
