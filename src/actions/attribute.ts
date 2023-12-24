import { When } from '@badeball/cypress-cucumber-preprocessor';

import { getCypressElement } from '../utils';

/**
 * When I set attribute:
 *
 * ```gherkin
 * When I set attribute {string} to {string}
 * ```
 *
 * [**_GENERALLY DO NOT USE THIS AND PREFER STEPS THAT RESEMBLE HOW USERS USE YOUR SITE._**](https://testing-library.com/docs/guiding-principles/)
 *
 * @example
 *
 * ```gherkin
 * When I set attribute "checked" to "checked"
 * ```
 *
 * @remarks
 *
 * A preceding step like {@link When_I_find_element_by_label_text | "When I find element by label text"} is required. For example:
 *
 * ```gherkin
 * When I find element by label text "Input"
 *   And I set attribute "checked" to "checked"
 * ```
 */
export function When_I_set_attribute(name: string, value: string) {
  getCypressElement().invoke('attr', name, value);
}

When('I set attribute {string} to {string}', When_I_set_attribute);
