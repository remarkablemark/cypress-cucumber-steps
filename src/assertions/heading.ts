import { Then } from '@badeball/cypress-cucumber-preprocessor';

import { When_I_find_headings_by_text } from '../queries';
import { getCypressElement } from '../utils';

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
 * @see
 *
 * - {@link Then_I_see_text | Then I see text}
 */
export function Then_I_see_heading(text: string) {
  When_I_find_headings_by_text(text);
  getCypressElement().should('exist');
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
 * @see
 *
 * - {@link Then_I_do_not_see_text | Then I do not see text}
 */
export function Then_I_do_not_see_heading(text: string) {
  When_I_find_headings_by_text(text);
  getCypressElement().should('not.exist');
}

Then('I do not see heading {string}', Then_I_do_not_see_heading);
