import { ZComponent } from '@zephyra-ui/z-component';
import { property } from 'lit/decorators.js';
import { VariantsModels } from './model/variant.model';

export class ZButtonViewModel extends ZComponent {
  @property({ type: String }) label = 'Button';
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) isLoading = false;
  @property({ type: String }) variant: VariantsModels = 'primary';
}
