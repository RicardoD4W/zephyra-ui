import { ZComponent } from '@zephyra-ui/z-component';
import { property } from 'lit/decorators.js';

export class ZButtonViewModel extends ZComponent {
  @property({ type: String }) label = 'Button';
  @property({ type: Boolean }) disabled = false;
}
