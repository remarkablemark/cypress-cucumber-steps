Feature: Cypress example
  Scenario: Click and see text
    Given I visit "https://example.cypress.io/"
    Then I see text "Kitchen Sink"
      And I do not see text "cy.get()"
    When I click on text "get"
    Then I see text "cy.get()"

  Scenario: Hidden link
    Given I visit "https://example.cypress.io/"
    When I find link by text "Cypress.io"
      And I set attribute "style" to "visibility: hidden"
    Then I do not see link "Cypress.io"
