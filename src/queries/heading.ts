import { When } from '@badeball/cypress-cucumber-preprocessor';

import { setCypressElement } from '../utils';

/**
 * When I find headings by text:
 *
 * ```gherkin
 * When I find headings by text {string}
 * ```
 *
 * @example
 *
 * ```gherkin
 * When I find headings by text "Heading"
 * ```
 *
 * @remarks
 *
 * This precedes steps like {@link When_I_click | "When I click"}. For example:
 *
 * ```gherkin
 * When I find headings by text "Heading"
 *   And I get 1st element
 *   And I click
 * ```
 *
 * @see
 *
 * - {@link When_I_find_heading_by_text | When I find heading by text}
 */
export function When_I_find_headings_by_text(text: string) {
  const selector = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
    .map((tag) => `${tag}:contains('${text}'):visible`)
    .join(',');
  setCypressElement(cy.get(selector));
}

When('I find headings by text {string}', When_I_find_headings_by_text);
