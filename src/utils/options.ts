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

  return Object.entries(table.rowsHash()).reduce(
    (result, [key, value]) => {
      try {
        result[key] = JSON.parse(value);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        result[key] = value;
      }
      return result;
    },
    {} as Record<string, string | number | boolean>,
  );
}
