import { DataTable, Then } from '@badeball/cypress-cucumber-preprocessor';

import { PseudoSelector } from '../constants';
import { getLabelElements, getOptions } from '../utils';

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
  getLabelElements(text, {
    pseudoSelector: PseudoSelector.visible,
    ...getOptions(options),
  }).should('exist');
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
  getLabelElements(text, {
    pseudoSelector: PseudoSelector.visible,
    ...getOptions(options),
  }).should('not.exist');
}

Then('I do not see label {string}', Then_I_do_not_see_label);
