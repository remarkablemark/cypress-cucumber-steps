Feature: Cypress cookies
  Scenario: Cookie
    Given I visit "https://example.cypress.io/commands/cookies"
    When I set cookie "name" to "value"
    Then I see cookie "name"
    When I clear cookie "name"
    Then I do not see cookie "name"
    When I set cookie "foo" to "bar"
    Then I see cookie "foo" has value "bar"
    When I clear cookies
    Then I do not see cookie "foo"
    When I click on button "Set Cookie"
    Then I see cookie "token" contains value "123"
    When I clear all cookies
    Then I do not see cookie "test"
