Feature: Cypress docs
  Scenario: Alt text
    Given I set viewport to "ipad-mini"
    When I visit "https://docs.cypress.io/plugins/directory"
      And I find elements by alt text "Cypress Logo"
      And I find element by alt text "Cypress Logo"
      And I click
    Then I see URL contains "https://docs.cypress.io/"

  Scenario: Go back and forward
    Given I visit "https://docs.cypress.io/api/commands/go"
      And I click on link "cy.reload()"
    Then I see URL "https://docs.cypress.io/api/commands/reload"
    When I go back
    Then I see URL contains "go"
    When I go forward
    Then I see URL contains "reload"
    When I go -1
    Then I see URL contains "go"

  Scenario: Set Cypress config and find and click aria-label
    Given I visit "https://docs.cypress.io/plugins"
      And I set Cypress config "baseUrl" to "null"
      And I set Cypress config "defaultCommandTimeout" to "10000"
      And I wait 1 second
    Then I see label "Search"
    When I find element by label text "Search"
      And I click on label "Search"
      And I get focused element
      And I wait 300 milliseconds
      And I type "get"
    Then I see link "get"
