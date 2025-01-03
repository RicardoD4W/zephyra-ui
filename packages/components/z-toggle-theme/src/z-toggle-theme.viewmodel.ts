import { ZComponent } from '@zephyra-ui/z-component';
import { state } from 'lit/decorators.js';

export class ZToggleThemeViewModel extends ZComponent {
  @state() isLightTheme: boolean = false;

  protected updateColorScheme() {
    this.isLightTheme = !this.isLightTheme;
    const dataTheme = this.isLightTheme ? 'light' : 'dark';
    this.dispatchThemeChangedEvent({ dataTheme });
  }
}
