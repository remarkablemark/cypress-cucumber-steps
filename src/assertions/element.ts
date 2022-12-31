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
 * - {@link Then_I_see_element_is_not_visible | Then I see element is not visible}
 * - {@link Then_I_see_text | Then I see text}
 */
export function Then_I_see_element_is_visible() {
  getCypressElement().should('be.visible');
}

Then('I see element is visible', Then_I_see_element_is_visible);

/**
 * Then I see element is not visible:
 *
 * ```gherkin
 * Then I see element is not visible
 * ```
 *
 * @example
 *
 * ```gherkin
 * Then I see element is not visible
 * ```
 *
 * @remarks
 *
 * This requires a preceding step like {@link When_I_find_element_by_text | "When I find element by text"}. For example:
 *
 * ```gherkin
 * When I find element by text "Text"
 * Then I see element is not visible
 * ```
 *
 * @see
 *
 * - {@link Then_I_do_not_see_text | Then I do not see text}
 * - {@link Then_I_do_not_see_visible_text | Then I do not see visible text}
 * - {@link Then_I_see_element_is_visible | Then I see element is visible}
 */
export function Then_I_see_element_is_not_visible() {
  getCypressElement().should('not.be.visible');
}

Then('I see element is not visible', Then_I_see_element_is_not_visible);
