import { CSSResult, CSSResultOrNative, css } from 'lit';

export class ZVScrollerTheme {
  static cssBase: CSSResult = css`
    :host {
      height: 250px;
      width: 500px;
      overflow-y: auto;
    }

    .inner {
      position: relative;
      width: 100%;
    }

    .item {
      position: absolute;
      width: 100%;
    }
  `;

  static ZVScrollerTheme: CSSResultOrNative[] = [ZVScrollerTheme.cssBase];
}
