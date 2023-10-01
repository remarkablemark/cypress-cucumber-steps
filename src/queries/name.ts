import { When } from '@badeball/cypress-cucumber-preprocessor';

import { getCypressElement, setCypressElement } from '../utils';
import { When_I_find_elements_by_name } from './names';

/* eslint-disable tsdoc/syntax */
/**
 * When I find element by name:
 *
 * ```gherkin
 * When I find element by name {string}
 * ```
 *
 * > A name is not a good substitute for a label so you should generally use {@link When_I_find_element_by_label_text | "When I find element by label text"} instead.
 *
 * @example
 *
 * ```gherkin
 * When I find element by name "text"
 * ```
 *
 * @remarks
 *
 * This precedes steps like {@link When_I_type | "When I type"}. For example:
 *
 * ```gherkin
 * When I find element by name "password"
 *   And I type "password"
 * ```
 *
 * @see
 *
 * - {@link When_I_find_elements_by_name | When I find elements by name}
 */
/* eslint-enable tsdoc/syntax */
export function When_I_find_element_by_name(name: string) {
  When_I_find_elements_by_name(name);
  setCypressElement(getCypressElement().first());
}

When('I find element by name {string}', When_I_find_element_by_name);
