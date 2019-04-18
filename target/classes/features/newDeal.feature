Feature: Free CRM create new deals Feature

Scenario: Free CRM Login Test Scenario
Given user is already on login page
When whe title of login page is FREECRM
Then user enters username and password
      |vijaya1979|password|
Then user clicks on login button
Then user is on Home Page
Then user moves to new deals page
Then user enters new deals
  | test deal | 1000 | 50 | 10 |
Then close Browser
