Feature: JSONPlaceholder
  Scenario: GET response body
    Given I make a "GET" request to "https://jsonplaceholder.typicode.com/todos/1"
    Then I see response status 200
      And I see response body '{"userId":1,"id":1,"title":"delectus aut autem","completed":false}'
      And I see response body contains '{"id":1,"userId":1}'
