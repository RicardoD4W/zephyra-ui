import { CSSResult, CSSResultOrNative, css } from 'lit';

export class ZAvatarTheme {
  static cssBase: CSSResult = css`
    :host {
      display: inline-block;
    }

    .avatar-container {
      display: flex;
      justify-content: center;
      align-items: center;

      width: var(--avatar-size, 50px);
      height: var(--avatar-size, 50px);

      overflow: hidden;
    }

    ::slotted(img) {
      width: var(--z-w-full);
      height: var(--z-h-full);
      object-fit: cover;
      border-radius: var(--z-rounded);
    }

    .initials {
      width: var(--z-w-full);
      height: var(--z-h-full);
      border-radius: var(--z-rounded);

      display: flex;
      justify-content: center;
      align-items: center;

      font-size: var(--z-font-md);
      font-weight: var(--z-font-light);

      text-transform: uppercase;
    }

    .light {
      color: var(--z-color-light);
      background-color: var(--z-color-dark);
    }
    .dark {
      color: var(--z-color-text);
      background-color: var(--z-color-light);
    }
  `;

  static ZAvatarTheme: CSSResultOrNative[] = [ZAvatarTheme.cssBase];
}
