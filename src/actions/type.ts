import { When } from '@badeball/cypress-cucumber-preprocessor';

import { getCypressElement } from '../utils';

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
 * This requires a preceding step like {@link When_I_get_element_by_label_text | "When I get element by label text"}. For example:
 *
 * ```gherkin
 * When I get element by label text "Input"
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
 * @remarks
 *
 * This requires a preceding step like {@link When_I_get_element_by_label_text | "When I get element by label text"}. For example:
 *
 * ```gherkin
 * When I get element by label text "Email"
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
export function When_I_type(text: string) {
  getCypressElement().type(text);
}

When('I type {string}', When_I_type);
