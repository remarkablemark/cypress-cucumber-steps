import { DataTable, When } from '@badeball/cypress-cucumber-preprocessor';

import {
  When_I_find_button_by_text,
  When_I_find_element_by_label_text,
} from '../queries';
import { camelCase, getCypressElement, getOptions } from '../utils';

/**
 * When I click:
 *
 * ```gherkin
 * When I click
 * ```
 *
 * Alternative:
 *
 * - {@link When_I_click_on_text | When I click on text}
 * - {@link When_I_click_position | When I click position}
 * - {@link When_I_click_x_y_coordinates | When I click x-y coordinates}
 *
 * @example
 *
 * ```gherkin
 * When I click
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/click#Arguments):
 *
 * ```gherkin
 * When I click
 *   | altKey | false |
 *   | animationDistanceThreshold | 5 |
 *   | ctrlKey | false |
 *   | log | true |
 *   | force | false |
 *   | metaKey | false |
 *   | multiple | false |
 *   | scrollBehavior | top |
 *   | shiftKey | false |
 *   | timeout | 4000 |
 *   | waitForAnimations | true |
 * ```
 *
 * @remarks
 *
 * A preceding step like {@link When_I_find_element_by_text | "When I find element by text"} is required. For example:
 *
 * ```gherkin
 * When I find element by text "Text"
 *   And I click
 * ```
 *
 * @see
 *
 * - {@link When_I_double_click | When I double-click}
 * - {@link When_I_right_click | When I right-click}
 */
export function When_I_click(options?: DataTable) {
  getCypressElement().click(getOptions(options));
}

When('I click', When_I_click);

/**
 * When I click position:
 *
 * ```gherkin
 * When I click {string}
 * ```
 *
 * You can click on 9 specific positions of an element:
 *
 * ```
 *  -------------------------------------
 * | top-left        top       top-right |
 * |                                     |
 * |                                     |
 * |                                     |
 * | left          center          right |
 * |                                     |
 * |                                     |
 * |                                     |
 * | bottom-left   bottom   bottom-right |
 *  -------------------------------------
 * ```
 *
 * @example
 *
 * ```gherkin
 * When I click "top-left"
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/click#Arguments):
 *
 * ```gherkin
 * When I click "top"
 *   | altKey | false |
 *   | animationDistanceThreshold | 5 |
 *   | ctrlKey | false |
 *   | log | true |
 *   | force | false |
 *   | metaKey | false |
 *   | multiple | false |
 *   | scrollBehavior | top |
 *   | shiftKey | false |
 *   | timeout | 4000 |
 *   | waitForAnimations | true |
 * ```
 *
 * @remarks
 *
 * A preceding step like {@link When_I_find_element_by_text | "When I find element by text"} is required. For example:
 *
 * ```gherkin
 * When I find element by text "Text"
 *   And I click "top-right"
 * ```
 *
 * @see
 *
 * - {@link When_I_click | When I click}
 * - {@link When_I_click_x_y_coordinates | When I click x-y coordinates}
 */
export function When_I_click_position(
  position:
    | 'top'
    | 'left'
    | 'center'
    | 'right'
    | 'bottom'
    | 'bottom-left'
    | 'bottom-right'
    | 'top-left'
    | 'top-right',
  options?: DataTable,
) {
  getCypressElement().click(
    camelCase(position) as Cypress.PositionType,
    getOptions(options),
  );
}

When('I click {string}', When_I_click_position);

/**
 * When I click x-y coordinates:
 *
 * ```gherkin
 * When I click {int}px and {int}px
 * ```
 *
 * @example
 *
 * ```gherkin
 * When I click 80px and 75px
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/click#Arguments):
 *
 * ```gherkin
 * When I click 80px and 75px
 *   | altKey | false |
 *   | animationDistanceThreshold | 5 |
 *   | ctrlKey | false |
 *   | log | true |
 *   | force | false |
 *   | metaKey | false |
 *   | multiple | false |
 *   | scrollBehavior | top |
 *   | shiftKey | false |
 *   | timeout | 4000 |
 *   | waitForAnimations | true |
 * ```
 *
 * @remarks
 *
 * A preceding step like {@link When_I_find_element_by_text | "When I find element by text"} is required. For example:
 *
 * ```gherkin
 * When I find element by text "Text"
 *     And I click 80px and 75px
 * ```
 *
 * @see
 *
 * - {@link When_I_click | When I click}
 * - {@link When_I_click_position | When I click position}
 */
export function When_I_click_x_y_coordinates(
  x: number,
  y: number,
  options?: DataTable,
) {
  getCypressElement().click(x, y, getOptions(options));
}

When('I click {int}px and {int}px', When_I_click_x_y_coordinates);

/**
 * When I click on button:
 *
 * ```gherkin
 * When I click on button {string}
 * ```
 *
 * If multiple buttons are found, it will click on the first one.
 *
 * @example
 *
 * ```gherkin
 * When I click on button "Button"
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/get#Arguments):
 *
 * ```gherkin
 * When I click on button "Button"
 *   | log | true |
 *   | timeout | 4000 |
 *   | withinSubject | null |
 *   | includeShadowDom | false |
 * ```
 *
 * @see
 *
 * - {@link When_I_click_on_text | When I click on text}
 */
export function When_I_click_on_button(text: string, options?: DataTable) {
  When_I_find_button_by_text(text, options);
  getCypressElement().click();
}

When('I click on button {string}', When_I_click_on_button);

/**
 * When I click on link:
 *
 * ```gherkin
 * When I click on link {string}
 * ```
 *
 * If multiple links are found, it will click on the first one.
 *
 * @example
 *
 * ```gherkin
 * When I click on link "Link"
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/contains#Arguments):
 *
 * ```gherkin
 * When I click on link "Link"
 *   | matchCase | true |
 *   | log | true |
 *   | timeout | 4000 |
 *   | includeShadowDom | false |
 * ```
 *
 * @see
 *
 * - {@link When_I_click_on_text | When I click on text}
 */
export function When_I_click_on_link(text: string, options?: DataTable) {
  cy.contains('a', text, getOptions(options)).first().click();
}

When('I click on link {string}', When_I_click_on_link);

/**
 * When I click on text:
 *
 * ```gherkin
 * When I click on text {string}
 * ```
 *
 * Alternative:
 *
 * - {@link When_I_click | When I click}
 *
 * @example
 *
 * ```gherkin
 * When I click on text "Text"
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/contains#Arguments):
 *
 * ```gherkin
 * When I click on text "Text"
 *   | matchCase | true |
 *   | log | true |
 *   | timeout | 4000 |
 *   | includeShadowDom | false |
 * ```
 *
 * @see
 *
 * - {@link When_I_click_on_button | When I click on button}
 * - {@link When_I_click_on_label | When I click on label}
 * - {@link When_I_click_on_link | When I click on link}
 */
export function When_I_click_on_text(text: string, options?: DataTable) {
  cy.contains(text, getOptions(options)).click();
}

When('I click on text {string}', When_I_click_on_text);

/**
 * When I click on label:
 *
 * ```gherkin
 * When I click on label {string}
 * ```
 *
 * @example
 *
 * ```gherkin
 * When I click on label "Label"
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/get#Arguments):
 *
 * ```gherkin
 * When I click on label "Label"
 *   | log | true |
 *   | timeout | 4000 |
 *   | withinSubject | null |
 *   | includeShadowDom | false |
 * ```
 *
 * @see
 *
 * - {@link When_I_click_on_text | When I click on text}
 */
export function When_I_click_on_label(text: string, options?: DataTable) {
  When_I_find_element_by_label_text(text, options);
  getCypressElement().click();
}

When('I click on label {string}', When_I_click_on_label);
