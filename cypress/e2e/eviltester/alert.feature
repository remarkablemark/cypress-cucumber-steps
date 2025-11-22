Feature: Alert
  Scenario: Show alert
    Given I visit "https://testpages.eviltester.com/pages/basics/alerts-javascript/"
    When I click on button "Show alert box"
    Then I see text "You triggered and handled the alert dialog"

  Scenario: Show confirm
    Given I visit "https://testpages.eviltester.com/pages/basics/alerts-javascript/"
    When I click on button "Show confirm box"
    Then I see text "You clicked OK, confirm returned true."
