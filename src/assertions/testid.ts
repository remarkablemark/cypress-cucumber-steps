import { DataTable, Then } from '@badeball/cypress-cucumber-preprocessor';

import { PseudoSelector } from '../constants';
import { getTestIdElements } from '../utils';

/**
 * Then I see test ID:
 *
 * ```gherkin
 * Then I see test ID {string}
 * ```
 *
 * Asserts `data-testid` or `data-test-id` **_exists_** and is **_visible_** in the screen:
 *
 * ```html
 * <div data-testid="test"></div>
 * <div data-test-id="test"></div>
 * ```
 *
 * _Use this only if the other assertions don't work. `data-testid` or `data-test-id` don't resemble how your software is used and should be avoided if possible._
 *
 * @example
 *
 * ```gherkin
 * Then I see test ID "testID"
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/get#Arguments):
 *
 * ```gherkin
 * Then I see test ID "testID"
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
export function Then_I_see_testid(text: string, options?: DataTable) {
  getTestIdElements(text, PseudoSelector.visible, options).should('exist');
}

Then('I see test ID {string}', Then_I_see_testid);

/**
 * Then I do not see test ID:
 *
 * ```gherkin
 * Then I do not see test ID {string}
 * ```
 *
 * Asserts `data-testid` or `data-test-id` **_does not exist_** or **_is not visible_** in the screen:
 *
 * ```html
 * <div data-testid="test"></div>
 * <div data-test-id="test"></div>
 * ```
 *
 * _Use this only if the other assertions don't work. `data-testid` or `data-test-id` don't resemble how your software is used and should be avoided if possible._
 *
 * @example
 *
 * ```gherkin
 * Then I do not see test ID "testID"
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/get#Arguments):
 *
 * ```gherkin
 * Then I do not see test ID "testID"
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
export function Then_I_do_not_see_testid(text: string, options?: DataTable) {
  getTestIdElements(text, PseudoSelector.visible, options).should('not.exist');
}

Then('I do not see test ID {string}', Then_I_do_not_see_testid);
