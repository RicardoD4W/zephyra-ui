import { ThemeChangedModel } from 'src/model/theme-changed.model';

export const THEME_CHANGED_EVENT_NAME = 'theme:changed';

export class ThemeChangedEvent extends CustomEvent<ThemeChangedModel> {
  constructor(detail: ThemeChangedModel) {
    super(THEME_CHANGED_EVENT_NAME, {
      bubbles: true,
      composed: true,
      detail,
    });
  }
}
