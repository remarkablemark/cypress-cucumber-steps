const HYPHEN_REGEX = /-([a-z])/g;

/**
 * Replacer that capitalizes the first character in a string match.
 *
 * @private
 */
function capitalize(match: string, character: string): string {
  return character.toUpperCase();
}

/**
 * Transforms a string to camelCase.
 *
 * @private
 */
export function camelCase(text: string): string {
  return text.replace(HYPHEN_REGEX, capitalize);
}
