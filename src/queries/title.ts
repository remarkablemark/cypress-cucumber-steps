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
    `svg title:contains(${JSON.stringify(title)})`,
    `[title=${JSON.stringify(title)}]`,
  ].join(',');
  setCypressElement(cy.get(selector).first());
}

When('I find element by title {string}', When_I_find_element_by_title);
