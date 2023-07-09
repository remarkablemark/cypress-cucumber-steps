Feature: httpbin
  Scenario: POST
    Given I make a "POST" request to "https://httpbin.org/post"
      | body | {"foo":"bar"} |
    Then I see response status 200
