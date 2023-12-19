import { DataTable } from '@badeball/cypress-cucumber-preprocessor';

import { PseudoSelector } from '../constants';
import { getOptions } from './options';

/**
 * Get button elements.
 *
 * @param text - Button text.
 * @param selector - Pseudo selector.
 * @returns - Cypress element.
 * @private
 */
export function getButtonElements(
  text: string,
  selector?: PseudoSelector,
  options?: DataTable,
) {
  let selectors = [
    'button',
    "[type='button']",
    "[type='submit']",
    "[role='button']",
  ];

  selectors = selectors.reduce((accumulator: string[], button: string) => {
    accumulator.push(`${button}:contains(${JSON.stringify(text)})`);
    accumulator.push(`${button}[value=${JSON.stringify(text)}]`);
    return accumulator;
  }, []);

  if (selector) {
    selectors = selectors.map((button) => `${button}:${selector}`);
  }

  return cy.get(selectors.join(','), getOptions(options));
}
