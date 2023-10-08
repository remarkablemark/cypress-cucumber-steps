Feature: Textarea
  Scenario: Find textarea by display value
    Given I visit "https://remarkablemark.org/katamari-hack/"
    When I get element by display value "javascript:(function(k,h){k=document;h=k.createElement('script');h.src='https://remarkabl.org/katamari-hack/js/kh.js';k.body.appendChild(h)})()"
      And I set value "test"
    When I find textarea by display value "test"
      And I set value "Hello, world!"

  Scenario: Find textarea by placeholder
    Given I visit "https://remarkablemark.org/mdtocs/"
    When I find textareas by placeholder text "Markdown"
      And I type "# foo"
    Then I count 1 element
    When I find textarea by placeholder text "Markdown"
    Then I see textarea value "# foo"
