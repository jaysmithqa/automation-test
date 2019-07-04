Feature: Wao studio on Google search
  As an internet user
  I want to login find wao studio as result in google.com

  Scenario: See wao studio on result page of Google search.
    When I visited "https://google.com"
    Then I input "wao studio"
    Then I click button "Tìm với Google"
    Then I will see "Wao Studio"
    
