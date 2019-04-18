$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/vijay/eclipse-workspace/CucumberBDDFreeCRM/src/main/java/features/newDeal.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM create new deals Feature",
  "description": "",
  "id": "free-crm-create-new-deals-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-create-new-deals-feature;free-crm-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "whe title of login page is FREECRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "vijaya1979",
        "password"
      ],
      "line": 7
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to new deals page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters new deals",
  "rows": [
    {
      "cells": [
        "test deal",
        "1000",
        "50",
        "10"
      ],
      "line": 12
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealsStepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 7220170052,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.whe_title_of_login_page_is_FREECRM()"
});
formatter.result({
  "duration": 51099263,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 955413371,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 2043291839,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 12659474,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_moves_to_new_deals_page()"
});
formatter.result({
  "duration": 1215523941,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_enters_new_deals(DataTable)"
});
formatter.result({
  "duration": 473468182,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.close_Browser()"
});
formatter.result({
  "duration": 729201156,
  "status": "passed"
});
});