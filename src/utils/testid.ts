import { DataTable } from '@badeball/cypress-cucumber-preprocessor';

import { PseudoSelector } from '../constants';
import { getOptions } from './options';

/**
 * Get test ID elements.
 *
 * @param testId - Test ID.
 * @param selector - Pseudo selector.
 * @returns - Cypress element.
 * @private
 */
export function getTestIdElements(
  testId: string,
  selector?: PseudoSelector,
  options?: DataTable,
) {
  const queries = [
    `[data-testid=${JSON.stringify(testId)}]`,
    `[data-test-id=${JSON.stringify(testId)}]`,
  ].map((query) => (selector ? `${query}:${selector}` : query));

  return cy.get(queries.join(','), getOptions(options));
}
