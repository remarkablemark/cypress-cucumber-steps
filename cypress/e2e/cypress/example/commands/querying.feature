Feature: Cypress querying
  Scenario: Placeholder
    Given I visit "https://example.cypress.io/commands/querying"
    When I find elements by placeholder text "Name"
    Then I count 1 element
    When I find element by placeholder text "Name"
    Then I count 1 element
    When I find inputs by placeholder text "Name"
    Then I count 1 element
    When I find input by placeholder text "Name"
    Then I count 1 element

  Scenario: Test ID
    Given I visit "https://example.cypress.io/commands/querying"
    Then I see test ID "test-example"
      And I do not see test ID "test-invalid"
    When I find elements by test ID "test-example"
    Then I count 1 element
    When I find element by test ID "test-example"
    Then I count 1 element
      And I click on test ID "test-example"

  Scenario: Role
    Given I visit "https://example.cypress.io/commands/querying"
    When I find elements by role "button"
    Then I see element exists
    When I find element by role "button"
    Then I see element is visible
      And I see role "button"
      And I do not see role "tooltip"
