import { ZComponent } from '@zephyra-ui/z-component';
import { state } from 'lit/decorators.js';

export class ZVScrollerViewModel extends ZComponent {
  @state() protected itemHeight: number = 0;
  @state() protected virtualHeight: number = 0;
  @state() protected visibleItems: HTMLElement[] = [];

  protected allItems: HTMLElement[] = [];

  private _visibleStart: number = 0;
  private _visibleEnd: number = 0;

  protected firstUpdated(): void {
    const slot = this.shadowRoot?.querySelector('slot') as HTMLSlotElement;
    if (!slot) return;

    this.allItems =
      (slot?.assignedElements({ flatten: true }) as HTMLElement[]) ?? [];
    if (!this.allItems.length) return;

    const firstItem = this.allItems[0] as HTMLElement;
    this.itemHeight = firstItem.offsetHeight || 50;
    this.virtualHeight = this.itemHeight * this.allItems.length;

    this.allItems.forEach((el) => el.remove());

    this.addEventListener('scroll', this._handleScroll);
    this._updateVisibleItems();
  }

  private _handleScroll = () => {
    this._updateVisibleItems();
  };

  private _updateVisibleItems(): void {
    const scrollTop = this.scrollTop;
    const clientHeight = this.clientHeight;

    this._visibleStart = Math.floor(scrollTop / this.itemHeight);
    const visibleCount = Math.ceil(clientHeight / this.itemHeight);

    this._visibleEnd = Math.min(
      this._visibleStart + visibleCount + 1,
      this.allItems.length
    );
    this.visibleItems = this.allItems.slice(
      this._visibleStart,
      this._visibleEnd
    );
  }

  protected getItemTop(index: number): number {
    return (this._visibleStart + index) * this.itemHeight;
  }
}
