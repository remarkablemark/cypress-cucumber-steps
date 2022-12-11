<!-- readme-start -->

<!-- readme-content-start -->

# cypress-cucumber-steps

[![NPM](https://nodei.co/npm/cypress-cucumber-steps.png)](https://nodei.co/npm/cypress-cucumber-steps/)

[![NPM version](https://img.shields.io/npm/v/cypress-cucumber-steps.svg)](https://www.npmjs.com/package/cypress-cucumber-steps)
[![build](https://github.com/remarkablemark/cypress-cucumber-steps/actions/workflows/build.yml/badge.svg)](https://github.com/remarkablemark/cypress-cucumber-steps/actions/workflows/build.yml)
[![cypress](https://github.com/remarkablemark/cypress-cucumber-steps/actions/workflows/cypress.yml/badge.svg)](https://github.com/remarkablemark/cypress-cucumber-steps/actions/workflows/cypress.yml)

[Cypress](https://www.cypress.io/) [Cucumber](https://github.com/badeball/cypress-cucumber-preprocessor) step definitions. See [docs](https://remarkabl.org/cypress-cucumber-steps) and [examples](https://github.com/remarkablemark/cypress-cucumber-steps/tree/master/cypress/e2e).

## Prerequisites

Install peerDependencies:

```sh
npm install --save-dev cypress @badeball/cypress-cucumber-preprocessor
```

Set up [Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress) and [cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/quick-start.md).

## Installation

[NPM](https://www.npmjs.com/package/cypress-cucumber-steps):

```sh
npm install --save-dev cypress-cucumber-steps
```

[Yarn](https://yarnpkg.com/package/cypress-cucumber-steps):

```sh
yarn add --dev cypress-cucumber-steps
```

## Usage

Create a directory for the common step definitions:

```sh
mkdir -p cypress/support/step_definitions/
```

Create a [step definition](https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/step-definitions.md) file:

```sh
touch cypress/support/step_definitions/**/*.{js,ts}
```

> Replace `**/*.{js,ts}` with a filename like `index.ts`.

Require the module with TypeScript:

```ts
import 'cypress-cucumber-steps';
```

Or require the module with CommonJS:

```js
require('cypress-cucumber-steps');
```

The step definition can now be used in feature files:

```gherkin
# cypress/e2e/example.feature
When I visit "https://example.com/"
Then I see text "Example Domain"
```

See [docs](https://remarkabl.org/cypress-cucumber-steps) and [examples](https://github.com/remarkablemark/cypress-cucumber-steps/tree/master/cypress/e2e).

## Release

Release is automated with [Release Please](https://github.com/googleapis/release-please).

## License

[MIT](https://github.com/remarkablemark/cypress-cucumber-steps/blob/master/LICENSE)

<!-- readme-content-end -->

<!-- readme-content-placeholder -->

<!-- readme-end -->
