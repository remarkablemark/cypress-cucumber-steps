Feature: Cypress actions form
  Scenario: Find and submit form
    Given I visit "https://example.cypress.io/commands/actions"
    When I find form
      And I get 5th element
      And I submit
    Then I see text "Your form has been submitted!"

  Scenario: Find closest element
    Given I visit "https://example.cypress.io/commands/actions"
    When I find element by label text "Coupon Code"
      And I find closest element "form"
      And I submit
    Then I see text "Your form has been submitted!"
