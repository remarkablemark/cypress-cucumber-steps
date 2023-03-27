Feature: Cypress todo
  Scenario: Displays two todo items by default
    Given I visit "https://example.cypress.io/todo"
    Then I see heading "todos"
      And I see label "Pay electric bill"
      And I see label "Walk the dog"
      And I see text "2 items left"

  Scenario: Can add new todo items
    Given I visit "https://example.cypress.io/todo"
    When I find element by placeholder text "What needs to be done?"
      And I type "Feed the cat"
      And I type "{enter}"
    Then I see label "Feed the cat"
      And I see text "3 items left"

  Scenario: Can check off an item as completed
    Given I visit "https://example.cypress.io/todo"
    When I find element by label text "Pay electric bill"
      And I find closest element ".view"
      And I find element by selector "input[type='checkbox']"
      And I click
    Then I see text "1 item left"

  Scenario: With a checked task, can filter and delete tasks
    Given I visit "https://example.cypress.io/todo"
    When I find element by label text "Pay electric bill"
      And I find closest element ".view"
      And I find element by selector "input[type='checkbox']"
      And I click

    # can filter for uncompleted tasks
    When I click on link "Active"
    Then I do not see text "Pay electric bill"
      And I see label "Walk the dog"

    # can filter for completed tasks
    When I click on link "Completed"
    Then I see label "Pay electric bill"
      And I do not see text "Walk the dog"

    # can delete all completed tasks
    When I click on button "Clear completed"
    Then I do not see text "Pay electric bill"
      And I do not see text "Clear completed"
