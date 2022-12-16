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
 * Selects the first unselected option found by display value.
 */
export function When_I_select_option(displayValue: string) {
  cy.get('select').then(($select) => {
    if ($select.length > 1) {
      $select.find('option').each((index, option) => {
        const $option = Cypress.$(option);
        if (
          $option.text() === displayValue &&
          $option.attr('selected') !== 'selected'
        ) {
          $option.attr('selected', 'selected');
          return false;
        }
      });
    } else {
      cy.get('select').select(displayValue);
    }
  });
}

When('I select option {string}', When_I_select_option);
