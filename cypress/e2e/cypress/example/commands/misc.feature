Feature: Cypress misc
  Scenario: Form with textarea
    Given I visit "https://example.cypress.io/commands/misc"
    When I find form
      And I get children
      And I get last element
      And I click
      And I type "children"
    Then I see textarea value "children"
      And I see textarea value contains "child"

  Scenario: Assert input value
    Given I visit "https://example.cypress.io/commands/misc"
    When I find element by label text "Name"
      And I type "John Smith"
    Then I see input value "John Smith"
      And I see input value contains "John"
    When I find input by label text "Name"
    Then I see value "John Smith"
