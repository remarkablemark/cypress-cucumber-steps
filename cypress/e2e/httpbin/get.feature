Feature: httpbin
  Scenario: GET
    Given I make a "GET" request to "https://httpbin.org/get?foo=bar"
    Then I see response status 200
