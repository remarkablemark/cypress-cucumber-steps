Feature: Checkbox
  Scenario: Check and uncheck checkbox input
    Given I visit "https://testpages.eviltester.com/pages/input-elements/basic-inputs/"
    When I check input "Checkbox"
      | pseudoSelector | visible |
    Then I see text "checked: true"
    When I find input by label text "Checkbox"
      | pseudoSelector | visible |
      And I check
    Then I see text "checked: true"
    When I uncheck
    Then I see text "checked: false"
