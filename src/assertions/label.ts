import { Then } from '@badeball/cypress-cucumber-preprocessor';

/**
 * Then I see label:
 *
 * ```gherkin
 * Then I see label {string}
 * ```
 *
 * @example
 *
 * ```gherkin
 * Then I see label "Label"
 * ```
 *
 * @remarks
 *
 * This asserts that a label with text **_exists_** and is **_visible_** in the screen.
 *
 * Inspired by Testing Library's [ByLabelText](https://testing-library.com/docs/queries/bylabeltext).
 *
 * @see
 *
 * - {@link Then_I_see_text | Then I see text}
 */
export function Then_I_see_label(text: string) {
  cy.get('body').then(($body) => {
    if ($body.find('label:visible').text().includes(text)) {
      cy.contains('label:visible', text).should('exist');
    } else if ($body.find(`[aria-labelledby='${text}']:visible`).length) {
      cy.get(`[aria-labelledby='${text}']:visible`).should('exist');
    } else if ($body.find(`[aria-label='${text}']:visible`).length) {
      cy.get(`[aria-label='${text}']:visible`).should('exist');
    } else {
      throw new Error(`Unable to see label: ${text}`);
    }
  });
}

Then('I see label {string}', Then_I_see_label);
