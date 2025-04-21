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

      color: var(--z-color-white);
      background-color: var(--z-color-gray);
    }
  `;

  static ZAvatarTheme: CSSResultOrNative[] = [ZAvatarTheme.cssBase];
}
