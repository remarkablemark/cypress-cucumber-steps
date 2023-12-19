import { DataTable } from '@badeball/cypress-cucumber-preprocessor';

import { PseudoSelector } from '../constants';
import { getOptions } from './options';

/**
 * Get link elements.
 *
 * @param text - Link text.
 * @param selector - Pseudo selector.
 * @returns - Cypress element.
 * @private
 */
export function getLinkElements(
  text: string,
  selector?: PseudoSelector,
  options?: DataTable,
) {
  let link = `a:contains(${JSON.stringify(text)})`;

  if (selector) {
    link += `:${selector}`;
  }

  return cy.get(link, getOptions(options));
}
