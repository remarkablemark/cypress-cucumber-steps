Feature: Cypress
  Scenario: Click and see text
    When I visit "https://example.cypress.io/"
    Then I see text "Kitchen Sink"
      And I do not see text "cy.get()"
    When I click on text "get"
    Then I see text "cy.get()"

  Scenario: Type input
    When I visit "https://example.cypress.io/commands/actions"
      And I get element by label text "Email address"
      And I type "user@example.com"

  Scenario: Click submit
    When I visit "https://example.cypress.io/commands/actions"
    Then I do not see text "This popover shows up on click"
    When I find element by text "Click to toggle popover"
      And I click
    Then I see text "This popover shows up on click"

  Scenario: See visible text
    When I visit "https://example.cypress.io/commands/actions"
    Then I do not see visible text "I'm Here"
