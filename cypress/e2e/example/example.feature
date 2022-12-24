Feature: Example
  Scenario: See and not see text
    When I visit "https://example.com/"
    Then I see text "Example Domain"
      And I see text "More information"
      And I do not see text "Lorem ipsum"

  Scenario: Reload and assert URL
    When I visit "https://example.com/index.html"
      And I reload the page
      And I wait 1 millisecond
    Then I see URL "https://example.com/index.html"
      And I see URL contains "/index.html"

  Scenario: Hash
    When I visit "https://example.com/#foobar"
    Then I see hash "#foobar"
      And I see hash contains "bar"

  Scenario: Screenshot
    When I visit "https://example.com/"
      And I screenshot
      And I screenshot "path/to/screenshot"

  Scenario: Cookie
    When I visit "https://example.com/"
      And I set cookie "cookie_name" to "cookie_value"

  Scenario: Log
    When I log "Hello, world!"

  Scenario: Viewport
    When I visit "https://example.com/"
      And I set viewport to "iphone-6"
      And I set viewport to "ipad-mini" and "landscape"
      And I set viewport to 800px by 600px
