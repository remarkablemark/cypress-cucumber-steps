Feature: Google
  Scenario: Title
    Given I do not fail on uncaught exception
    When I visit "https://www.google.com/"
      And I find element by title "Search"
      And I type "title{enter}"

  Scenario: Name
    Given I do not fail on uncaught exception
    When I visit "https://www.google.com/"
      And I find elements by name "q"
      And I type "name{selectAll}{backspace}"
      And I find element by name "q"
      And I type "name{enter}"

  Scenario: Visit does not fail on status code
    Given I visit "https://www.google.com/404"
      | failOnStatusCode | false |
    Then I see text "404"
