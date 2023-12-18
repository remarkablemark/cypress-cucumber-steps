import { DataTable } from '@badeball/cypress-cucumber-preprocessor';

import { PseudoSelector } from '../constants';
import { getOptions } from './options';

/**
 * Get heading elements.
 *
 * @param text - Heading text.
 * @param selector - Pseudo selector.
 * @returns - Cypress element.
 * @private
 */
export function getHeadingElements(
  text: string,
  selector?: PseudoSelector,
  options?: DataTable,
) {
  let selectors = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

  selectors = selectors.map(
    (heading) => `${heading}:contains(${JSON.stringify(text)})`,
  );

  if (selector) {
    selectors = selectors.map((heading) => `${heading}:${selector}`);
  }

  return cy.get(selectors.join(','), getOptions(options));
}
