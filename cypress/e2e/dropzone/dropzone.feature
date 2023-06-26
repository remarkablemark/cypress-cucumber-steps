Feature: Dropzone
  Scenario: Select file
    Given I visit "https://www.dropzone.dev/"
    When I get element by selector "input[type=file]"
      And I select file "cypress/fixtures/example.json"
        | force | true |
    Then I see text "0.2 KB"
      And I see text "example.json"

  Scenario: Drag and drop file
    Given I visit "https://www.dropzone.dev/"
    When I get element by selector "input[type=file]"
      And I select file "cypress/fixtures/example.json"
        | action | drag-drop |
        | force | true |
    Then I see text "0.2 KB"
      And I see text "example.json"
