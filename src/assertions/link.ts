import { DataTable, Then } from '@badeball/cypress-cucumber-preprocessor';

import { PseudoSelector } from '../constants';
import { getLinkElements } from '../utils';

/**
 * Then I see link:
 *
 * ```gherkin
 * Then I see link {string}
 * ```
 *
 * Assert link with text **_exists_** and is **_visible_** in the screen.
 *
 * @example
 *
 * ```gherkin
 * Then I see link "Link"
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/get#Arguments):
 *
 * ```gherkin
 * Then I see link "Link"
 *   | log | true |
 *   | timeout | 4000 |
 *   | withinSubject | null |
 *   | includeShadowDom | false |
 * ```
 *
 * @see
 *
 * - {@link Then_I_see_text | Then I see text}
 */
export function Then_I_see_link(text: string, options?: DataTable) {
  getLinkElements(text, PseudoSelector.visible, options).should('exist');
}

Then('I see link {string}', Then_I_see_link);

/**
 * Then I do not see link:
 *
 * ```gherkin
 * Then I do not see link {string}
 * ```
 *
 * Assert link with text **_does not exist_** in the screen.
 *
 * @example
 *
 * ```gherkin
 * Then I do not see link "Link"
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/get#Arguments):
 *
 * ```gherkin
 * Then I do not see link "Link"
 *   | log | true |
 *   | timeout | 4000 |
 *   | withinSubject | null |
 *   | includeShadowDom | false |
 * ```
 *
 * @see
 *
 * - {@link Then_I_do_not_see_text | Then I do not see text}
 */
export function Then_I_do_not_see_link(text: string, options?: DataTable) {
  getLinkElements(text, PseudoSelector.visible, options).should('not.exist');
}

Then('I do not see link {string}', Then_I_do_not_see_link);
