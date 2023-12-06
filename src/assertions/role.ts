import { DataTable, Then } from '@badeball/cypress-cucumber-preprocessor';

import { When_I_find_elements_by_role } from '../queries';
import { getCypressElement } from '../utils';

/**
 * Then I see role:
 *
 * ```gherkin
 * Then I see role {string}
 * ```
 *
 * Assert role **_exists_** and is **_visible_** in the screen.
 *
 * @example
 *
 * ```gherkin
 * Then I see role "progressbar"
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/get#Arguments):
 *
 * ```gherkin
 * Then I see role "progressbar"
 *   | log | true |
 *   | timeout | 4000 |
 *   | withinSubject | null |
 *   | includeShadowDom | false |
 * ```
 *
 * Inspired by Testing Library's [ByRole](https://testing-library.com/docs/queries/byrole/).
 *
 * @see
 *
 * - {@link Then_I_do_not_see_role | Then I do not see role}
 */
export function Then_I_see_role(role: string, options?: DataTable) {
  When_I_find_elements_by_role(role, options);
  getCypressElement().should('exist');
}

Then('I see role {string}', Then_I_see_role);

/**
 * Then I do not see role:
 *
 * ```gherkin
 * Then I do not see role {string}
 * ```
 *
 * Assert role **_does not exist_** in the screen.
 *
 * @example
 *
 * ```gherkin
 * Then I do not see role "progressbar"
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/get#Arguments):
 *
 * ```gherkin
 * Then I do not see role "progressbar"
 *   | log | true |
 *   | timeout | 4000 |
 *   | withinSubject | null |
 *   | includeShadowDom | false |
 * ```
 *
 * Inspired by Testing Library's [ByRole](https://testing-library.com/docs/queries/byrole/).
 *
 * @see
 *
 * - {@link Then_I_see_role | Then I see role}
 */
export function Then_I_do_not_see_role(role: string, options?: DataTable) {
  When_I_find_elements_by_role(role, options);
  getCypressElement().should('not.exist');
}

Then('I do not see role {string}', Then_I_do_not_see_role);
