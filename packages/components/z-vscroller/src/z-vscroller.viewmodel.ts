import { ZComponent } from '@zephyra-ui/z-component';
import { state } from 'lit/decorators.js';

export class ZVScrollerViewModel extends ZComponent {
  @state() protected virtualHeight: number = 0;
  @state() protected visibleItems: HTMLElement[] = [];

  protected allItems: HTMLElement[] = [];
  protected allItemsHeight: number[] = [];
  protected cumulativeHeights: number[] = [];

  private _visibleStart: number = 0;
  private _visibleEnd: number = 0;

  protected firstUpdated(): void {
    const slot = this.shadowRoot?.querySelector('slot') as HTMLSlotElement;
    if (!slot) return;

    this.allItems = slot.assignedElements({ flatten: true }) as HTMLElement[];

    if (!this.allItems.length) {
      this.style.display = 'none';
      return;
    }

    this.allItemsHeight = this.allItems.map((el) => {
      const style = getComputedStyle(el);
      const marginTop = parseFloat(style.marginTop) || 0;
      const marginBot = parseFloat(style.marginBottom) || 0;

      return el.offsetHeight + marginTop + marginBot;
    });

    this.cumulativeHeights = this.allItemsHeight.reduce<number[]>(
      (arr, currentHeight, index) => {
        arr.push((arr[index - 1] || 0) + currentHeight);
        return arr;
      },
      []
    );

    this.virtualHeight = this.cumulativeHeights.at(-1) ?? 0;
    this.allItems.forEach((el) => el.remove());

    this.addEventListener('scroll', this._handleScroll);
    this._updateVisibleItems();
  }

  private _handleScroll = () => {
    this._updateVisibleItems();
  };

  private _updateVisibleItems(): void {
    const visibleEnd = this.cumulativeHeights.findIndex(
      (total) => total > this.scrollTop + this.clientHeight
    );

    this._visibleStart = this.cumulativeHeights.findIndex(
      (total) => total > this.scrollTop
    );

    this._visibleEnd =
      visibleEnd === -1 ? this.allItems.length : visibleEnd + 1;

    this.visibleItems = this.allItems.slice(
      this._visibleStart,
      this._visibleEnd
    );
  }

  protected getItemTop(index: number): number {
    const absoluteIndex = this._visibleStart + index;
    return this.cumulativeHeights[absoluteIndex - 1] ?? 0;
  }
}
