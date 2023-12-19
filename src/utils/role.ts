import { DataTable } from '@badeball/cypress-cucumber-preprocessor';

import { PseudoSelector } from '../constants';
import { getOptions } from './options';

/**
 * Get role elements.
 *
 * @param type - Role type.
 * @param selector - Pseudo selector.
 * @returns - Cypress element.
 * @private
 */
export function getRoleElements(
  type: string,
  selector?: PseudoSelector,
  options?: DataTable,
) {
  let role = `[role=${JSON.stringify(type)}]`;

  if (selector) {
    role += `:${selector}`;
  }

  return cy.get(role, getOptions(options));
}
