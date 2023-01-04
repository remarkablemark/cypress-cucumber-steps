import { Then } from '@badeball/cypress-cucumber-preprocessor';

/**
 * Then I see heading:
 *
 * ```gherkin
 * Then I see heading {string}
 * ```
 *
 * @example
 *
 * ```gherkin
 * Then I see heading "Heading"
 * ```
 *
 * @remarks
 *
 * This asserts that a heading (`h1`, `h2`, `h3`, `h4`, `h5`, or `h6`) with text **_exists_** and is **_visible_** in the screen.
 *
 * @see
 *
 * - {@link Then_I_see_text | Then I see text}
 */
export function Then_I_see_heading(text: string) {
  // wait until text is found before making assertion
  cy.contains(text)
    .get('body')
    .then(($body) => {
      const heading = getHeadingTagByText($body, text);

      if (!heading) {
        throw new Error(`Unable to see heading: ${text}`);
      }

      cy.contains(`${heading}:visible`, text).should('exist');
    });
}

Then('I see heading {string}', Then_I_see_heading);

/**
 * Get heading tag name by text.
 *
 * @param $body - jQuery body element.
 * @param text - Text.
 * @returns - Tag name.
 */
function getHeadingTagByText(
  $body: JQuery<HTMLBodyElement>,
  text: string
): string {
  return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].reduce(
    (previousValue, tagName) =>
      $body.find(`${tagName}:visible`).text().includes(text)
        ? tagName
        : previousValue,
    ''
  );
}
