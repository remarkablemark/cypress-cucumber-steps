import { DataTable, When } from '@badeball/cypress-cucumber-preprocessor';

import { getCypressElement, getOptions } from '../utils';

/**
 * When I submit:
 *
 * ```gherkin
 * When I submit
 * ```
 *
 * Submits a form.
 *
 * @example
 *
 * ```gherkin
 * When I submit
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/submit#Arguments):
 *
 * ```gherkin
 * When I submit
 *   | log | true |
 *   | timeout | 4000 |
 * ```
 *
 * @remarks
 *
 * A preceding step like {@link When_I_find_form | "When I find form"} is required. For example:
 *
 * ```gherkin
 * When I find form
 *   And I submit
 * ```
 */
export function When_I_submit(options?: DataTable) {
  getCypressElement().submit(getOptions(options));
}

When('I submit', When_I_submit);
