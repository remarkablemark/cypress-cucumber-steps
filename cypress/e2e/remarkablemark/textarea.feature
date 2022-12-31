Feature: Textarea
  Scenario: Find textarea
    Given I visit "https://remarkablemark.org/katamari-hack/"
    When I get element by display value "javascript:(function(k,h){k=document;h=k.createElement('script');h.src='https://remarkabl.org/katamari-hack/js/kh.js';k.body.appendChild(h)})()"
      And I set value "test"
    When I find textarea by display value "test"
      And I set value "Hello, world!"
