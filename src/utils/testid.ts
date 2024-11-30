import { DataTable } from '@badeball/cypress-cucumber-preprocessor';

import { PseudoSelector } from '../constants';
import { getOptions } from './options';

/**
 * Get test ID elements.
 *
 * @param testId - Test ID.
 * @param pseudoSelector - Pseudo selector.
 * @returns - Cypress element.
 * @private
 */
export function getTestIdElements(
  testId: string,
  pseudoSelector?: PseudoSelector,
  options?: DataTable,
) {
  const selectors = [
    `[data-testid=${JSON.stringify(testId)}]`,
    `[data-test-id=${JSON.stringify(testId)}]`,
  ].map((selector) =>
    pseudoSelector ? `${selector}:${pseudoSelector}` : selector,
  );

  return cy.get(selectors.join(','), getOptions(options));
}
