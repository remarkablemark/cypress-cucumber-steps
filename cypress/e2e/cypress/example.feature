Feature: Cypress example
  Scenario: Click and see text
    When I visit "https://example.cypress.io/"
    Then I see text "Kitchen Sink"
      And I do not see text "cy.get()"
    When I click on text "get"
    Then I see text "cy.get()"

  Scenario: Click button
    When I visit "https://example.cypress.io/commands/actions"
    Then I do not see text "This popover shows up on click"
    When I click on button "Click to toggle popover"
    Then I see text "This popover shows up on click"

  Scenario: Double-click text
    When I visit "https://example.cypress.io/commands/actions"
      And I double-click on text "Double click to edit"
    When I reload the page
      And I find element by text "Double click to edit"
      And I double-click

  Scenario: Right-click text
    When I visit "https://example.cypress.io/commands/actions"
      And I right-click on text "Right click to edit"
    When I reload the page
      And I find element by text "Right click to edit"
      And I right-click

  Scenario: Checkbox and radio
    When I visit "https://example.cypress.io/commands/actions"
      And I click on text 'Checkbox one has value "checkbox1"'
      And I click on text 'Checkbox one has value "checkbox1"'
      And I click on text 'Radio one has value "radio1"'
      And I click on text 'Radio two has value "radio2". When checked, it will uncheck Radio one.'

  Scenario: Select option
    When I visit "https://example.cypress.io/commands/actions"
      And I select option "bananas"
      And I select option "bananas"
    Then I see text "bananas"

  Scenario: Type and clear input
    When I visit "https://example.cypress.io/commands/actions"
      And I get element by label text "Email address"
      And I type "user@example.com"
    When I find element by placeholder text "Password"
      And I type "password"
      And I clear

  Scenario: Blur
    When I visit "https://example.cypress.io/commands/actions"
      And I find element by text "Full Name"
      And I type "About to blur"
      And I blur

  Scenario: Visible text
    When I visit "https://example.cypress.io/commands/actions"
    Then I do not see visible text "I'm Here"
