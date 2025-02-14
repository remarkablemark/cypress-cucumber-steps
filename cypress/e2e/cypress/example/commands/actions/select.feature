Feature: Cypress actions select
  Scenario: Select option
    Given I visit "https://example.cypress.io/commands/actions"
    Then I see option "--Select a fruit--"
      And I do not see option "Invalid"
    When I select option "apples"
      And I get element by selector "select"
    Then I see value "fr-apples"
    When I get elements by selector "select"
      And I get 2nd element
      And I select "bananas"

  Scenario: Find and select option
    Given I visit "https://example.cypress.io/commands/actions"
    When I get element by display value "apples"
      And I set value "fr-apples"
    When I find select by display value "bananas"
      And I select option "bananas"
