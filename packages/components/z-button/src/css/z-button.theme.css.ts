import { CSSResult, CSSResultOrNative, css } from 'lit';

export class ZButtonTheme {
  static cssBase: CSSResult = css`
    .button {
      padding: var(--z-spacing-sm) var(--z-spacing-md);
      background-color: var(--z-color-primary);
      color: var(--z-color-text);
      font-size: var(--z-font-md);
      font-weight: var(--z-font-regular);
      font-family: var(--z-font);
      border: 1px solid var(--z-color-border);
      border-radius: var(--z-radius-md);
      cursor: pointer;
      transition: background-color var(--z-transition-fast),
        border-color var(--z-transition-fast);
      outline: none;
      text-decoration: none;
      user-select: none;
    }

    .button:focus {
      border-color: var(--z-color-primary);
      box-shadow: 0 0 0 3px rgba(0, 120, 212, 0.2);
    }

    .button:disabled {
      background-color: var(--z-color-border);
      color: var(--z-color-text-muted);
      cursor: not-allowed;
      border-color: var(--z-color-border);
    }

    .button:not([disabled]):hover {
      background-color: var(--z-color-primary-dark);
      border-color: var(--z-color-border-hover);
    }

    .button:not([disabled]):active {
      background-color: var(--z-color-primary-darkest);
      border-color: var(--z-color-border-hover);
    }
  `;

  static ZButtonTheme: CSSResultOrNative[] = [ZButtonTheme.cssBase];
}
