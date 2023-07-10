Feature: httpbin
  Scenario: GET response status
    Given I make a "GET" request to "https://httpbin.org/get?foo=bar"
    Then I see response status 200

  Scenario: GET response body
    Given I make a "GET" request to "https://httpbin.org/base64/SFRUUEJJTiBpcyBhd2Vzb21l"
    Then I see response body "HTTPBIN is awesome"
