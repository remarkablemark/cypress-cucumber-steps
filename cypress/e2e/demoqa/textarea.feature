Feature: Textarea
  Scenario: Find textarea by placeholder
    Given I visit "https://demoqa.com/text-box"
    When I find textareas by placeholder text "Current Address"
    Then I count 1 element
