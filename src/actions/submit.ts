import { When } from '@badeball/cypress-cucumber-preprocessor';

import { getCypressElement } from '../utils';

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
 * @remarks
 *
 * A preceding step like {@link When_I_find_form | "When I find form"} is required. For example:
 *
 * ```gherkin
 * When I find form
 *   And I submit
 * ```
 *
 */
export function When_I_submit() {
  getCypressElement().submit();
}

When('I submit', When_I_submit);
