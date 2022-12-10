import { When } from '@badeball/cypress-cucumber-preprocessor';

import { getCypressElement } from '../utils';

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
 * This requires a preceding step like query {@link When_I_get_element_by_label_text | "When I get element by label text"}. E.g.:
 *
 * ```gherkin
 * When I get element by label text "Email"
 *   And I type "user@example.com"
 * ```
 */
export function When_I_type(text: string) {
  getCypressElement(this).type(text);
}

When('I type {string}', When_I_type);
