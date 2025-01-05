import { CSSResult, CSSResultOrNative, css } from 'lit';

export class ZIconTheme {
  static cssBase: CSSResult = css`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .icon {
      color: var(--z-color-text);

      width: var(--z-icon-md);
      min-width: var(--z-icon-sm);
      max-width: var(--z-icon-lg);

      height: var(--z-icon-md);
      min-height: var(--z-icon-sm);
      max-height: var(--z-icon-lg);
    }
  `;

  static ZIconTheme: CSSResultOrNative[] = [ZIconTheme.cssBase];
}
