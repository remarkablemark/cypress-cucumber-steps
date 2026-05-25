Feature: Form
  Scenario: Find element by display value
    Given I visit "https://testpages.eviltester.com/pages/forms/html-form/"
    When I get element by display value "Comments..."
      And I type "..."
    Then I see textarea value "Comments......"
