# cypress-cucumber-steps

[![NPM](https://nodei.co/npm/cypress-cucumber-steps.png)](https://nodei.co/npm/cypress-cucumber-steps/)

[![NPM version](https://img.shields.io/npm/v/cypress-cucumber-steps.svg)](https://www.npmjs.com/package/cypress-cucumber-steps)
[![build](https://github.com/remarkablemark/cypress-cucumber-steps/actions/workflows/build.yml/badge.svg)](https://github.com/remarkablemark/cypress-cucumber-steps/actions/workflows/build.yml)

[Cypress](https://www.cypress.io/) [Cucumber](https://github.com/badeball/cypress-cucumber-preprocessor) step definitions.

## Quick Start

With [cypress](https://docs.cypress.io/guides/getting-started/installing-cypress) and [cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/quick-start.md) installed and set up:

```ts
// cypress/support/step_definitions/index.ts
import 'cypress-cucumber-steps';
```

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

Install and set up [cypress](https://docs.cypress.io/guides/getting-started/installing-cypress) and [cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/quick-start.md).

Create a [step definition](https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/step-definitions.md) file:

```sh
touch cypress/support/step_definitions/**/*.{js,ts}
```

> Replace `**/*.{js,ts}` with your filename.

Then require the module with CommonJS:

```js
require('cypress-cucumber-steps');
```

Or require the module with TypeScript:

```ts
import 'cypress-cucumber-steps';
```

## Release

Release is automated with [Release Please](https://github.com/googleapis/release-please).

## License

[MIT](https://github.com/remarkablemark/cypress-cucumber-steps/blob/master/LICENSE)
