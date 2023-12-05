Feature: httpbin
  Scenario: Loading spinner
    Given I visit "https://httpbin.org/"
    When I get element by selector ".loading"
    Then I see element is not visible
