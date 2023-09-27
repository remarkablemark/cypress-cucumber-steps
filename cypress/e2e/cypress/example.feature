Feature: Cypress example
  Scenario: Click and see text
    Given I visit "https://example.cypress.io/"
    Then I see text "Kitchen Sink"
      And I do not see text "cy.get()"
    When I click on text "get"
    Then I see text "cy.get()"

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

  Scenario: See, click, and type label
    Given I visit "https://example.cypress.io/commands/actions"
    Then I see label "Email address"
    When I click on label "Email address"
      And I type "test@example.com"

  Scenario: Double-click text
    Given I visit "https://example.cypress.io/commands/actions"
      And I double-click on text "Double click to edit"
    When I reload the page
      And I find element by text "Double click to edit"
      And I double-click

  Scenario: Right-click text
    Given I visit "https://example.cypress.io/commands/actions"
      And I right-click on text "Right click to edit"
    When I reload the page
      And I find element by text "Right click to edit"
      And I right-click

  Scenario: Checkbox and radio
    Given I visit "https://example.cypress.io/commands/actions"
      And I click on text 'Checkbox one has value "checkbox1"'
      And I click on text 'Checkbox one has value "checkbox1"'
      And I click on text 'Radio one has value "radio1"'
      And I click on text 'Radio two has value "radio2". When checked, it will uncheck Radio one.'

  Scenario: Select option
    Given I visit "https://example.cypress.io/commands/actions"
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
    When I find element by placeholder text "Password"
      And I type "password"
      And I clear

  Scenario: Blur
    Given I visit "https://example.cypress.io/commands/actions"
      And I find element by text "Full Name"
      And I type "About to blur"
      And I blur

  Scenario: Visible text
    Given I visit "https://example.cypress.io/commands/actions"
    Then I do not see visible text "I'm Here"
    When I find element by text "I'm Here"
    Then I see element is not visible

  Scenario: Scroll
    Given I visit "https://example.cypress.io/commands/actions"
      And I scroll window to 0px and 500px
      And I scroll window to "bottom-right"
      And I scroll window to "center"
      And I scroll window to "top-left"
    When I find button by text "I'm Here"
    Then I see element is not visible
    When I scroll into view
    Then I see element is visible

  Scenario: Get nth element
    Given I visit "https://example.cypress.io/commands/aliasing"
    When I find buttons by text "Change"
      And I get first element
      And I click
    When I find buttons by text "Change"
      And I get 2nd element
      And I click
    When I find buttons by text "Change"
      And I get 3rd element
      And I click
    When I find buttons by text "Change"
      And I get last element
      And I click
    When I find links by text "cypress"
      And I get 1st element
      And I click
    Then I see URL "https://example.cypress.io/"

  Scenario: Count elements length
    Given I visit "https://example.cypress.io/commands/aliasing"
    When I find buttons by text "Get Comment"
    Then I count 1 element
    When I find buttons by text "Change"
    Then I count 4 elements

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

  Scenario: Focus on element
    Given I visit "https://example.cypress.io/commands/traversal"
    When I get element by display value "Submit"
      And I focus
      And I get focused element
    Then I see element has attribute "type"
      And I get focused element
      And I see element attribute "type" equals "submit"

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

  Scenario: Get children and assert textarea value
    Given I visit "https://example.cypress.io/commands/misc"
    When I find form
      And I get children
      And I get last element
      And I click
      And I type "children"
    Then I see textarea value "children"
      And I see textarea value contains "child"

  Scenario: Assert input value
    Given I visit "https://example.cypress.io/commands/misc"
    When I find element by label text "Name"
      And I type "John Smith"
    Then I see input value "John Smith"
      And I see input value contains "John"
    When I find input by label text "Name"
    Then I see value "John Smith"

  Scenario: Timers
    Given I visit "https://example.cypress.io/commands/spies-stubs-clocks"
    When I use fake timers
      And I set system time to 1234567890000
      And I click on text "Click for current time!"
    Then I see text "1234567890"
    When I reload the page
      And I set system time to "2020-02-02"
      And I click on text "Click for current time!"
    Then I see text "1580601600"
    When I advance timers by 300 milliseconds
      And I advance timers by 1 millisecond
      And I advance timers by 3 seconds
      And I advance timers by 1 second
      And I use real timers
      And I click on text "Click for current time!"
    Then I do not see text "15806016000"

  Scenario: Intercept network requests
    Given I visit "https://example.cypress.io/commands/network-requests"
    When I intercept URL "/comments/1" and stub body '{"body":"Test 1"}'
      And I click on button "Get Comment"
    Then I see text "Test 1"
    When I intercept URL "/comments/1"
      | auth | {"username":"user","password":"pass"} |
      | body | {"body":"Test 2"} |
      | headers | {"X-Requested-With":"exampleClient"} |
      | hostname | localhost |
      | https | true |
      | method | GET |
      | middleware | false |
      | path | /api/commands/intercept?foo=bar |
      | pathname | /api/commands/intercept |
      | port | 8080 |
      | query | {"foo":"bar"} |
      | resourceType | fetch |
      | times | 1 |
      And I click on button "Get Comment"
    Then I see text "Test 2"

  Scenario: Set environment variable
    Given I visit "https://example.cypress.io/cypress-api"
    When I set environment variable "api_server" to "http://localhost:8888/v2/"
