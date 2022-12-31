import { When } from '@badeball/cypress-cucumber-preprocessor';

import { setCypressElement } from '../utils';

/* eslint-disable tsdoc/syntax */
/**
 * When I find element by test ID:
 *
 * ```gherkin
 * When I find element by test ID {string}
 * ```
 *
 * Finds the element that has the matching `data-testid` attribute:
 *
 * ```html
 * <div data-testid="custom-element"></div>
 * ```
 *
 * > It's recommended to use this only after the other queries don't work for your use case. Using `data-testid` attributes do not resemble how your software is used and should be avoided if possible.
 *
 * @example
 *
 * ```gherkin
 * When I find element by test ID "custom-element"
 * ```
 *
 * @remarks
 *
 * This precedes steps like {@link When_I_click | "When I click"}. For example:
 *
 * ```gherkin
 * When I find element by test ID "custom-element"
 *   And I click
 * ```
 *
 * Inspired by Testing Library's [ByTestId](https://testing-library.com/docs/queries/bytestid).
 */
/* eslint-enable tsdoc/syntax */
export function When_I_find_element_by_testid(testId: string) {
  setCypressElement(cy.get(`[data-testid='${testId}']`));
}

When('I find element by test ID {string}', When_I_find_element_by_testid);
