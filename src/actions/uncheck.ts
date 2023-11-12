import { DataTable, When } from '@badeball/cypress-cucumber-preprocessor';

import { When_I_find_input_by_label_text } from '../queries';
import { getCypressElement, getOptions } from '../utils';

/**
 * When I uncheck:
 *
 * ```gherkin
 * When I uncheck
 * ```
 *
 * This element must be an `<input>` with type `checkbox`.
 *
 * @example
 *
 * Uncheck checkbox(es):
 *
 * ```gherkin
 * When I uncheck
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/uncheck#Arguments):
 *
 * ```gherkin
 * When I uncheck
 *   | animationDistanceThreshold | 5 |
 *   | log | true |
 *   | force | false |
 *   | scrollBehavior | top |
 *   | timeout | 4000 |
 *   | waitForAnimations | true |
 * ```
 *
 * @remarks
 *
 * A preceding step like {@link When_I_find_input_by_label_text | "When I find input by label text"} is required. For example:
 *
 * ```gherkin
 * When I find input by label text "Checkbox"
 *   And I uncheck
 * ```
 */
export function When_I_uncheck(options?: DataTable) {
  getCypressElement().uncheck(getOptions(options));
}

When('I uncheck', When_I_uncheck);

/**
 * When I uncheck input:
 *
 * ```gherkin
 * When I uncheck input {string}
 * ```
 *
 * Uncheck checkbox input by label text.
 *
 * @example
 *
 * ```gherkin
 * When I uncheck input "Text"
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/uncheck#Arguments):
 *
 * ```gherkin
 * When I uncheck input "Text"
 *   | animationDistanceThreshold | 5 |
 *   | log | true |
 *   | force | false |
 *   | scrollBehavior | top |
 *   | timeout | 4000 |
 *   | waitForAnimations | true |
 * ```
 */
export function When_I_uncheck_input(text: string, options?: DataTable) {
  When_I_find_input_by_label_text(text);
  getCypressElement().uncheck(getOptions(options));
}

When('I uncheck input {string}', When_I_uncheck_input);
