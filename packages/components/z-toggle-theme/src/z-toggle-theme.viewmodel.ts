import { ZComponent } from '@zephyra-ui/z-component';
import { state } from 'lit/decorators.js';

export class ZToggleThemeViewModel extends ZComponent {
  @state() isLightTheme: boolean = false;
  private _observer!: MutationObserver;

  connectedCallback() {
    super.connectedCallback();
    this._initialTheme(this.dataTheme);
    this._observeThemeChanges();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._observer.disconnect();
  }

  private _initialTheme(state: 'light' | 'dark') {
    if (state === 'light') this.isLightTheme = true;
    if (state === 'dark') this.isLightTheme = false;
  }

  private _observeThemeChanges() {
    this._observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'data-theme'
        ) {
          const newTheme = document.documentElement.getAttribute(
            'data-theme'
          ) as 'light' | 'dark';
          this._initialTheme(newTheme);
        }
      });
    });

    this._observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });
  }

  protected updateColorScheme() {
    if (this.dataTheme === 'light') {
      this.isLightTheme = false;
    }
    if (this.dataTheme === 'dark') {
      this.isLightTheme = true;
    }

    this.dataTheme = this.isLightTheme ? 'light' : 'dark';
    this.applyTheme();
    this.persistTheme();
  }
}
