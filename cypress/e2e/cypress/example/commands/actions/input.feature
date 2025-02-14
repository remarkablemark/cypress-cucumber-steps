Feature: Cypress actions input
  Scenario: Type and clear input
    Given I visit "https://example.cypress.io/commands/actions"
      And I find element by label text "Email address"
      And I type "user@example.com"
        | animationDistanceThreshold | 5 |
        | delay | 10 |
        | force | false |
        | log | true |
        | parseSpecialCharSequences | true |
        | release | true |
        | scrollBehavior | top |
        | timeout | 4000 |
        | waitForAnimations | true |
    When I find element by label text "Password"
      And I type "password"
      And I find input by label text "Password"
    Then I see value "password"
    When I find input by label text "Password"
      And I clear
      And I find input by label text "Password"
    Then I see value ""

  Scenario: Blur
    Given I visit "https://example.cypress.io/commands/actions"
      And I find element by text "Full Name"
      And I type "About to blur"
      And I blur

  Scenario: Find and set input value
    Given I visit "https://example.cypress.io/commands/actions"
    When I double-click on text "Double click to edit"
      And I get focused element
      And I clear
      And I type "Lorem ipsum"
    When I find input by display value "Lorem ipsum"
      And I set value "Dolor sit amet"
    When I get element by display value "0"
      And I set value "42"
    Then I see text "42"
