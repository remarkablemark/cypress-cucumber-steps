Feature: Cypress API
  Scenario: Hidden text
    Given I visit "https://example.cypress.io/cypress-api"
    Then I do not see visible text "I'm hiding!"
    When I find element by text "I'm hiding!"
    Then I see element is not visible

  Scenario: Set environment variable
    Given I visit "https://example.cypress.io/cypress-api"
    When I set environment variable "api_server" to "http://localhost:8888/v2/"
