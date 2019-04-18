Feature: Free CRM create new contact Feature

Scenario Outline:: Free CRM Login Test Scenario
Given user is already on login page
When whe title of login page is FREECRM
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user is on Home Page
Then user moves to new contacts page
Then user enters details for "<firstname>" and "<lastname>" and "<position>"
Then close Browser

Examples:
          |username|password|firstname|lastname|position|
           |vijaya1979|password|sam|wellington|manager|
            |vijaya1979|password|peter|rabbit|hr|
             |vijaya1979|password|tim|cook|ceo|
              |vijaya1979|password|neeta|ambani|director|
               |vijaya1979|password|ravi|done|employee|

