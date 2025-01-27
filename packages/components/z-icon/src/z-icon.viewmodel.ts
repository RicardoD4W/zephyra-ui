import { ZComponent } from '@zephyra-ui/z-component';
import { property } from 'lit/decorators.js';
import { IconModel } from './model/z-icon.model';

export class ZIconViewModel extends ZComponent {
  @property({ type: String }) icon: IconModel = IconModel.INFO;
}
