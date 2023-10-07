import { When } from '@badeball/cypress-cucumber-preprocessor';

import {
  When_I_find_element_by_label_text,
  When_I_get_element_by_selector,
} from '../queries';
import { getCypressElement, setCypressElement } from '../utils';

/**
 * When I find input by label text:
 *
 * ```gherkin
 * When I find input by label text {string}
 * ```
 *
 * Finds the first input element that matches the label text.
 *
 * @example
 *
 * ```gherkin
 * When I find input by label text "Email"
 * ```
 *
 * @remarks
 *
 * This precedes steps like {@link Then_I_see_value | "Then I see value"}. For example:
 *
 * ```gherkin
 * When I find input by label text "Email"
 * Then I see value "user@example.com"
 * ```
 *
 * Inspired by Testing Library's [ByLabelText](https://testing-library.com/docs/queries/bylabeltext).
 *
 * @see
 *
 * - {@link When_I_find_element_by_label_text | When I find element by label text }
 */
export function When_I_find_input_by_label_text(text: string) {
  When_I_find_element_by_label_text(text);
  const label = getCypressElement();

  label.invoke('attr', 'for').then((forValue) => {
    if (forValue) {
      When_I_get_element_by_selector(`#${forValue}`);
    } else {
      When_I_find_element_by_label_text(text);
      setCypressElement(getCypressElement().find('input').first());
    }
  });
}

When('I find input by label text {string}', When_I_find_input_by_label_text);
