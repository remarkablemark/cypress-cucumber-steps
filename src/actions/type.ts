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
 * @remarks
 *
 * A preceding step like {@link When_I_find_element_by_label_text | "When I find element by label text"} is required. For example:
 *
 * ```gherkin
 * When I find element by label text "Input"
 *   And I clear
 * ```
 */
export function When_I_clear() {
  getCypressElement().clear();
}

When('I clear', When_I_clear);

/**
 * When I type:
 *
 * ```gherkin
 * When I type {string}
 * ```
 *
 * @example
 *
 * ```gherkin
 * When I type "Hello, world!"
 * ```
 *
 * [Options](https://docs.cypress.io/api/commands/type#Arguments):
 *
 * ```gherkin
 * When I type "Hello, world!"
 *   | animationDistanceThreshold | 5 |
 *   | delay | 10 |
 *   | force | false |
 *   | log | true |
 *   | parseSpecialCharSequences | true |
 *   | release | true |
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
 * When I find element by label text "Email"
 *   And I type "user@example.com"
 * ```
 *
 * Text may include [special character sequences](https://docs.cypress.io/api/commands/type#Syntax). For example:
 *
 * ```gherkin
 * # types the Enter key
 * When I type "{enter}"
 * ```
 */
export function When_I_type(text: string, options?: DataTable) {
  getCypressElement().type(text, getOptions(options));
}

When('I type {string}', When_I_type);
