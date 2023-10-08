/* eslint-disable @typescript-eslint/ban-ts-comment */
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
// @ts-ignore
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild';
// @ts-ignore
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    specPattern: '**/*.feature',

    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions,
    ): Promise<Cypress.PluginConfigOptions> {
      // https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/quick-start.md
      await addCucumberPreprocessorPlugin(on, config);

      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        }),
      );

      return config;
    },
  },

  retries: {
    runMode: 3,
  },
});
