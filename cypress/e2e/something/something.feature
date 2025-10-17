Feature: Something
  Scenario: See document title
    Given I visit "https://something.com/"
    Then I see document title "Something."
      | log | true |
      | timeout | 0 |
      And I see document title contains "Something"
        | log | true |
        | timeout | 0 |

  Scenario: Reload and assert URL
    Given I visit "https://something.com/"
      And I reload the page
      And I wait 1 millisecond
    Then I see URL "https://something.com/"
      And I see URL contains "something"
    Then I do not see URL "https://something.com/foo"
      And I do not see URL contains "foo"

  Scenario: Location
    Given I visit "https://something.com/?key=value#hash"
    Then I see location
      | hash | #hash |
      | host | something.com |
      | hostname | something.com |
      | href | https://something.com/?key=value#hash |
      | origin | https://something.com |
      | pathname | / |
      | port | |
      | protocol | https: |
      | search | ?key=value |

  Scenario: Hash
    Given I visit "https://something.com/#foobar"
    Then I see hash "#foobar"
      And I see hash contains "bar"

  Scenario: Search
    Given I visit "https://something.com/?key=value"
    Then I see search "?key=value"
      And I see search contains "key=value"

  Scenario: Viewport
    Given I visit "https://something.com/"
    When I set viewport to "iphone-6"
      And I set viewport to "ipad-mini" and "landscape"
      And I set viewport to 800px by 600px

  Scenario: Get selector
    Given I visit "https://something.com/"
    When I get element by selector "body"
    Then I count 1 element

  Scenario: Screenshot
    Given I visit "https://something.com/"
    Then I screenshot
      And I screenshot "path/to/screenshot"

  Scenario: Log
    Then I log "Hello, world!"

  Scenario: Cypress config
    When I set Cypress config "defaultCommandTimeout" to "10000"
      And I set Cypress config
        | defaultCommandTimeout | 10000 |
