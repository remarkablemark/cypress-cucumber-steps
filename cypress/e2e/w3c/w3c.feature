Feature: W3C
  Scenario: Type in title
    Given I do not fail on uncaught exception
    When I visit "https://www.w3.org/"
      And I get element by title "Search"
      And I type "title{selectAll}{backspace}"
