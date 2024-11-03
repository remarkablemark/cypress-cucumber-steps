Feature: Checkbox
  Scenario: Check and uncheck checkbox input
    Given I visit "https://testpages.eviltester.com/styled/reference/input.html"
      And I click on button "Toggle Event Info Display"
    When I check input "Checkbox"
      | pseudoSelector | visible |
    Then I see text "Checked: true"
    When I find input by label text "Checkbox"
      | pseudoSelector | visible |
      And I check
    Then I see text "Checked: true"
    When I uncheck
    Then I see text "Checked: false"
