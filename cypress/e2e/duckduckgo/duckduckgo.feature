Feature: DuckDuckGo
  Scenario: Title
    Given I visit "https://duckduckgo.com/"
    When I find elements by title "Learn about DuckDuckGo"
    Then I count 1 element

  Scenario: Search
    Given I visit "https://duckduckgo.com/"
    When I find element by label text "Search with DuckDuckGo"
      And I type "news{selectAll}{backspace}"
      And I type "news"
      And I find button by text "Search"
      And I trigger event "click"
