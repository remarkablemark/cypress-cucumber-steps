import { DataTable, When } from '@badeball/cypress-cucumber-preprocessor';

import { getCypressElement, getOptions, setCypressElement } from '../utils';

/**
 * When I find elements by title:
 *
 * ```gherkin
 * When I find elements by title {string}
 * ```
 *
 * Finds elements with a matching `title` attribute. This will also find `title` elements within SVGs.
 *
 * @example
 *
 * ```gherkin
 * When I find elements by title "Title"
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/get#Arguments):
 *
 * ```gherkin
 * When I find elements by title "Title"
 *   | log | true |
 *   | timeout | 4000 |
 *   | withinSubject | null |
 *   | includeShadowDom | false |
 *   | pseudoSelector | visible |
 * ```
 *
 * @remarks
 *
 * This precedes steps like {@link When_I_click | "When I click"}. For example:
 *
 * ```gherkin
 * When I find elements by title "Close"
 *   And I get 1st element
 *   And I click
 * ```
 *
 * Inspired by Testing Library's [ByTitle](https://testing-library.com/docs/queries/bytitle).
 *
 * @see
 *
 * - {@link When_I_find_element_by_title | When I find element by title}
 */
export function When_I_find_elements_by_title(
  title: string,
  options?: DataTable,
) {
  const selectors = [
    `[title=${JSON.stringify(title)}]`,
    `svg title:contains(${JSON.stringify(title)})`,
  ];
  setCypressElement(cy.get(selectors.join(','), getOptions(options)));
}

When('I find elements by title {string}', When_I_find_elements_by_title);

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
 * When I find element by title "Title"
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/get#Arguments):
 *
 * ```gherkin
 * When I find element by title "Title"
 *   | log | true |
 *   | timeout | 4000 |
 *   | withinSubject | null |
 *   | includeShadowDom | false |
 *   | pseudoSelector | visible |
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
 *
 * @see
 *
 * - {@link When_I_find_elements_by_title | When I find elements by title}
 */
export function When_I_find_element_by_title(
  title: string,
  options?: DataTable,
) {
  When_I_find_elements_by_title(title, options);
  setCypressElement(getCypressElement().first());
}

When('I find element by title {string}', When_I_find_element_by_title);
