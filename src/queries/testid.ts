import { When } from '@badeball/cypress-cucumber-preprocessor';

import { getCypressElement, setCypressElement } from '../utils';

/**
 * When I find elements by test ID:
 *
 * ```gherkin
 * When I find elements by test ID {string}
 * ```
 *
 * Finds all elements that have the matching `data-testid` or `data-test-id` attribute:
 *
 * ```html
 * <div data-testid="test"></div>
 * <div data-test-id="test"></div>
 * ```
 *
 * _It's recommended to use this only after the other queries don't work for your use case. Using `data-testid` or `data-test-id` attributes don't resemble how your software is used and should be avoided if possible._
 *
 * @example
 *
 * ```gherkin
 * When I find elements by test ID "test"
 * ```
 *
 * @remarks
 *
 * This precedes steps like {@link When_I_click | "When I click"}. For example:
 *
 * ```gherkin
 * When I find elements by test ID "test"
 *   And I get 1st element
 *   And I click
 * ```
 *
 * Inspired by Testing Library's [ByTestId](https://testing-library.com/docs/queries/bytestid).
 *
 * @see
 *
 * - {@link When_I_find_element_by_testid | When I find element by test ID}
 */
export function When_I_find_elements_by_testid(testId: string) {
  const selectors = [
    `[data-testid=${JSON.stringify(testId)}]`,
    `[data-test-id=${JSON.stringify(testId)}]`,
  ].map((selector) => `${selector}:visible`);
  setCypressElement(cy.get(selectors.join(',')));
}

When('I find elements by test ID {string}', When_I_find_elements_by_testid);

/**
 * When I find element by test ID:
 *
 * ```gherkin
 * When I find element by test ID {string}
 * ```
 *
 * Finds the first element that has the matching `data-testid` or `data-test-id` attribute:
 *
 * ```html
 * <div data-testid="test"></div>
 * <div data-test-id="test"></div>
 * ```
 *
 * _It's recommended to use this only after the other queries don't work for your use case. Using `data-testid` or `data-test-id` attributes don't resemble how your software is used and should be avoided if possible._
 *
 * @example
 *
 * ```gherkin
 * When I find element by test ID "test"
 * ```
 *
 * @remarks
 *
 * This precedes steps like {@link When_I_click | "When I click"}. For example:
 *
 * ```gherkin
 * When I find element by test ID "test"
 *   And I click
 * ```
 *
 * Inspired by Testing Library's [ByTestId](https://testing-library.com/docs/queries/bytestid).
 *
 * @see
 *
 * - {@link When_I_find_elements_by_testid | When I find elements by test ID}
 */
export function When_I_find_element_by_testid(testId: string) {
  When_I_find_elements_by_testid(testId);
  setCypressElement(getCypressElement().first());
}

When('I find element by test ID {string}', When_I_find_element_by_testid);
