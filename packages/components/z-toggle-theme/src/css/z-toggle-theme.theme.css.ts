import { CSSResult, CSSResultOrNative, css } from 'lit';

export class ZToggleThemeTheme {
  static cssBase: CSSResult = css`
    .center {
      display: flex;
      justify-content: center;
      align-items: center;

      cursor: pointer;
    }

    svg {
      width: var(--z-spacing-xxl, 50px);
      height: var(--z-spacing-xxl, 50px);
      transition: stroke 0.5s ease, opacity 0.5s ease;
    }

    .sun,
    .moon {
      fill: none;
      stroke-width: 4;
      stroke-linecap: round;
      opacity: 0;
      transform-origin: center;
      transition: stroke 0.5s ease, opacity 0.5s ease, transform 0.5s ease;
    }

    .sun {
      stroke: var(--color-sun, gold);
    }

    .moon {
      stroke: var(--color-moon, gray);
    }

    svg.day .sun {
      opacity: 1;
      transform: scale(1);
    }

    svg.day .moon {
      opacity: 0;
      transform: scale(0);
    }

    svg.night .sun {
      opacity: 0;
      transform: scale(0);
    }

    svg.night .moon {
      opacity: 1;
      transform: scale(1);
    }
  `;

  static ZToggleThemeTheme: CSSResultOrNative[] = [ZToggleThemeTheme.cssBase];
}
