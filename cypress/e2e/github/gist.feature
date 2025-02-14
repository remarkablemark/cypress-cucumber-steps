Feature: GitHub gist
  Scenario: Alt text
    Given I set viewport to "macbook-16"
      And I visit "https://gist.github.com/remarkablemark/feff40b0a522f0c41c4eff0b77ea1d47"
    When I find elements by alt text "tulip.jpg"
    Then I count 1 element
    When I find element by alt text "tulip.jpg"
    Then I count 1 element
    When I find images by alt text "tulip.jpg"
    Then I count 1 element
    When I find image by alt text "tulip.jpg"
    Then I count 1 element

  Scenario: Go back and forward
    Given I visit "https://gist.github.com/remarkablemark/feff40b0a522f0c41c4eff0b77ea1d47/forks"
      And I click on link "Stars"
    Then I see URL "https://gist.github.com/remarkablemark/feff40b0a522f0c41c4eff0b77ea1d47/stargazers"
      | decode | true |
      | timeout | 4000 |
    When I go back
    Then I see URL contains "/forks"
    When I go forward
    Then I see URL contains "/stargazers"
    When I go -1
    Then I see URL contains "/forks"

  Scenario: Set Cypress config and find and click aria-label
    Given I visit "https://gist.github.com/remarkablemark"
      And I set Cypress config "baseUrl" to "null"
      And I set Cypress config "defaultCommandTimeout" to "10000"
      And I set viewport to "iphone-x"
      And I wait 0 seconds
    Then I see label "Toggle navigation"
    When I find element by label text "Toggle navigation"
      And I click on label "Toggle navigation"
    Then I see text "All gists"
