import { DataTable, When } from '@badeball/cypress-cucumber-preprocessor';

import { PseudoSelector } from '../constants';
import { getRoleElements, setCypressElement } from '../utils';

/**
 * When I find elements by role:
 *
 * ```gherkin
 * When I find elements by role {string}
 * ```
 *
 * Queries for elements with the given role.
 *
 * @example
 *
 * ```gherkin
 * When I find elements by role "progressbar"
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/get#Arguments):
 *
 * ```gherkin
 * When I find elements by role "progressbar"
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
 * When I find elements by role "progressbar"
 *   And I get 1st element
 *   And I click
 * ```
 *
 * Inspired by Testing Library's [ByRole](https://testing-library.com/docs/queries/byrole/).
 *
 * @see
 *
 * - {@link When_I_find_element_by_role | When I find element by role}
 */
export function When_I_find_elements_by_role(
  role: string,
  options?: DataTable,
) {
  setCypressElement(getRoleElements(role, PseudoSelector.visible, options));
}

When('I find elements by role {string}', When_I_find_elements_by_role);

/**
 * When I find element by role:
 *
 * ```gherkin
 * When I find element by role {string}
 * ```
 *
 * Queries for the first element with the given role.
 *
 * @example
 *
 * ```gherkin
 * When I find element by role "progressbar"
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/get#Arguments):
 *
 * ```gherkin
 * When I find element by role "progressbar"
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
 * When I find element by role "progressbar"
 *   And I click
 * ```
 *
 * Inspired by Testing Library's [ByRole](https://testing-library.com/docs/queries/byrole/).
 *
 * @see
 *
 * - {@link When_I_find_elements_by_role | When I find elements by role}
 */
export function When_I_find_element_by_role(role: string, options?: DataTable) {
  setCypressElement(
    getRoleElements(role, PseudoSelector.visible, options).first(),
  );
}

When('I find element by role {string}', When_I_find_element_by_role);
