import { DataTable } from '@badeball/cypress-cucumber-preprocessor';

/**
 * Transforms table to options.
 *
 * @param table - Table.
 * @returns - Options.
 * @private
 */
export function getOptions(table?: DataTable) {
  if (!table) {
    return;
  }

  return Object.entries(table.rowsHash()).reduce<Record<string, unknown>>(
    (result, [key, value]) => {
      try {
        result[key] = JSON.parse(value) as unknown;
      } catch {
        result[key] = value;
      }
      return result;
    },
    {},
  );
}
