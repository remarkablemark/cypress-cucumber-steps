import { defineConfig } from 'cypress';
import createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild';

export default defineConfig({
  e2e: {
    specPattern: '**/*.feature',
    async setupNodeEvents(on, config) {
      // https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/quick-start.md
      await addCucumberPreprocessorPlugin(on, config);
      on(
        'file:preprocessor',
        createBundler({ plugins: [createEsbuildPlugin(config)] })
      );
      return config;
    },
  },

  retries: {
    runMode: 3,
  },
});
