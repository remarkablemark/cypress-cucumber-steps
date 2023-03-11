import { When } from '@badeball/cypress-cucumber-preprocessor';

import { getCypressElement } from '../utils';

/* eslint-disable tsdoc/syntax */
/**
 * When I trigger event:
 *
 * ```gherkin
 * When I trigger event {string}
 * ```
 *
 * @example
 *
 * Trigger a `mouseover` on the button:
 *
 * ```gherkin
 * When I trigger event "mouseover"
 * ```
 *
 * > The DOM element must be in an "interactable" state prior to the triggered event happening (it must be visible and not disabled).
 *
 * @remarks
 *
 * A preceding step like {@link When_I_find_element_by_text | "When I find element by text"} is required. For example:
 *
 * ```gherkin
 * When I find element by text "Text"
 *   And I trigger event "mousedown"
 * ```
 *
 * @param eventName - The name of the `event` to be triggered on the DOM element.
 */
/* eslint-enable tsdoc/syntax */
export function When_I_trigger_event(eventName: string) {
  getCypressElement().trigger(eventName);
}

When('I trigger event {string}', When_I_trigger_event);
