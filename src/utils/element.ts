/**
 * @private
 */
export type CypressChainableElement = Cypress.Chainable;

let cypressElement: CypressChainableElement | undefined;

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
      `The element you are chaining off is ${String(cypressElement)}.

Add a preceding step "When I find element by ..."`,
    );
  }
  return cypressElement;
}
