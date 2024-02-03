Feature: GitHub
  Scenario: Pathname
    Given I visit "https://github.com/remarkablemark/cypress-cucumber-steps"
    Then I see pathname "/remarkablemark/cypress-cucumber-steps"
      And I see pathname contains "cypress-cucumber-steps"
