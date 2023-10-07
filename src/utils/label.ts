import { When_I_find_element_by_label_text } from '../queries';
import { getCypressElement } from './element';

/**
 * Get first Cypress element by label text.
 *
 * @param element - Element name.
 * @param text - Label text.
 * @returns - Cypress element.
 * @private
 */
export function getByLabelText(element: 'input' | 'textarea', text: string) {
  When_I_find_element_by_label_text(text);

  return getCypressElement().then(($element: Cypress.JQueryWithSelector) => {
    const tagName = $element.prop('tagName').toLowerCase();

    // https://developer.mozilla.org/docs/Web/HTML/Element/label
    if (tagName === 'label') {
      const forValue = $element.attr('for');
      if (forValue) {
        return cy.get(`#${forValue}`);
      } else {
        return $element.find(element).first();
      }
    }

    // https://developer.mozilla.org/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby
    if ($element.attr('aria-labelledby') === text) {
      return cy.get(`#${text}`);
    }

    // https://developer.mozilla.org/docs/Web/Accessibility/ARIA/Attributes/aria-label
    if (tagName === element && $element.attr('aria-label') === text) {
      return $element;
    }

    throw new Error(`Unable to get ${element} by label text: ${text}`);
  });
}
