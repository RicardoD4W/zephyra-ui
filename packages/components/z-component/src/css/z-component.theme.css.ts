import { CSSResult, CSSResultOrNative, css } from 'lit';

export class ZComponentTheme {
  static cssBase: CSSResult = css`
    :host {
      display: inline-block;

      /* COLORS */
      color-scheme: light dark;
      --z-color-hover: 110%;
      --z-color-active: 90%;
      --z-color-zephyra: #00a36d;
      --z-color-transparent: transparent;

      /* SIZE */
      --z-w-auto: auto;
      --z-w-xs: 4rem;
      --z-w-sm: 8rem;
      --z-w-md: 16rem;
      --z-w-lg: 32rem;
      --z-w-xl: 64rem;
      --z-w-xxl: 128rem;
      --z-w-full: 100%;
      --z-w-min: min-content;
      --z-w-max: ;

      --z-h-auto: auto;
      --z-h-xs: 2rem;
      --z-h-sm: 4rem;
      --z-h-md: 8rem;
      --z-h-lg: 16rem;
      --z-h-xl: 32rem;
      --z-h-xxl: 64rem;
      --z-h-full: 100%;
      --z-h-min: min-content;
      --z-h-max: max-content;

      /* OPACITY */
      --z-opacity-0: 0;
      --z-opacity-2: 0.25;
      --z-opacity-disabled: 0.25;
      --z-opacity-5: 0.5;
      --z-opacity-7: 0.75;
      --z-opacity-10: 1;

      /* FILTER */
      --z-grayscale-disabled: 0.8;

      /* TYPOGRAPHY */
      --z-font: 'Noto Sans', serif;

      --z-font-xs: 0.75rem;
      --z-font-sm: 0.875rem;
      --z-font-md: 1rem;
      --z-font-lg: 1.25rem;
      --z-font-xl: 1.5rem;
      --z-font-xxl: 2rem;

      --z-font-light: 300;
      --z-font-regular: 400;
      --z-font-medium: 500;
      --z-font-bold: 700;

      /* SPACING */
      --z-spacing-xxs: 0.25rem;
      --z-spacing-xs: 0.5rem;
      --z-spacing-sm: 0.75rem;
      --z-spacing-md: 1rem;
      --z-spacing-lg: 1.5rem;
      --z-spacing-xl: 2rem;
      --z-spacing-xxl: 3rem;

      /* ELEVATION */
      --z-shadow-none: none;
      --z-shadow-sm: 0px 1px 3px rgba(0, 0, 0, 0.12),
        0px 1px 2px rgba(0, 0, 0, 0.24);
      --z-shadow-md: 0px 4px 6px rgba(0, 0, 0, 0.1),
        0px 2px 4px rgba(0, 0, 0, 0.1);
      --z-shadow-lg: 0px 10px 15px rgba(0, 0, 0, 0.1),
        0px 4px 6px rgba(0, 0, 0, 0.1);
      --z-shadow-xl: 0px 20px 25px rgba(0, 0, 0, 0.1),
        0px 10px 10px rgba(0, 0, 0, 0.1);

      /* RADIUS */
      --z-radius-none: 0;
      --z-radius-sm: 0.125rem;
      --z-radius-md: 0.25rem;
      --z-radius-lg: 0.5rem;
      --z-radius-xl: 1rem;
      --z-radius-full: 9999px;

      /* TRANSITIONS */
      --z-transition-fast: 150ms;
      --z-transition-medium: 300ms;
      --z-transition-slow: 500ms;
      --z-transition-slower: 1000ms;
      --z-transition-linear: linear;
      --z-transition: ease;
      --z-transition-in: ease-in;
      --z-transition-out: ease-out;
      --z-transition-in-out: ease-in-out;

      /* Z-INDEX */
      --z-index-auto: auto;
      --z-index-0: 0;
      --z-index-dropdown: 5;
      --z-index-modal: 10;
      --z-index-popover: 15;
      --z-index-tooltip: 20;
      --z-index-max: 999;

      /* OTHERS */
      --z-none: none;

      transition: background-color var(--z-transition-fast) var(--z-transition),
        color var(--z-transition-fast) var(--z-transition),
        box-shadow var(--z-transition-fast) var(--z-transition),
        border-color var(--z-transition-fast) var(--z-transition),
        border-radius var(--z-transition-fast) var(--z-transition);
    }

    :host([data-theme='dark']) {
      --z-color-primary: #0056b3;
      --z-color-secondary: #3d5a5b;
      --z-color-danger: #721c24;
      --z-color-warning: #856404;
      --z-color-success: #155724;
      --z-color-info: #0c5460;
      --z-color-light: #343a40;
      --z-color-dark: #212529;
      --z-color-gray: #6c757d;
      --z-color-muted: #495057;
      --z-color-background: #f8f9fa;
      --z-color-border: #dee2e6;
      --z-color-text: #fff;
    }

    :host([data-theme='light']) {
      --z-color-primary: #93c9ff;
      --z-color-secondary: #a1b0b7;
      --z-color-danger: #f8d7da;
      --z-color-warning: #fff3cd;
      --z-color-success: #d4edda;
      --z-color-info: #d1ecf1;
      --z-color-light: #ffffff;
      --z-color-dark: #495057;
      --z-color-gray: #868e96;
      --z-color-muted: #adb5bd;
      --z-color-background: #ebebeb;
      --z-color-border: #f1f3f5;
      --z-color-text: #000;
    }
  `;

  static ZComponentTheme: CSSResultOrNative[] = [ZComponentTheme.cssBase];
}
