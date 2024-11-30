Feature: Cypress spies, stubs, clocks
  Scenario: Timers
    Given I visit "https://example.cypress.io/commands/spies-stubs-clocks"
    When I use fake timers
      And I set system time to 1234567890000
      And I click on text "Click for current time!"
    Then I see text "1234567890"
    When I reload the page
      And I set system time to "2020-02-02"
      And I click on text "Click for current time!"
    Then I see text "1580601600"
    When I advance timers by 300 milliseconds
      And I advance timers by 1 millisecond
      And I advance timers by 3 seconds
      And I advance timers by 1 second
      And I use real timers
      And I click on text "Click for current time!"
    Then I do not see text "15806016000"
