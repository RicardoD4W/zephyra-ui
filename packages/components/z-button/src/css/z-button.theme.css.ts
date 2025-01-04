import { CSSResult, CSSResultOrNative, css } from 'lit';

export class ZButtonTheme {
  static cssBase: CSSResult = css`
    .button {
      color: var(--z-color-text);

      padding: var(--z-spacing-xs) var(--z-spacing-sm);

      font-size: var(--z-font-md);
      font-weight: var(--z-font-regular);
      font-family: var(--z-font);

      width: var(--z-w-sm);
      min-width: var(--z-w-min);
      max-width: var(--z-w-max);

      height: var(--z-h-xs);
      min-height: var(--z-h-min);
      max-height: var(--z-h-max);

      transition: background-color var(--z-transition-fast) var(--z-transition),
        color var(--z-transition-fast) var(--z-transition),
        filter var(--z-transition-fast) var(--z-transition);

      cursor: pointer;
      outline: var(--z-none);
      text-decoration: var(--z-none);
      user-select: var(--z-none);
      border: var(--z-none);

      border-radius: var(--z-radius-md);
      box-shadow: var(--z-shadow-sm);
    }

    .button.outline:focus {
      box-shadow: var(--z-none);
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
      box-shadow: var(--z-none);
      background-color: var(--z-color-transparent);
      color: var(--z-color-primary);
    }

    .button.zephyra {
      background-color: var(--z-color-zephyra);
    }

    .loading-wave {
      width: var(--z-w-full);
      height: var(--z-h-full);
      display: flex;
      justify-content: center;
      align-items: flex-end;

      position: absolute;
    }

    .loading-bar {
      width: var(--z-radius-md);
      height: var(--z-radius-md);
      margin: var(--z-radius-none) var(--z-radius-sm);
      background-color: var(--z-color-text);
      border-radius: var(--z-radius-lg);
      animation: loading-wave-animation var(--z-transition-slower)
        var(--z-transition-in-out) infinite;
    }

    .loading-container {
      position: relative;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    .hidden {
      visibility: hidden;
    }

    .loading-bar:nth-child(2) {
      animation-delay: 0.1s;
    }

    .loading-bar:nth-child(3) {
      animation-delay: 0.2s;
    }

    .loading-bar:nth-child(4) {
      animation-delay: 0.3s;
    }

    @keyframes loading-wave-animation {
      0% {
        height: var(--z-radius-md);
      }

      50% {
        height: var(--z-radius-xl);
      }

      100% {
        height: var(--z-radius-md);
      }
    }
  `;

  static ZButtonTheme: CSSResultOrNative[] = [ZButtonTheme.cssBase];
}
