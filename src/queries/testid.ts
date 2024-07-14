import { DataTable, When } from '@badeball/cypress-cucumber-preprocessor';

import { PseudoSelector } from '../constants';
import { getTestIdElements, setCypressElement } from '../utils';

/**
 * When I find elements by test ID:
 *
 * ```gherkin
 * When I find elements by test ID {string}
 * ```
 *
 * Finds all elements that matches the `data-testid` or `data-test-id` attribute:
 *
 * ```html
 * <div data-testid="test"></div>
 * <div data-test-id="test"></div>
 * ```
 *
 * _Use this only if the other queries don't work. `data-testid` or `data-test-id` don't resemble how your software is used and should be avoided if possible._
 *
 * @example
 *
 * ```gherkin
 * When I find elements by test ID "testID"
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/get#Arguments):
 *
 * ```gherkin
 * When I find elements by test ID "testID"
 *   | log | true |
 *   | timeout | 4000 |
 *   | withinSubject | null |
 *   | includeShadowDom | false |
 * ```
 *
 * @remarks
 *
 * This precedes steps like {@link When_I_click | "When I click"}. For example:
 *
 * ```gherkin
 * When I find elements by test ID "testID"
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
export function When_I_find_elements_by_testid(
  testId: string,
  options?: DataTable,
) {
  setCypressElement(getTestIdElements(testId, PseudoSelector.visible, options));
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
 * _Use this only if the other queries don't work. `data-testid` or `data-test-id` don't resemble how your software is used and should be avoided if possible._
 *
 * @example
 *
 * ```gherkin
 * When I find element by test ID "testID"
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/get#Arguments):
 *
 * ```gherkin
 * When I find element by test ID "testID"
 *   | log | true |
 *   | timeout | 4000 |
 *   | withinSubject | null |
 *   | includeShadowDom | false |
 * ```
 *
 * @remarks
 *
 * This precedes steps like {@link When_I_click | "When I click"}. For example:
 *
 * ```gherkin
 * When I find element by test ID "testID"
 *   And I click
 * ```
 *
 * Inspired by Testing Library's [ByTestId](https://testing-library.com/docs/queries/bytestid).
 *
 * @see
 *
 * - {@link When_I_find_elements_by_testid | When I find elements by test ID}
 */
export function When_I_find_element_by_testid(
  testId: string,
  options?: DataTable,
) {
  setCypressElement(
    getTestIdElements(testId, PseudoSelector.visible, options).first(),
  );
}

When('I find element by test ID {string}', When_I_find_element_by_testid);
