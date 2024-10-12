Feature: Confirm
  Scenario: OK confirm
    Given I visit "https://testpages.eviltester.com/styled/alerts/alert-test.html"
    When I click on button "Show confirm box"
    Then I see text "You clicked OK, confirm returned true."
