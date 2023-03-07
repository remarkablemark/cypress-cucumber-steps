Feature: Example
  Scenario: See document title
    Given I visit "https://example.com/"
    Then I see document title "Example Domain"
      And I see document title contains "Example"

  Scenario: See and not see text
    Given I visit "https://example.com/"
    Then I see text "Example Domain"
      And I see text "More information"
      And I do not see text "Lorem ipsum"

  Scenario: See and not see link
    Given I visit "https://example.com/"
    Then I see link "More information"
      And I do not see link "Lorem ipsum"

  Scenario: See attribute
    Given I visit "https://example.com/"
    When I find element by text "More information"
    Then I see element has attribute "href"
    When I find link by text "More information"
    Then I see element has attribute "href" equal to "https://www.iana.org/domains/example"
    When I find link by text "More information..."
    Then I see element has attribute "href" containing "example"

  Scenario: Reload and assert URL
    Given I visit "https://example.com/index.html"
      And I reload the page
      And I wait 1 millisecond
    Then I see URL "https://example.com/index.html"
      And I see URL contains "/index.html"

  Scenario: Hash
    Given I visit "https://example.com/#foobar"
    Then I see hash "#foobar"
      And I see hash contains "bar"

  Scenario: Screenshot
    Given I visit "https://example.com/"
    Then I screenshot
      And I screenshot "path/to/screenshot"

  Scenario: Cookie
    Given I visit "https://example.com/"
    When I set cookie "cookie_name" to "cookie_value"

  Scenario: Log
    Then I log "Hello, world!"

  Scenario: Viewport
    Given I visit "https://example.com/"
    When I set viewport to "iphone-6"
      And I set viewport to "ipad-mini" and "landscape"
      And I set viewport to 800px by 600px

  Scenario: Local storage
    When I clear local storage
      And I clear local storage "key"

  Scenario: Cookie
    When I clear cookie "authId"
