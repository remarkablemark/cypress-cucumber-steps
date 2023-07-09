Feature: Google
  Scenario: Type in title
    Given I do not fail on uncaught exception
    When I visit "https://www.google.com/"
      And I find element by title "Search"
      And I type "title{selectAll}{backspace}"
      And I type "title{enter}"

  Scenario: Visit does not fail on status code
    Given I visit "https://www.google.com/404"
      | failOnStatusCode | false |
    Then I see text "404"
