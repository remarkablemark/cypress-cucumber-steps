import { DataTable, When } from '@badeball/cypress-cucumber-preprocessor';

import { PseudoSelector } from '../constants';
import { When_I_find_element_by_label_text } from '../queries';
import {
  camelCase,
  getButtonElements,
  getCypressElement,
  getLinkElements,
  getOptions,
  getTestIdElements,
} from '../utils';

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
 * With options:
 *
 * ```gherkin
 * When I click on button "Button"
 *   | altKey | false |
 *   | animationDistanceThreshold | 5 |
 *   | ctrlKey | false |
 *   | force | false |
 *   | includeShadowDom | false |
 *   | log | true |
 *   | metaKey | false |
 *   | multiple | false |
 *   | scrollBehavior | top |
 *   | shiftKey | false |
 *   | timeout | 4000 |
 *   | waitForAnimations | true |
 *   | withinSubject | null |
 * ```
 *
 * @see
 *
 * - {@link When_I_click_on_text | When I click on text}
 */
export function When_I_click_on_button(text: string, options?: DataTable) {
  getButtonElements(text, PseudoSelector.visible, options)
    .first()
    .click(getOptions(options));
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
 * With options:
 *
 * ```gherkin
 * When I click on link "Link"
 *   | altKey | false |
 *   | animationDistanceThreshold | 5 |
 *   | ctrlKey | false |
 *   | force | false |
 *   | includeShadowDom | false |
 *   | log | true |
 *   | metaKey | false |
 *   | multiple | false |
 *   | scrollBehavior | top |
 *   | shiftKey | false |
 *   | timeout | 4000 |
 *   | waitForAnimations | true |
 *   | withinSubject | null |
 * ```
 *
 * @see
 *
 * - {@link When_I_click_on_text | When I click on text}
 */
export function When_I_click_on_link(text: string, options?: DataTable) {
  getLinkElements(text, PseudoSelector.visible, options)
    .first()
    .click(getOptions(options));
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
 * With options:
 *
 * ```gherkin
 * When I click on text "Text"
 *   | altKey | false |
 *   | animationDistanceThreshold | 5 |
 *   | ctrlKey | false |
 *   | force | false |
 *   | includeShadowDom | false |
 *   | log | true |
 *   | matchCase | true |
 *   | metaKey | false |
 *   | multiple | false |
 *   | scrollBehavior | top |
 *   | shiftKey | false |
 *   | timeout | 4000 |
 *   | waitForAnimations | true |
 * ```
 *
 * @see
 *
 * - {@link When_I_click_on_button | When I click on button}
 * - {@link When_I_click_on_label | When I click on label}
 * - {@link When_I_click_on_link | When I click on link}
 */
export function When_I_click_on_text(text: string, options?: DataTable) {
  const opts = getOptions(options);
  cy.contains(text, opts).click(opts);
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
 * With options:
 *
 * ```gherkin
 * When I click on label "Label"
 *   | altKey | false |
 *   | animationDistanceThreshold | 5 |
 *   | ctrlKey | false |
 *   | force | false |
 *   | includeShadowDom | false |
 *   | log | true |
 *   | metaKey | false |
 *   | multiple | false |
 *   | scrollBehavior | top |
 *   | shiftKey | false |
 *   | timeout | 4000 |
 *   | waitForAnimations | true |
 *   | withinSubject | null |
 * ```
 *
 * @see
 *
 * - {@link When_I_click_on_text | When I click on text}
 */
export function When_I_click_on_label(text: string, options?: DataTable) {
  When_I_find_element_by_label_text(text, options);
  getCypressElement().click(getOptions(options));
}

When('I click on label {string}', When_I_click_on_label);

/**
 * When I click on test ID:
 *
 * ```gherkin
 * When I click on test ID {string}
 * ```
 *
 * Clicks on first element that matches the `data-testid` or `data-test-id` attribute:
 *
 * ```html
 * <div data-testid="test"></div>
 * <div data-test-id="test"></div>
 * ```
 *
 * _Use this only if the other actions don't work. `data-testid` or `data-test-id` don't resemble how your software is used and should be avoided if possible._
 *
 * @example
 *
 * ```gherkin
 * When I click on test ID "testID"
 * ```
 *
 * With options:
 *
 * ```gherkin
 * When I click on test ID "testID"
 *   | altKey | false |
 *   | animationDistanceThreshold | 5 |
 *   | ctrlKey | false |
 *   | force | false |
 *   | includeShadowDom | false |
 *   | log | true |
 *   | metaKey | false |
 *   | multiple | false |
 *   | scrollBehavior | top |
 *   | shiftKey | false |
 *   | timeout | 4000 |
 *   | waitForAnimations | true |
 *   | withinSubject | null |
 * ```
 *
 * @see
 *
 * - {@link When_I_click_on_text | When I click on text}
 */
export function When_I_click_on_testid(testId: string, options?: DataTable) {
  getTestIdElements(testId, PseudoSelector.visible, options)
    .first()
    .click(getOptions(options));
}

When('I click on test ID {string}', When_I_click_on_testid);
