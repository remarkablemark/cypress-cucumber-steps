import { When } from '@badeball/cypress-cucumber-preprocessor';

import { setCypressElement } from '../utils';

/**
 * When I find element by title:
 *
 * ```gherkin
 * When I find element by title {string}
 * ```
 *
 * Finds the first element that has a matching `title` attribute. This will also find a `title` element within an SVG.
 *
 * @example
 *
 * ```gherkin
 * When I find element by title "Close"
 * ```
 *
 * @remarks
 *
 * This precedes steps like {@link When_I_click | "When I click"}. For example:
 *
 * ```gherkin
 * When I find element by title "Close"
 *   And I click
 * ```
 *
 * Inspired by Testing Library's [ByTitle](https://testing-library.com/docs/queries/bytitle).
 */
export function When_I_find_element_by_title(title: string) {
  const selector = [
    `svg title:contains('${title}')`,
    `[title='${title}']`,
  ].join(',');
  setCypressElement(cy.get(selector).first());
}

When('I find element by title {string}', When_I_find_element_by_title);

/* eslint-disable tsdoc/syntax */
/**
 * # _Deprecated_
 *
 * When I get element by title:
 *
 * ```gherkin
 * When I get element by title {string}
 * ```
 *
 * Gets the first element that has a matching `title` attribute. This will also find a `title` element within an SVG.
 *
 * > This query will throw an error if no element is found and will not wait and retry.
 *
 * @example
 *
 * ```gherkin
 * When I get element by title "Close"
 * ```
 *
 * @remarks
 *
 * This precedes steps like {@link When_I_click | "When I click"}. For example:
 *
 * ```gherkin
 * When I get element by title "Close"
 *   And I click
 * ```
 *
 * Inspired by Testing Library's [ByTitle](https://testing-library.com/docs/queries/bytitle).
 *
 * @deprecated Use {@link When_I_find_element_by_title | "When I find element by title"} instead.
 */
/* eslint-enable tsdoc/syntax */
export function When_I_get_element_by_title(title: string) {
  cy.get('body').then(($body) => {
    if ($body.find('svg title').text().includes(title)) {
      setCypressElement(cy.get('svg title').contains(title));
    } else if ($body.find(`[title='${title}']`).length) {
      setCypressElement(cy.get(`[title='${title}']`));
    } else {
      throw new Error(`Unable to get element by title: ${title}`);
    }
  });
}

When('I get element by title {string}', When_I_get_element_by_title);
