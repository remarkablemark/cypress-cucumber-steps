Feature: Google
  Scenario: Title
    Given I visit "https://www.google.com/"
    When I find elements by title "Search"
    Then I count 1 element
    When I find element by title "Search"
      And I type "title{selectAll}{backspace}"
      And I type "title"
      And I find button by text "Google Search"
      And I trigger event "click"

  Scenario: Name
    Given I visit "https://www.google.com/"
    When I find elements by name "q"
    Then I count 1 element
    When I find element by name "q"
    Then I count 1 element

  Scenario: Button
    Given I visit "https://www.google.com/"
    Then I see button "I'm Feeling Lucky"
      And I do not see button 'I\'m Not Feeling Lucky'

  Scenario: Visit does not fail on status code
    Given I visit "https://www.google.com/404"
      | failOnStatusCode | false |
    Then I see text "404"
