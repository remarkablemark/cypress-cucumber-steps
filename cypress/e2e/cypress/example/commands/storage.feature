Feature: Cypress storage
  Scenario: Local storage
    Given I visit "https://example.cypress.io/commands/storage"
    When I click on button "Populate localStorage and sessionStorage"
    Then I see local storage item "prop1"
      And I see local storage item "prop1" equals "red"
      And I see local storage item "prop3" contains "gen"
    When I clear local storage "prop1"
    Then I do not see local storage item "prop1"
    When I clear local storage
    Then I do not see local storage item "prop2"
    When I set local storage item "foo" to "bar"
      Then I see local storage item "foo" equals "bar"
    When I clear all local storage
    Then I do not see local storage item "foo"

  Scenario: Session storage
    Given I visit "https://example.cypress.io/commands/storage"
    When I click on button "Populate localStorage and sessionStorage"
    Then I see session storage item "prop5"
      And I see session storage item "prop5" equals "yellow"
      And I see session storage item "prop4" contains "cy"
    When I clear session storage
    Then I do not see local storage item "prop5"
