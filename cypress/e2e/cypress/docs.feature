Feature: Cypress docs
  Scenario: Alt text
    When I visit "https://docs.cypress.io/plugins/directory"
      And I find element by alt text "Cypress Docs Logo"
      And I click
    Then I see URL "https://docs.cypress.io/"

  Scenario: Go back and forward
    When I visit "https://docs.cypress.io/api/commands/go"
      And I click on text "cy.reload()"
    Then I see URL "https://docs.cypress.io/api/commands/reload"
    When I go back
    Then I see URL contains "go"
    When I go forward
    Then I see URL contains "reload"
    When I go -1
    Then I see URL contains "go"
