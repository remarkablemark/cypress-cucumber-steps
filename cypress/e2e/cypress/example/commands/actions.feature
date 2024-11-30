Feature: Cypress actions
  Scenario: See button, heading, link, and label
    Given I visit "https://example.cypress.io/commands/actions"
    Then I see heading "Actions"
      And I see heading ".type()"
      And I see heading "Canvas to Illustrate Click Positions"
      And I see link ".type()"
      And I see label "Email address"
      And I see button "Submit"

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

  Scenario: See, click, and type label
    Given I visit "https://example.cypress.io/commands/actions"
    Then I see label "Email address"
    When I click on label "Email address"
      And I type "test@example.com"

  Scenario: Force click
    Given I visit "https://example.cypress.io/commands/actions"
    Then I click on button "I'm being covered"
      | force | true |
    When I reload the page
      And I find button by text "I'm being covered"
    Then I click
      | force | true |

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

  Scenario: Checkbox and radio
    Given I visit "https://example.cypress.io/commands/actions"
    When I find input by label text 'Checkbox one has value "checkbox1"'
      And I check
      And I check input 'Checkbox one has value "checkbox1"'
      And I uncheck
      And I uncheck input 'Checkbox one has value "checkbox1"'
    When I click on text 'Radio one has value "radio1"'
      And I check input 'Radio one has value "radio1"'
      And I click on text 'Radio two has value "radio2". When checked, it will uncheck Radio one.'

  Scenario: Select option
    Given I visit "https://example.cypress.io/commands/actions"
    Then I see option "--Select a fruit--"
      And I do not see option "Invalid"
    When I select option "apples"
      And I get element by selector "select"
    Then I see value "fr-apples"
    When I get elements by selector "select"
      And I get 2nd element
      And I select "bananas"

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

  Scenario: Find and select option
    Given I visit "https://example.cypress.io/commands/actions"
    When I get element by display value "apples"
      And I set value "fr-apples"
    When I find select by display value "bananas"
      And I select option "bananas"

  Scenario: Find title and trigger event
    Given I visit "https://example.cypress.io/commands/actions"
      And I set Cypress config "defaultCommandTimeout" to "10000"
    When I find element by title ""
      And I trigger event "click"
    Then I see heading "Popover"
    When I reload the page
      And I click on title ""
    Then I see heading "Popover"

  Scenario: Find and submit form
    Given I visit "https://example.cypress.io/commands/actions"
    When I find form
      And I get 5th element
      And I submit
    Then I see text "Your form has been submitted!"

  Scenario: Find closest element
    Given I visit "https://example.cypress.io/commands/actions"
    When I find element by label text "Coupon Code"
      And I find closest element "form"
      And I submit
    Then I see text "Your form has been submitted!"
