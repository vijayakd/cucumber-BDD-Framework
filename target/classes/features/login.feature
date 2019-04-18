Feature: Free CRM Login Feature

# ACHIEVING DATA DRIVEN TESTING WITHOUT EXAMPLES KEYWORD
#Scenario: Free CRM Login Test Scenario
#Given user is already on login page
#When whe title of login page is FREECRM
#Then user enters "vijaya1979" and "password"
#Then user clicks on login button
#Then user is on Home Page
#Then close Browser



# ACHIEVING DATA DRIVEN TESTING WITH EXAMPLES KEYWORD

Scenario Outline:: Free CRM Login Test Scenario
Given user is already on login page
When whe title of login page is FREECRM
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user is on Home Page
Then close Browser

Examples:
          | username   | password |
          | vijaya1979 | password |
          | naveenk    | test@123 |
          
