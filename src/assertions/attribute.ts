import { Then } from '@badeball/cypress-cucumber-preprocessor';

import { getCypressElement } from '../utils';

/**
 * Then I see element has attribute:
 *
 * ```gherkin
 * Then I see element has attribute {string}
 * ```
 *
 * @example
 *
 * ```gherkin
 * Then I see element has attribute "attribute"
 * ```
 *
 * @remarks
 *
 * This requires a preceding step like {@link When_I_find_element_by_text | "When I find element by text"}. For example:
 *
 * ```gherkin
 * When I find link by text "Link"
 * Then I see element has attribute "href"
 * ```
 */
export function Then_I_see_element_has_attribute(attribute: string) {
  getCypressElement().should('have.attr', attribute);
}

Then('I see element has attribute {string}', Then_I_see_element_has_attribute);
