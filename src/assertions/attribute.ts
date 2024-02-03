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
 * - {@link Then_I_see_element_attribute_equals | Then I see element attribute equals}
 * - {@link Then_I_see_element_attribute_contains | Then I see element attribute contains}
 */
export function Then_I_see_element_has_attribute(name: string) {
  getCypressElement().should(($element: Cypress.JQueryWithSelector) => {
    expect($element).to.have.attr(name);
  });
}

Then('I see element has attribute {string}', Then_I_see_element_has_attribute);

/**
 * Then I see element attribute equals:
 *
 * ```gherkin
 * Then I see element attribute {string} equals {string}
 * ```
 *
 * @example
 *
 * ```gherkin
 * Then I see element attribute "name" equals "value"
 * ```
 *
 * @remarks
 *
 * A preceding step like {@link When_I_find_element_by_text | "When I find element by text"} is required. For example:
 *
 * ```gherkin
 * When I find link by text "Link"
 * Then I see element attribute "href" equals "/"
 * ```
 *
 * @see
 *
 * - {@link Then_I_see_element_has_attribute | Then I see element has attribute}
 * - {@link Then_I_see_element_attribute_contains | Then I see element attribute contains}
 */
export function Then_I_see_element_attribute_equals(
  name: string,
  value: string,
) {
  getCypressElement().should(($element: Cypress.JQueryWithSelector) => {
    expect($element).to.have.attr(name, value);
  });
}

Then(
  'I see element attribute {string} equals {string}',
  Then_I_see_element_attribute_equals,
);

/**
 * Then I see element attribute contains:
 *
 * ```gherkin
 * Then I see element attribute {string} contains {string}
 * ```
 *
 * @example
 *
 * ```gherkin
 * Then I see element attribute "name" contains "value"
 * ```
 *
 * @remarks
 *
 * A preceding step like {@link When_I_find_element_by_text | "When I find element by text"} is required. For example:
 *
 * ```gherkin
 * When I find link by text "Link"
 * Then I see element attribute "href" contains "/"
 * ```
 *
 * @see
 *
 * - {@link Then_I_see_element_has_attribute | Then I see element has attribute}
 * - {@link Then_I_see_element_attribute_equals | Then I see element attribute equals}
 */
export function Then_I_see_element_attribute_contains(
  name: string,
  value: string,
) {
  getCypressElement().should(($element: Cypress.JQueryWithSelector) => {
    expect($element.attr(name)).to.contain(value);
  });
}

Then(
  'I see element attribute {string} contains {string}',
  Then_I_see_element_attribute_contains,
);
