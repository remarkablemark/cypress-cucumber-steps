Feature: Cypress
  Scenario: Going to Cypress example site
    When I visit "https://example.cypress.io/"
    Then I see text "Kitchen Sink"
      And I do not see text "cy.get()"
    When I click on text "get"
    Then I see text "cy.get()"
    When I visit "https://example.cypress.io/commands/actions"
      And I get element by label text "Email address"
      And I type "user@example.com"
