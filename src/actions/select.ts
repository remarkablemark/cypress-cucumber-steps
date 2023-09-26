import { When } from '@badeball/cypress-cucumber-preprocessor';

/**
 * When I select option:
 *
 * ```gherkin
 * When I select option {string}
 * ```
 *
 * @example
 *
 * ```gherkin
 * When I select option "Medium"
 * ```
 *
 * @remarks
 *
 * Selects the first option by display value.
 */
export function When_I_select_option(displayValue: string) {
  cy.get('option')
    .contains(displayValue)
    .closest('select')
    .select(displayValue);
}

When('I select option {string}', When_I_select_option);
