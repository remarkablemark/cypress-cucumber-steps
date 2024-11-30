Feature: Cypress network requests
  Scenario: Intercept network requests
    Given I visit "https://example.cypress.io/commands/network-requests"
    When I intercept URL "/comments/1" and stub body '{"body":"Test 1"}'
      And I click on button "Get Comment"
    Then I see text "Test 1"
    When I intercept URL "/comments/1"
      | auth | {"username":"user","password":"pass"} |
      | body | {"body":"Test 2"} |
      | headers | {"X-Requested-With":"exampleClient"} |
      | hostname | localhost |
      | https | true |
      | method | GET |
      | middleware | false |
      | path | /api/commands/intercept?foo=bar |
      | pathname | /api/commands/intercept |
      | port | 8080 |
      | query | {"foo":"bar"} |
      | resourceType | fetch |
      | times | 1 |
      And I click on button "Get Comment"
    Then I see text "Test 2"
