import { When } from '@badeball/cypress-cucumber-preprocessor';

import { setCypressElement } from '../utils';

/* eslint-disable tsdoc/syntax */
/**
 * When I get element by display value:
 *
 * ```gherkin
 * When I get element by display value {string}
 * ```
 *
 * Returns the `input`, `textarea`, or `select` element that has the matching display value.
 *
 * > This query will throw an error if no element is found and will not wait and retry.
 *
 * @example
 *
 * ```gherkin
 * When I get element by display value "Hello World"
 * ```
 *
 * @remarks
 *
 * This precedes steps like {@link When_I_type | "When I type"}. For example:
 *
 * ```gherkin
 * When I get element by display value "Hello World"
 *   And I clear
 *   And I type "user@example.com"
 * ```
 *
 * Inspired by Testing Library's [ByDisplayValue](https://testing-library.com/docs/queries/bydisplayvalue).
 */
/* eslint-enable tsdoc/syntax */
export function When_I_get_element_by_display_value(value: string) {
  cy.get('body').then(($body) => {
    let cypressElement;

    if (hasDisplayValue($body, 'input', value)) {
      cypressElement = cy.get(`input[value='${value}']`).first();
    } else if (hasDisplayValue($body, 'textarea', value)) {
      cypressElement = cy.contains('textarea', value);
    } else if (hasDisplayValue($body, 'option', value)) {
      cypressElement = cy.contains('option', value).closest('select');
    } else {
      throw new Error(`Unable to get element by display value: ${value}`);
    }

    setCypressElement(this, cypressElement);
  });
}

When(
  'I get element by display value {string}',
  When_I_get_element_by_display_value
);

/**
 * Checks if there's an element with display value.
 *
 * @param $body - jQuery body element.
 * @param elementName - Element name.
 * @param value - Display value.
 */
function hasDisplayValue(
  $body: JQuery<HTMLBodyElement>,
  elementName: 'input' | 'option' | 'textarea',
  value: string
): boolean {
  let isFound = false;

  $body.find(elementName).each((index, element) => {
    const $element = Cypress.$(element);

    switch (elementName) {
      case 'input':
      case 'textarea':
        isFound = $element.val()?.toString() === value;
        break;

      case 'option':
        isFound = $element.text() === value;
        break;
    }

    if (isFound) {
      return false;
    }
  });

  return isFound;
}
