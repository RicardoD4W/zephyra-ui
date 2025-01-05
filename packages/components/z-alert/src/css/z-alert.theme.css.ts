import { CSSResult, CSSResultOrNative, css } from 'lit';

export class ZAlertTheme {
  static cssBase: CSSResult = css`
    :host {
      padding: var(--z-spacing-xxs);
    }

    .alert-container {
      display: flex;
      align-items: center;

      padding: var(--z-spacing-xs) var(--z-spacing-sm);

      color: var(--z-color-text);

      font-size: var(--z-font-sm);
      font-weight: var(--z-font-regular);
      font-family: var(--z-font);

      width: var(--z-w-lg);
      min-width: var(--z-w-min);
      max-width: var(--z-w-max);

      height: var(--z-h-xs);
      min-height: var(--z-h-min);
      max-height: var(--z-h-max);

      border-radius: var(--z-radius-md);
    }

    .alert-icon {
      display: flex;
      align-items: center;
      justify-content: center;

      column-gap: var(--z-spacing-xxs);

      font-weight: var(--z-font-bold);
    }
    .alert-msg {
      font-weight: var(--z-font-regular);
    }
    .alert-separator {
      padding: 0 var(--z-spacing-xxs);
    }

    .info {
      background-color: var(--z-color-info);
      border-top: 4px solid var(--z-color-info-darkest);
    }
    .success {
      background-color: var(--z-color-success);
      border-top: 4px solid var(--z-color-success-darkest);
    }
    .warning {
      background-color: var(--z-color-warning);
      border-top: 4px solid var(--z-color-warning-darkest);
    }
    .error {
      background-color: var(--z-color-danger);
      border-top: 4px solid var(--z-color-danger-darkest);
    }
  `;

  static ZAlertTheme: CSSResultOrNative[] = [ZAlertTheme.cssBase];
}
