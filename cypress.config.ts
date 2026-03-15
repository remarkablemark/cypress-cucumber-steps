import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
// @ts-expect-error Cannot find module or its corresponding type declarations.
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    specPattern: '**/*.feature',
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions,
    ): Promise<Cypress.PluginConfigOptions> {
      /**
       * @see https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/quick-start.md
       */
      await addCucumberPreprocessorPlugin(on, config);
      on(
        'file:preprocessor',
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        createBundler({ plugins: [createEsbuildPlugin(config)] }),
      );
      return config;
    },
  },
  retries: {
    runMode: 3,
  },
});
