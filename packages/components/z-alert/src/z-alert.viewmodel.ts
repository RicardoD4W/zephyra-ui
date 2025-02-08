import { ZComponent } from '@zephyra-ui/z-component';
import { property } from 'lit/decorators.js';
import { AlertModel } from './model/z-alert.model';

export class ZAlertViewModel extends ZComponent {
  @property({ type: String })
  state: (typeof AlertModel)[keyof typeof AlertModel] = AlertModel.INFO;
}
