import { CSSResult, CSSResultOrNative, css } from 'lit';

export class ZSpoilerTheme {
  static cssBase: CSSResult = css`
    :host {
      display: inline-block;
      position: relative;
      cursor: var(--z-cursor);
    }

    .spoiler {
      position: relative;
      overflow: hidden;
      background-color: var(--z-color-gray);
      border-radius: var(--z-radius-lg);
    }

    .spoiler::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(
          circle,
          var(--z-color-text) 10%,
          transparent 10%
        )
        0 0;
      background-size: 20px 20px;
      animation: dotsAnimation 1.5s linear infinite, fadeIn 0.5s linear 1;
    }

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @keyframes dotsAnimation {
      0% {
        background-position: 0 0;
      }
      100% {
        background-position: 20px 20px;
      }
    }

    .hidden {
      visibility: hidden;
      opacity: 0;
    }

    .content {
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.5s ease, visibility 0s 0.5s;
    }

    .revealed .content {
      opacity: 1;
      visibility: visible;
      transition: opacity 0.5s ease, visibility 0s 0s;
    }
  `;

  static ZSpoilerTheme: CSSResultOrNative[] = [ZSpoilerTheme.cssBase];
}
