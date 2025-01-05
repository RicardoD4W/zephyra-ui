import { ZComponent } from '@zephyra-ui/z-component';
import { property } from 'lit/decorators.js';
import { StateModel } from './model/z-icon.model';

export class ZIconViewModel extends ZComponent {
  @property({ type: String }) state: StateModel = 'info';
}
