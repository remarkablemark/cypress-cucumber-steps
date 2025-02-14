Feature: Cypress actions click
  Scenario: See and click button
    Given I visit "https://example.cypress.io/commands/actions"
    Then I do not see text "This popover shows up on click"
      And I see button "Click to toggle popover"
    When I click on button "Click to toggle popover"
    Then I see text "This popover shows up on click"
      And I find elements by role "tooltip"
    When I click on text "Click to toggle popover"
      And I wait 500 milliseconds
    Then I see element does not exist

  Scenario: Double-click
    Given I visit "https://example.cypress.io/commands/actions"
      And I double-click on text "Double click to edit"
    Then I do not see visible text "Double click to edit"
      And I see input value "Double click to edit"
    When I reload the page
      And I find element by text "Double click to edit"
      And I double-click
    Then I do not see visible text "Double click to edit"
      And I see input value contains "Double click to edit"
    When I reload the page
      And I find element by text "Double click to edit"
      And I double-click "top"
    Then I do not see visible text "Double click to edit"
      And I find input by display value "Double click to edit"

  Scenario: Right-click
    Given I visit "https://example.cypress.io/commands/actions"
      And I right-click on text "Right click to edit"
    Then I do not see visible text "Right click to edit"
      And I see input value "Right click to edit"
    When I reload the page
      And I find element by text "Right click to edit"
      And I right-click
    Then I do not see visible text "Right click to edit"
      And I see input value contains "Right click to edit"
    When I reload the page
      And I find element by text "Right click to edit"
      And I right-click "top"
    Then I do not see visible text "Right click to edit"
      And I find input by display value "Right click to edit"

  Scenario: Click position
    Given I visit "https://example.cypress.io/commands/actions"
    When I get element by selector "#action-canvas"
      And I click "top-left"
      And I click "top"
      And I click "top-right"
      And I click "left"
      And I click "right"
      And I click "bottom-left"
      And I click "bottom"
      And I click "bottom-right"
    When I reload the page
      And I get element by selector "#action-canvas"
      And I click 80px and 75px
      And I click 170px and 75px
      And I click 80px and 165px
      And I click 100px and 185px
      And I click 125px and 190px
      And I click 150px and 185px
      And I click 170px and 165px
