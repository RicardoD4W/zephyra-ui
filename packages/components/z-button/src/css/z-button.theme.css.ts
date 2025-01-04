import { CSSResult, CSSResultOrNative, css } from 'lit';

export class ZButtonTheme {
  static cssBase: CSSResult = css`
    .button {
      color: var(--z-color-text);

      padding: var(--z-spacing-xs) var(--z-spacing-sm);

      font-size: var(--z-font-md);
      font-weight: var(--z-font-regular);
      font-family: var(--z-font);

      transition: background-color var(--z-transition-fast) var(--z-transition),
        color var(--z-transition-fast) var(--z-transition),
        filter var(--z-transition-fast) var(--z-transition);

      cursor: pointer;
      outline: none;
      text-decoration: none;
      user-select: none;
      border: none;

      border-radius: var(--z-radius-md);
      box-shadow: var(--z-shadow-sm);
    }

    .button.outline:focus {
      box-shadow: none;
    }

    .button:disabled {
      opacity: var(--z-opacity-disabled);
      filter: grayscale(var(--z-grayscale-disabled));
      cursor: not-allowed;
    }

    .button:not([disabled]):hover {
      filter: brightness(var(--z-color-hover));
    }

    .button:not([disabled]):active {
      filter: brightness(var(--z-color-active));
    }

    .button.primary {
      background-color: var(--z-color-primary);
    }

    .button.success {
      background-color: var(--z-color-success);
    }

    .button.warning {
      background-color: var(--z-color-warning);
    }

    .button.danger {
      background-color: var(--z-color-danger);
    }

    .button.info {
      background-color: var(--z-color-info);
    }

    .button.outline {
      box-shadow: none;
      background-color: transparent;
      color: var(--z-color-primary);
    }

    .button.zephyra {
      background-color: var(--z-color-zephyra);
    }
  `;

  static ZButtonTheme: CSSResultOrNative[] = [ZButtonTheme.cssBase];
}
