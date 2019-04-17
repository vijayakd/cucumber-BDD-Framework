$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/vijay/eclipse-workspace/CucumberBDDFreeCRM/src/main/java/features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "whe title of login page is FREECRM",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 6710209460,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.whe_title_of_login_page_is_FREECRM()"
});
formatter.result({
  "duration": 29622070,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_enters_username_and_password()"
});
formatter.result({
  "duration": 3274720092,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1681104510,
  "status": "passed"
});
});