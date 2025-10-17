Feature: Cypress example
  Scenario: Click and see text
    Given I visit "https://example.cypress.io/"
    Then I see text "Kitchen Sink"
      And I do not see text "cy.get()"
    When I click on text "get"
    Then I see text "cy.get()"

  Scenario: Hidden link
    Given I visit "https://example.cypress.io/"
    Then I see link "Cypress.io"
    When I find link by text "Cypress.io"
      And I set attribute "style" to "visibility: hidden"
    Then I do not see link "Cypress.io"

  Scenario: Heading
    Given I visit "https://example.cypress.io/"
    Then I see heading "Kitchen Sink"
    When I find headings by text "Kitchen Sink"
    Then I count 1 element
    When I find heading by text "Kitchen Sink"
    Then I count 1 element
      And I do not see heading "Foo"

  Scenario: See attribute
    Given I visit "https://example.cypress.io/"
    When I find element by text "Cypress.io"
    Then I see element has attribute "href"
      And I see element attribute "href" equals "https://www.cypress.io"
    When I find link by text "docs.cypress.io"
    Then I see element attribute "href" contains "docs.cypress.io"
