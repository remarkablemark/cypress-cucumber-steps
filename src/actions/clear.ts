import { DataTable, When } from '@badeball/cypress-cucumber-preprocessor';

import { getCypressElement, getOptions } from '../utils';

/**
 * When I clear:
 *
 * ```gherkin
 * When I clear
 * ```
 *
 * Alias for {@link When_I_type | "When I type"}:
 *
 * ```gherkin
 * When I type "{selectall}{backspace}"
 * ```
 *
 * @example
 *
 * ```gherkin
 * When I clear
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/clear#Arguments):
 *
 * ```gherkin
 * When I clear
 *   | animationDistanceThreshold | 5 |
 *   | force | false |
 *   | log | true |
 *   | scrollBehavior | top |
 *   | timeout | 4000 |
 *   | waitForAnimations | true |
 * ```
 *
 * @remarks
 *
 * A preceding step like {@link When_I_find_element_by_label_text | "When I find element by label text"} is required. For example:
 *
 * ```gherkin
 * When I find element by label text "Input"
 *   And I clear
 * ```
 */
export function When_I_clear(options?: DataTable) {
  getCypressElement().clear(getOptions(options));
}

When('I clear', When_I_clear);
