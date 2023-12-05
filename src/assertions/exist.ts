import { Then } from '@badeball/cypress-cucumber-preprocessor';

import { getCypressElement } from '../utils';

/**
 * Then I see element exists:
 *
 * ```gherkin
 * Then I see element exists
 * ```
 *
 * Assert element **_exists_** in the screen.
 *
 * @example
 *
 * ```gherkin
 * Then I see element exists
 * ```
 *
 * @remarks
 *
 * A preceding step like {@link When_I_find_element_by_text | "When I find element by text"} is required. For example:
 *
 * ```gherkin
 * When I find element by text "Text"
 * Then I see element exists
 * ```
 */
export function Then_I_see_element_exists() {
  getCypressElement().should('exist');
}

Then('I see element exists', Then_I_see_element_exists);
