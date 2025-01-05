import { ZComponent } from '@zephyra-ui/z-component';
import { property } from 'lit/decorators.js';
import { StateModel } from './model/state.model';

export class ZAlertViewModel extends ZComponent {
  @property({ type: String }) state: StateModel = 'info';
}
