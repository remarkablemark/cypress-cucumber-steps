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
    Then I find input by display value "Double click to edit"
    When I reload the page
      And I find element by text "Double click to edit"
      And I double-click
    Then I find input by display value "Double click to edit"
    When I reload the page
      And I find element by text "Double click to edit"
      And I double-click "top"
    Then I find input by display value "Double click to edit"

  Scenario: Right-click text
    Given I visit "https://example.cypress.io/commands/actions"
      And I right-click on text "Right click to edit"
    Then I find input by display value "Right click to edit"
    When I reload the page
      And I find element by text "Right click to edit"
      And I right-click
    Then I find input by display value "Right click to edit"
    When I reload the page
      And I find element by text "Right click to edit"
      And I right-click "top"
    Then I find input by display value "Right click to edit"

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

  Scenario: Placeholder
    Given I visit "https://example.cypress.io/commands/querying"
    When I find elements by placeholder text "Name"
    Then I count 1 element
    When I find element by placeholder text "Name"
    Then I count 1 element
    When I find inputs by placeholder text "Name"
    Then I count 1 element
    When I find input by placeholder text "Name"
    Then I count 1 element

  Scenario: Test ID
    Given I visit "https://example.cypress.io/commands/querying"
    When I find elements by test ID "test-example"
    Then I count 1 element
    When I find element by test ID "test-example"
    Then I count 1 element

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

  Scenario: Get nth element
    Given I visit "https://example.cypress.io/commands/aliasing"
    When I find buttons by text "Change"
      And I get first element
      And I click "top-right"
    Then I find buttons by text "Changed"
      And I count 1 element
    When I find buttons by text "Change"
      And I get 2nd element
      And I click "top"
    Then I find buttons by text "Changed"
      And I count 2 elements
    When I find buttons by text "Change"
      And I get 3rd element
      And I click "bottom-right"
    Then I find buttons by text "Changed"
      And I count 3 elements
    When I find buttons by text "Change"
      And I get last element
      And I click "bottom-left"
    Then I find buttons by text "Changed"
      And I count 4 elements
    When I find links by text "cypress"
      And I get 1st element
      And I click "center"

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

  Scenario: Form with textarea
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

  Scenario: Cookie
    Given I visit "https://example.cypress.io/commands/cookies"
    When I set cookie "name" to "value"
    Then I see cookie "name"
    When I clear cookie "name"
    Then I do not see cookie "name"
    When I set cookie "foo" to "bar"
    Then I see cookie "foo" has value "bar"
    When I clear cookies
    Then I do not see cookie "foo"
    When I click on button "Set Cookie"
    Then I see cookie "token" contains value "123"
    When I clear all cookies
    Then I do not see cookie "test"

  Scenario: Local storage
    Given I visit "https://example.cypress.io/commands/storage"
    When I click on button "Populate localStorage and sessionStorage"
    Then I see local storage item "prop1"
    When I clear local storage "prop1"
    Then I do not see local storage item "prop1"
    When I clear local storage
    Then I do not see local storage item "prop2"
    When I click on button "Populate localStorage and sessionStorage"
      And I clear all local storage
    Then I do not see local storage item "prop3"
