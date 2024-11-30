Feature: Cypress aliasing
  Scenario: Get nth element
    Given I visit "https://example.cypress.io/commands/aliasing"
    When I find buttons by text "Change"
      And I get first element
      And I click "top-right"
    Then I find buttons by text "Changed"
      And I count 1 element
    When I find buttons by text "Change"
      And I get 2nd element
      And I click "top"
    Then I find buttons by text "Changed"
      And I count 2 elements
    When I find buttons by text "Change"
      And I get 3rd element
      And I click "bottom-right"
    Then I find buttons by text "Changed"
      And I count 3 elements
    When I find buttons by text "Change"
      And I get last element
      And I click "bottom-left"
    Then I find buttons by text "Changed"
      And I count 4 elements
    When I find links by text "cypress"
      And I get 1st element
      And I click "center"

  Scenario: Count elements length
    Given I visit "https://example.cypress.io/commands/aliasing"
    When I find buttons by text "Get Comment"
    Then I count 1 element
    When I find buttons by text "Change"
    Then I count 4 elements
