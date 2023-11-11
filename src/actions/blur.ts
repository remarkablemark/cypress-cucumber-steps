import { DataTable, When } from '@badeball/cypress-cucumber-preprocessor';

import { getOptions } from '../utils';

/**
 * When I blur:
 *
 * ```gherkin
 * When I blur
 * ```
 *
 * Blurs the element with focus.
 *
 * @example
 *
 * ```gherkin
 * When I blur
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/blur#Arguments):
 *
 * ```gherkin
 * When I blur
 *   | log | true |
 *   | force | false |
 *   | timeout | 4000 |
 * ```
 *
 * @remarks
 *
 * A preceding step like {@link When_I_find_input_by_label_text | "When I find input by label text"} is required. For example:
 *
 * ```gherkin
 * When I find input by label text "Text"
 *   And I blur
 * ```
 */
export function When_I_blur(options?: DataTable) {
  cy.focused().blur(getOptions(options));
}

When('I blur', When_I_blur);
