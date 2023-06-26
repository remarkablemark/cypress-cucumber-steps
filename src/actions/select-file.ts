import { DataTable, When } from '@badeball/cypress-cucumber-preprocessor';

import { getCypressElement, getOptions } from '../utils';

/**
 * When I select file:
 *
 * ```gherkin
 * When I select file {string}
 * ```
 *
 * Selects a file in an HTML5 input element.
 *
 * @example
 *
 * Select file:
 *
 * ```gherkin
 * When I select file "cypress/fixtures/example.json"
 * ```
 *
 * Drag and drop file:
 *
 * ```gherkin
 * When I select file "cypress/fixtures/example.json"
 *   | action | drag-drop |
 * ```
 *
 * Force the action when input is not visible:
 *
 * ```gherkin
 * When I select file "cypress/fixtures/example.json"
 *   | force | true |
 * ```
 *
 * @remarks
 *
 * A preceding step like {@link When_I_get_element_by_selector | "When I get element by selector"} is required. For example:
 *
 * ```gherkin
 * When I get element by selector "input[type=file]"
 *   And I select file "cypress/fixtures/example.json"
 * ```
 */
export function When_I_select_file(file: string, options?: DataTable) {
  getCypressElement().selectFile(file, getOptions(options));
}

When('I select file {string}', When_I_select_file);
