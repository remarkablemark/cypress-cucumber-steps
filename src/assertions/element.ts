import { Then } from '@badeball/cypress-cucumber-preprocessor';

import { getCypressElement } from '../utils';

/**
 * Then I see element is visible:
 *
 * ```gherkin
 * Then I see element is visible
 * ```
 *
 * @example
 *
 * ```gherkin
 * Then I see element is visible
 * ```
 *
 * @remarks
 *
 * This requires a preceding step like {@link When_I_find_element_by_text | "When I find element by text"}. For example:
 *
 * ```gherkin
 * When I find element by text "Text"
 * Then I see element is visible
 * ```
 *
 * @see
 *
 * - {@link Then_I_see_text | Then I see text}
 */
export function Then_I_see_element_is_visible() {
  getCypressElement(this).should('be.visible');
}

Then('I see element is visible', Then_I_see_element_is_visible);
