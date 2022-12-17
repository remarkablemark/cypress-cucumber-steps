import { When } from '@badeball/cypress-cucumber-preprocessor';

/**
 * When I blur:
 *
 * ```gherkin
 * When I blur
 * ```
 *
 * @example
 *
 * ```gherkin
 * When I blur
 * ```
 *
 * @remarks
 *
 * Blurs the element with focus.
 */
export function When_I_blur() {
  cy.focused().blur();
}

When('I blur', When_I_blur);
