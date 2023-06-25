Feature: Google
  Scenario: Type in title
    Given I do not fail on uncaught exception
    When I visit "https://www.google.com/"
      And I find element by title "Search"
      And I type "title{selectAll}{backspace}"
      And I type "title{enter}"
