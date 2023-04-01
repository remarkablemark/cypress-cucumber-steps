import { DataTable } from '@badeball/cypress-cucumber-preprocessor';

/**
 * Transforms table to options.
 *
 * @param table - Table.
 * @returns - Options.
 */
export function getOptions(table?: DataTable) {
  if (!table) {
    return;
  }

  return Object.entries(table.rowsHash()).reduce((result, [key, value]) => {
    if (value === 'true') {
      result[key] = true;
    } else if (value === 'false') {
      result[key] = false;
    } else if (!isNaN(Number(value))) {
      result[key] = Number(value);
    } else {
      result[key] = value;
    }
    return result;
  }, {} as Record<string, string | number | boolean>);
}
