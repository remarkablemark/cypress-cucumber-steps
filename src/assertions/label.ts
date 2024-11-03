import { DataTable, Then } from '@badeball/cypress-cucumber-preprocessor';

import { When_I_find_elements_by_label_text } from '../queries';
import { getCypressElement } from '../utils';

/**
 * Then I see label:
 *
 * ```gherkin
 * Then I see label {string}
 * ```
 *
 * Assert label with text **_exists_** and is **_visible_** in the screen.
 *
 * @example
 *
 * ```gherkin
 * Then I see label "Label"
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/get#Arguments):
 *
 * ```gherkin
 * Then I see label "Label"
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
export function Then_I_see_label(text: string, options?: DataTable) {
  When_I_find_elements_by_label_text(text, options);
  getCypressElement().should('exist');
}

Then('I see label {string}', Then_I_see_label);

/**
 * Then I do not see label:
 *
 * ```gherkin
 * Then I do not see label {string}
 * ```
 *
 * Assert label with text **_does not exist_** in the screen.
 *
 * @example
 *
 * ```gherkin
 * Then I do not see label "Label"
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/get#Arguments):
 *
 * ```gherkin
 * Then I do not see label "Label"
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
export function Then_I_do_not_see_label(text: string, options?: DataTable) {
  When_I_find_elements_by_label_text(text, options);
  getCypressElement().should('not.exist');
}

Then('I do not see label {string}', Then_I_do_not_see_label);
