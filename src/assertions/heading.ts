import { DataTable, Then } from '@badeball/cypress-cucumber-preprocessor';

import { PseudoSelector } from '../constants';
import { getHeadingElements } from '../utils';

/**
 * Then I see heading:
 *
 * Assert heading (`h1`, `h2`, `h3`, `h4`, `h5`, or `h6`) with text **_exists_** and is **_visible_** in the screen.
 *
 * ```gherkin
 * Then I see heading {string}
 * ```
 *
 * @example
 *
 * ```gherkin
 * Then I see heading "Heading"
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/get#Arguments):
 *
 * ```gherkin
 * Then I see heading "Heading"
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
export function Then_I_see_heading(text: string, options?: DataTable) {
  getHeadingElements(text, PseudoSelector.visible, options).should('exist');
}

Then('I see heading {string}', Then_I_see_heading);

/**
 * Then I do not see heading:
 *
 * ```gherkin
 * Then I do not see heading {string}
 * ```
 *
 * Assert heading with text **_does not exist_** in the screen.
 *
 * @example
 *
 * ```gherkin
 * Then I do not see heading "Heading"
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/get#Arguments):
 *
 * ```gherkin
 * Then I do not see heading "Heading"
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
export function Then_I_do_not_see_heading(text: string, options?: DataTable) {
  getHeadingElements(text, PseudoSelector.visible, options).should('not.exist');
}

Then('I do not see heading {string}', Then_I_do_not_see_heading);
