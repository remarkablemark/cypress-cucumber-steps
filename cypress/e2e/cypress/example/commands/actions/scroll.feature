Feature: Cypress actions scroll
  Scenario: Scroll window
    Given I visit "https://example.cypress.io/commands/actions"
      And I scroll window to 0px and 500px
      And I scroll window to "bottom-right"
      And I scroll window to "center"
      And I scroll window to "top-left"
    Then I find element by text "I'm Here"
      And I see element is not visible

  Scenario: Scroll into view
    Given I visit "https://example.cypress.io/commands/actions"
    When I get element by selector "#scroll-horizontal button"
    Then I see element is not visible
    When I scroll into view
    Then I see element is visible

  Scenario: Scroll to
    Given I visit "https://example.cypress.io/commands/actions"
    When I get element by selector "#scrollable-both button"
    Then I see element is not visible
    When I get element by selector "#scrollable-both"
      And I scroll to 100px and 200px
      And I scroll to "center"
      And I get element by selector "#scrollable-both button"
    Then I see element is visible
