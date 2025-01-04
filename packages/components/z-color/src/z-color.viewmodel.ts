import { ZComponent } from '@zephyra-ui/z-component';
import { property } from 'lit/decorators.js';

export class ZColorViewModel extends ZComponent {
  @property({ type: String }) color: string = 'red';
  @property({ type: Number }) size: number = 50;
}
