Feature: Remarkablemark
  Scenario: Location
    Given I visit "https://remarkablemark.org/?key=value#hash"
    Then I see location
      | hash | #hash |
      | host | remarkablemark.org |
      | hostname | remarkablemark.org |
      | href | https://remarkablemark.org/?key=value#hash |
      | origin | https://remarkablemark.org |
      | pathname | / |
      | port | |
      | protocol | https: |
      | search | ?key=value |

  Scenario: Hash
    Given I visit "https://remarkablemark.org/#foobar"
    Then I see hash "#foobar"
      And I see hash contains "bar"

  Scenario: Search
    Given I visit "https://remarkablemark.org/?key=value"
    Then I see search "?key=value"
      And I see search contains "key=value"

  Scenario: Viewport
    Given I visit "https://remarkablemark.org/"
    When I set viewport to "iphone-6"
      And I set viewport to "ipad-mini" and "landscape"
      And I set viewport to 800px by 600px

  Scenario: Get selector
    Given I visit "https://remarkablemark.org/"
    When I get element by selector "body"
    Then I count 1 element

  Scenario: Screenshot
    Given I visit "https://remarkablemark.org/"
    Then I screenshot
      And I screenshot "path/to/screenshot"

  Scenario: Log
    Then I log "Hello, world!"

  Scenario: Cypress config
    When I set Cypress config "defaultCommandTimeout" to "10000"
      And I set Cypress config
        | defaultCommandTimeout | 10000 |
