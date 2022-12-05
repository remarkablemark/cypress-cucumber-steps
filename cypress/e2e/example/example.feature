Feature: Example
  Scenario: Going to example site
    When I visit "https://example.com/"
    Then I see text "Example Domain"
      And I do not see text "Lorem ipsum"
    When I visit "https://example.com/index.html"
      And I reload the page
      And I wait 1 millisecond
    Then I see URL "https://example.com/index.html"
      And I see URL contains "/index.html"
