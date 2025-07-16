import { ZComponent } from '@zephyra-ui/z-component';
import { property, state } from 'lit/decorators.js';
import { CursorDictionary, CursorType } from './model/cursor.model';

export class ZSpoilerViewModel extends ZComponent {
  @property({ type: Number }) protected delay = 300;
  @property({ type: String }) protected cursor: CursorType = 'crosshair';

  @state() protected isShowing: boolean = false;

  private timeoutId: number | undefined;
  private isHovering: boolean = false;

  connectedCallback(): void {
    super.connectedCallback();
    this.style.setProperty('--z-cursor', this._getCursor(this.cursor));
  }

  private _getCursor(cursor: CursorType): string {
    return CursorDictionary[cursor] ?? CursorDictionary.crosshair;
  }

  protected makeItVisible(isVisible: boolean) {
    return () => {
      if (isVisible) {
        this.isHovering = true;
        this.timeoutId = setTimeout(() => {
          if (this.isHovering) {
            this.isShowing = true;
          }
        }, this.delay);
      } else {
        this.isHovering = false;
        clearTimeout(this.timeoutId);
        this.isShowing = false;
      }
    };
  }
}
