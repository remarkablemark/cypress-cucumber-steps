import { DataTable, When } from '@badeball/cypress-cucumber-preprocessor';

import { When_I_find_input_by_label_text } from '../queries';
import { getCypressElement, getOptions } from '../utils';

/**
 * When I check:
 *
 * ```gherkin
 * When I check
 * ```
 *
 * This element must be an `<input>` with type `checkbox` or `radio`.
 *
 * @example
 *
 * Check checkbox(es) or radio(s):
 *
 * ```gherkin
 * When I check
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/check#Arguments):
 *
 * ```gherkin
 * When I check
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
 *   And I check
 * ```
 */
export function When_I_check(options?: DataTable) {
  getCypressElement().check(getOptions(options));
}

When('I check', When_I_check);

/**
 * When I check input:
 *
 * ```gherkin
 * When I check input {string}
 * ```
 *
 * Check checkbox or radio input by label text.
 *
 * @example
 *
 * ```gherkin
 * When I check input "Text"
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/check#Arguments):
 *
 * ```gherkin
 * When I check input "Text"
 *   | animationDistanceThreshold | 5 |
 *   | log | true |
 *   | force | false |
 *   | scrollBehavior | top |
 *   | timeout | 4000 |
 *   | waitForAnimations | true |
 * ```
 */
export function When_I_check_input(text: string, options?: DataTable) {
  When_I_find_input_by_label_text(text);
  getCypressElement().check(getOptions(options));
}

When('I check input {string}', When_I_check_input);
