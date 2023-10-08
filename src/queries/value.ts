import { When } from '@badeball/cypress-cucumber-preprocessor';

import { getByDisplayValue, setCypressElement } from '../utils';

/**
 * When I get element by display value:
 *
 * ```gherkin
 * When I get element by display value {string}
 * ```
 *
 * Returns the `input`, `textarea`, or `select` element that has the matching display value.
 *
 * _This query will throw an error if no element is found and will not wait and retry._
 *
 * @example
 *
 * ```gherkin
 * When I get element by display value "Hello World"
 * ```
 *
 * @remarks
 *
 * This precedes steps like {@link When_I_set_value | "When I set value"}. For example:
 *
 * ```gherkin
 * When I get element by display value "Display Value"
 *   And I set value "Value"
 * ```
 *
 * Inspired by Testing Library's [ByDisplayValue](https://testing-library.com/docs/queries/bydisplayvalue).
 *
 * @see
 *
 * - {@link When_I_find_input_by_display_value | When I find input by display value}
 * - {@link When_I_find_select_by_display_value | When I find select by display value}
 * - {@link When_I_find_textarea_by_display_value | When I find textarea by display value}
 */
export function When_I_get_element_by_display_value(value: string) {
  cy.get('body').then(($body) => {
    if (hasDisplayValue($body, 'input', value)) {
      return When_I_find_input_by_display_value(value);
    }

    if (hasDisplayValue($body, 'textarea', value)) {
      return When_I_find_textarea_by_display_value(value);
    }

    if (hasDisplayValue($body, 'option', value)) {
      return When_I_find_select_by_display_value(value);
    }

    throw new Error(`Unable to get element by display value: ${value}`);
  });
}

When(
  'I get element by display value {string}',
  When_I_get_element_by_display_value,
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
  value: string,
): boolean {
  let isFound = false;

  $body.find(elementName).each((index, element: HTMLBodyElement) => {
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

/**
 * When I find input by display value:
 *
 * ```gherkin
 * When I find input by display value {string}
 * ```
 *
 * Returns the `input` element that has the matching display value.
 *
 * @example
 *
 * ```gherkin
 * When I find input by display value "Input"
 * ```
 *
 * @remarks
 *
 * This precedes steps like {@link When_I_set_value | "When I set value"}. For example:
 *
 * ```gherkin
 * When I find input by display value "Input"
 *   And I set value "Value"
 * ```
 *
 * Inspired by Testing Library's [ByDisplayValue](https://testing-library.com/docs/queries/bydisplayvalue).
 *
 * @see
 *
 * - {@link When_I_get_element_by_display_value | When I get element by display value}
 */
export function When_I_find_input_by_display_value(value: string) {
  setCypressElement(getByDisplayValue('input', value));
}

When(
  'I find input by display value {string}',
  When_I_find_input_by_display_value,
);

/**
 * When I find textarea by display value:
 *
 * ```gherkin
 * When I find textarea by display value {string}
 * ```
 *
 * Returns the `textarea` element that has the matching display value.
 *
 * @example
 *
 * ```gherkin
 * When I find textarea by display value "Textarea"
 * ```
 *
 * @remarks
 *
 * This precedes steps like {@link When_I_set_value | "When I set value"}. For example:
 *
 * ```gherkin
 * When I find textarea by display value "Textarea"
 *   And I set value "Value"
 * ```
 *
 * Inspired by Testing Library's [ByDisplayValue](https://testing-library.com/docs/queries/bydisplayvalue).
 *
 * @see
 *
 * - {@link When_I_get_element_by_display_value | When I get element by display value}
 */
export function When_I_find_textarea_by_display_value(value: string) {
  setCypressElement(getByDisplayValue('textarea', value));
}

When(
  'I find textarea by display value {string}',
  When_I_find_textarea_by_display_value,
);

/**
 * When I find select by display value:
 *
 * ```gherkin
 * When I find select by display value {string}
 * ```
 *
 * Returns the `select` element that has the matching display value.
 *
 * @example
 *
 * ```gherkin
 * When I find select by display value "Option"
 * ```
 *
 * @remarks
 *
 * This precedes steps like {@link When_I_set_value | "When I set value"}. For example:
 *
 * ```gherkin
 * When I find select by display value "Option"
 *   And I set value "Value"
 * ```
 *
 * Inspired by Testing Library's [ByDisplayValue](https://testing-library.com/docs/queries/bydisplayvalue).
 *
 * @see
 *
 * - {@link When_I_get_element_by_display_value | When I get element by display value}
 */
export function When_I_find_select_by_display_value(value: string) {
  setCypressElement(cy.contains('option', value).closest('select').first());
}

When(
  'I find select by display value {string}',
  When_I_find_select_by_display_value,
);
