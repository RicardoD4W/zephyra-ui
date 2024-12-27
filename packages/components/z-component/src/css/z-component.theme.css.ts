import { CSSResult, CSSResultOrNative, css } from 'lit';

export class ZComponentTheme {
  static cssBase: CSSResult = css`
    :host {
      display: inline-block;

      /* COLORS */
      color-scheme: light dark;

      --z-color-primary: #66b3ff;
      --z-color-secondary: #a1b0b7;
      --z-color-danger: #f8d7da;
      --z-color-warning: #fff3cd;
      --z-color-success: #d4edda;
      --z-color-info: #d1ecf1;
      --z-color-light: #ffffff;
      --z-color-dark: #495057;
      --z-color-gray: #868e96;
      --z-color-muted: #adb5bd;
      --z-color-background: #ffffff;
      --z-color-border: #f1f3f5;
      --z-color-hover: rgba(0, 0, 0, 0.05);

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
      --z-radius-full: 999999999px;

      /* TRANSITIONS */
      --z-transition-fast: 150ms;
      --z-transition-medium: 300ms;
      --z-transition-slow: 500ms;
      --z-transition-in: cubic-bezier(0.4, 0, 1, 1);
      --z-transition-out: cubic-bezier(0, 0, 0.2, 1);
      --z-transition-in-out: cubic-bezier(0.4, 0, 0.2, 1);

      /* Z-INDEX */
      --z-index-auto: auto;
      --z-index-0: 0;
      --z-index-dropdown: 5;
      --z-index-modal: 10;
      --z-index-popover: 15;
      --z-index-tooltip: 20;
      --z-index-max: 999;

      /* OTHERS */
    }

    @media (prefers-color-scheme: dark) {
      :host {
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
        --z-color-hover: rgba(0, 0, 0, 0.125);
      }
    }
  `;

  static ZComponentTheme: CSSResultOrNative[] = [ZComponentTheme.cssBase];
}
