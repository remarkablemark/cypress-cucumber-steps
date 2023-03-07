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
 * Then I see element has attribute "name"
 * ```
 *
 * @remarks
 *
 * A preceding step like {@link When_I_find_element_by_text | "When I find element by text"} is required. For example:
 *
 * ```gherkin
 * When I find link by text "Link"
 * Then I see element has attribute "href"
 * ```
 *
 * @see
 *
 * - {@link Then_I_see_element_has_attribute_equal_to | Then I see element has attribute equal to}
 * - {@link Then_I_see_element_has_attribute_containing | Then I see element has attribute containing}
 */
export function Then_I_see_element_has_attribute(attributeName: string) {
  getCypressElement().should('have.attr', attributeName);
}

Then('I see element has attribute {string}', Then_I_see_element_has_attribute);

/**
 * Then I see element has attribute equal to:
 *
 * ```gherkin
 * Then I see element has attribute {string} equal to {string}
 * ```
 *
 * @example
 *
 * ```gherkin
 * Then I see element has attribute "name" equal to "value"
 * ```
 *
 * @remarks
 *
 * A preceding step like {@link When_I_find_element_by_text | "When I find element by text"} is required. For example:
 *
 * ```gherkin
 * When I find link by text "Link"
 * Then I see element has attribute "href" equal to "/"
 * ```
 *
 * @see
 *
 * - {@link Then_I_see_element_has_attribute | Then I see element has attribute}
 * - {@link Then_I_see_element_has_attribute_containing | Then I see element has attribute containing}
 */
export function Then_I_see_element_has_attribute_equal_to(
  attributeName: string,
  attributeValue: string
) {
  getCypressElement().should('have.attr', attributeName, attributeValue);
}

Then(
  'I see element has attribute {string} equal to {string}',
  Then_I_see_element_has_attribute_equal_to
);

/**
 * Then I see element has attribute containing:
 *
 * ```gherkin
 * Then I see element has attribute {string} containing {string}
 * ```
 *
 * @example
 *
 * ```gherkin
 * Then I see element has attribute "name" containing "value"
 * ```
 *
 * @remarks
 *
 * A preceding step like {@link When_I_find_element_by_text | "When I find element by text"} is required. For example:
 *
 * ```gherkin
 * When I find link by text "Link"
 * Then I see element has attribute "href" containing "/"
 * ```
 *
 * @see
 *
 * - {@link Then_I_see_element_has_attribute | Then I see element has attribute}
 * - {@link Then_I_see_element_has_attribute_equal_to | Then I see element has attribute equal to}
 */
export function Then_I_see_element_has_attribute_containing(
  attributeName: string,
  attributeValue: string
) {
  getCypressElement()
    .should('have.attr', attributeName)
    .and('include', attributeValue);
}

Then(
  'I see element has attribute {string} containing {string}',
  Then_I_see_element_has_attribute_containing
);
