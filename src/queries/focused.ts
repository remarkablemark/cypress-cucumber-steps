import { When } from '@badeball/cypress-cucumber-preprocessor';

import { setCypressElement } from '../utils';

/**
 * When I get focused element:
 *
 * ```gherkin
 * When I get focused element
 * ```
 *
 * Get the DOM element that is currently focused.
 *
 * @example
 *
 * ```gherkin
 * When I get focused element
 * ```
 *
 * @remarks
 *
 * This precedes steps like {@link When_I_type | "When I type"}. For example:
 *
 * ```gherkin
 * When I get focused element
 *   And I type "something"
 * ```
 */
export function When_I_get_focused_element() {
  setCypressElement(cy.focused());
}

When('I get focused element', When_I_get_focused_element);
