/* eslint-disable tsdoc/syntax */

/**
 * @private
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type CypressChainableElement = Cypress.Chainable<any>;

/**
 * @private
 */
export interface MochaContext extends Mocha.Context {
  cypressElement?: CypressChainableElement;
}

/**
 * Set Cypress element on Mocha Context.
 *
 * @private
 *
 * @param context - Mocha context.
 * @param element - Cypress element.
 */
export function setCypressElement(
  context: MochaContext,
  element: CypressChainableElement
) {
  context.cypressElement = element;
}

/**
 * Get Cypress element from Mocha Context.
 *
 * @private
 *
 * @param context - Mocha context.
 * @returns - Cypress element.
 */
export function getCypressElement(context: MochaContext) {
  if (!Cypress.isCy(context.cypressElement)) {
    throw new Error(
      `The element you are chaining off is ${context.cypressElement}.

Add a preceding step "When I get element by ..." or "When I find element by ..."`
    );
  }

  return context.cypressElement;
}
