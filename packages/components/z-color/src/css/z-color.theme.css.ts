import { CSSResult, CSSResultOrNative, css } from 'lit';

export class ZColorTheme {
  static cssBase: CSSResult = css`
    .color {
      border-radius: 50%;
    }
  `;

  static ZColorTheme: CSSResultOrNative[] = [ZColorTheme.cssBase];
}
