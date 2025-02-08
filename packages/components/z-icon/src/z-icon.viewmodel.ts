import { ZComponent } from '@zephyra-ui/z-component';
import { property, state } from 'lit/decorators.js';
import { IconVariant } from './model/z-icon.model';

export class ZIconViewModel extends ZComponent {
  @property({ type: String }) icon: string = 'help';
  @property({ type: Number }) size: number = 32;
  @property({ type: String })
  variant: (typeof IconVariant)[keyof typeof IconVariant] = IconVariant.OUTLINE;

  @state() color!: string;

  private observer?: MutationObserver;

  connectedCallback() {
    super.connectedCallback();
    this._updateColor();
    this._observeThemeChange();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.observer?.disconnect();
  }

  private _updateColor() {
    this.color = getComputedStyle(this)
      .getPropertyValue('--z-color-text')
      .trim();
  }

  private _observeThemeChange() {
    const htmlElement = document.documentElement;
    this.observer = new MutationObserver(() => this._updateColor());

    this.observer.observe(htmlElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });
  }

  protected handleError(event: Event) {
    event.preventDefault();

    const imgElement = event.target as HTMLImageElement;
    imgElement.src = `https://api.iconify.design/material-symbols/unknown-document-outline.svg?width=${
      this.size
    }&height=${this.size}&color=${encodeURIComponent(
      this.getCssVar('--z-color-text')
    )}`;
  }
}
