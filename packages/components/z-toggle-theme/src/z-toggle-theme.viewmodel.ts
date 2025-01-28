import { ZComponent } from '@zephyra-ui/z-component';
import { property } from 'lit/decorators.js';

export class ZToggleThemeViewModel extends ZComponent {
  @property() isLightTheme: boolean = false;

  protected updateColorScheme() {
    this.isLightTheme = !this.isLightTheme;
    const dataTheme = this.isLightTheme ? 'light' : 'dark';
    this.dispatchThemeChangedEvent({ dataTheme });
  }
}
