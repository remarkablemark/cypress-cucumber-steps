/**
 * @private
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type CypressChainableElement = Cypress.Chainable<any>;

let cypressElement: CypressChainableElement;

/**
 * Set Cypress element:
 *
 * ```ts
 * setCypressElement(cy.get('...'));
 * ```
 *
 * @example
 *
 * ```ts
 * setCypressElement(cy.contains('Text'));
 * ```
 *
 * @see
 *
 * - {@link getCypressElement}
 * - {@link setCypressElementByLabelText}
 *
 * @param element - Cypress element.
 * @returns - Cypress element.
 *
 * @private
 */
export function setCypressElement(element: CypressChainableElement) {
  return (cypressElement = element);
}

/**
 * Get Cypress element:
 *
 * ```ts
 * getCypressElement();
 * ```
 *
 * @example
 *
 * ```ts
 * getCypressElement().should('exist');
 * ```
 *
 * @see
 *
 * - {@link setCypressElement}
 *
 * @returns - Cypress element.
 *
 * @private
 */
export function getCypressElement(): CypressChainableElement {
  if (!Cypress.isCy(cypressElement)) {
    throw new Error(
      `The element you are chaining off is ${cypressElement}.

Add a preceding step "When I find element by ..."`,
    );
  }
  return cypressElement;
}
