import { CSSResultGroup, CSSResultOrNative } from 'lit';
import { ZComponentTheme } from './css/z-component.theme.css';
import { ZComponentViewModel } from './z-component.viewmodel';

export class ZComponent extends ZComponentViewModel {
  protected static finalizeStyles(
    styles?: CSSResultGroup | undefined
  ): CSSResultOrNative[] {
    return [...super.finalizeStyles(styles), ZComponentTheme.cssBase];
  }
}
