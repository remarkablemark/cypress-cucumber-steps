import { DataTable } from '@badeball/cypress-cucumber-preprocessor';

import { Element, PseudoSelector } from '../constants';
import { When_I_find_element_by_label_text } from '../queries';
import { getCypressElement } from './element';
import { getOptions } from './options';

/**
 * Get first Cypress element by label text.
 *
 * @param element - Element name.
 * @param text - Label text.
 * @param options - Options.
 * @returns - Cypress element.
 * @private
 */
export function getByLabelText(
  element: Element,
  text: string,
  options?: DataTable,
) {
  const elementName = element as string;

  When_I_find_element_by_label_text(text, options);

  return getCypressElement().then(($element: Cypress.JQueryWithSelector) => {
    const tagName = String($element.prop('tagName')).toLowerCase();

    // https://developer.mozilla.org/docs/Web/HTML/Element/label
    if (tagName === 'label') {
      const forValue = $element.attr('for');
      if (forValue) {
        return cy.get(`#${forValue}`);
      } else {
        return $element.find(elementName).first();
      }
    }

    // https://developer.mozilla.org/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby
    if ($element.attr('aria-labelledby') === text) {
      return cy.get(`#${text}`);
    }

    // https://developer.mozilla.org/docs/Web/Accessibility/ARIA/Attributes/aria-label
    if (tagName === elementName && $element.attr('aria-label') === text) {
      return $element;
    }

    throw new Error(`Unable to get ${elementName} by label text: ${text}`);
  });
}

/**
 * Get label elements.
 *
 * @param text - Label text.
 * @param options - Options.
 * @returns - Cypress element.
 * @private
 */
export function getLabelElements(
  text: string,
  options?: ReturnType<typeof getOptions> & { pseudoSelector?: PseudoSelector },
) {
  let selectors = [
    `label:contains(${JSON.stringify(text)})`,
    `[aria-labelledby=${JSON.stringify(text)}]`,
    `[aria-label=${JSON.stringify(text)}]`,
  ];

  const { pseudoSelector, ...opts } = options ?? {};

  if (pseudoSelector) {
    selectors = selectors.map((label) => `${label}:${pseudoSelector}`);
  }

  return cy.get(selectors.join(','), opts);
}
