Feature: Cypress traversal
  Scenario: Focus on element
    Given I visit "https://example.cypress.io/commands/traversal"
    When I get element by display value "Submit"
      And I focus
      And I get focused element
    Then I see element has attribute "type"
      And I get focused element
      And I see element attribute "type" equals "submit"
