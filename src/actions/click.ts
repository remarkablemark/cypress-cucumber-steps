import { When } from '@badeball/cypress-cucumber-preprocessor';

/**
 * When I click on text:
 *
 * ```gherkin
 * When I click on text {string}
 * ```
 *
 * @example
 *
 * ```gherkin
 * When I click on text "Click Me"
 * ```
 */
export function When_I_click_on_text(text: string) {
  cy.contains(text).click();
}

When('I click on text {string}', When_I_click_on_text);
