import { Then } from '@badeball/cypress-cucumber-preprocessor';

import { getCypressElement } from '../utils';

/**
 * Then I count elements:
 *
 * ```gherkin
 * Then I count {int} elements
 * ```
 *
 * @example
 *
 * Assert 10 elements are found:
 *
 * ```gherkin
 * Then I count 10 elements
 * ```
 *
 * A preceding step like {@link When_I_find_links_by_text | "When I find links by text"} is required. For example:
 *
 * ```gherkin
 * When I find links by text "Link"
 * Then I count 1 element
 * ```
 */
export function Then_I_count_elements(count: number) {
  getCypressElement().should('have.length', count);
}

Then('I count {int} element', Then_I_count_elements);
Then('I count {int} elements', Then_I_count_elements);
