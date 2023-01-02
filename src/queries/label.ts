import { When } from '@badeball/cypress-cucumber-preprocessor';

import { setCypressElement } from '../utils';

/* eslint-disable tsdoc/syntax */
/**
 * When I get element by label text:
 *
 * ```gherkin
 * When I get element by label text {string}
 * ```
 *
 * > This query will throw an error if no element is found and will not wait and retry.
 *
 * @example
 *
 * ```gherkin
 * When I get element by label text "Email"
 * ```
 *
 * @remarks
 *
 * This precedes steps like {@link When_I_type | "When I type"}. For example:
 *
 * ```gherkin
 * When I get element by label text "Email"
 *   And I type "user@example.com"
 * ```
 *
 * Inspired by Testing Library's [ByLabelText](https://testing-library.com/docs/queries/bylabeltext).
 */
/* eslint-enable tsdoc/syntax */
export function When_I_get_element_by_label_text(text: string) {
  cy.get('body').then(($body) => {
    let cypressElement;

    if ($body.find('label:visible').text().includes(text)) {
      cypressElement = cy.contains('label:visible', text);
    } else if ($body.find(`[aria-labelledby='${text}']:visible`).length) {
      cypressElement = cy.get(`[aria-labelledby='${text}']:visible`).first();
    } else if ($body.find(`[aria-label='${text}']:visible`).length) {
      cypressElement = cy.get(`[aria-label='${text}']:visible`).first();
    } else {
      throw new Error(`Unable to get element by label text: ${text}`);
    }

    setCypressElement(cypressElement);
  });
}

When('I get element by label text {string}', When_I_get_element_by_label_text);
