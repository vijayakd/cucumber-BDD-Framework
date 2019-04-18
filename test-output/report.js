$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/vijay/eclipse-workspace/CucumberBDDFreeCRM/src/main/java/features/newContact.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM create new contact Feature",
  "description": "",
  "id": "free-crm-create-new-contact-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": ": Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-create-new-contact-feature;:-free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
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
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user moves to new contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enters details for \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "close Browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "free-crm-create-new-contact-feature;:-free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 14,
      "id": "free-crm-create-new-contact-feature;:-free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "vijaya1979",
        "password",
        "sam",
        "wellington",
        "manager"
      ],
      "line": 15,
      "id": "free-crm-create-new-contact-feature;:-free-crm-login-test-scenario;;2"
    },
    {
      "cells": [
        "vijaya1979",
        "password",
        "peter",
        "rabbit",
        "hr"
      ],
      "line": 16,
      "id": "free-crm-create-new-contact-feature;:-free-crm-login-test-scenario;;3"
    },
    {
      "cells": [
        "vijaya1979",
        "password",
        "tim",
        "cook",
        "ceo"
      ],
      "line": 17,
      "id": "free-crm-create-new-contact-feature;:-free-crm-login-test-scenario;;4"
    },
    {
      "cells": [
        "vijaya1979",
        "password",
        "neeta",
        "ambani",
        "director"
      ],
      "line": 18,
      "id": "free-crm-create-new-contact-feature;:-free-crm-login-test-scenario;;5"
    },
    {
      "cells": [
        "vijaya1979",
        "password",
        "ravi",
        "done",
        "employee"
      ],
      "line": 19,
      "id": "free-crm-create-new-contact-feature;:-free-crm-login-test-scenario;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": ": Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-create-new-contact-feature;:-free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "user enters \"vijaya1979\" and \"password\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user moves to new contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enters details for \"sam\" and \"wellington\" and \"manager\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "close Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 6211287997,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.whe_title_of_login_page_is_FREECRM()"
});
formatter.result({
  "duration": 10354907,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vijaya1979",
      "offset": 13
    },
    {
      "val": "password",
      "offset": 30
    }
  ],
  "location": "loginStepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "duration": 3210459696,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1568058964,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 7753380,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_moves_to_new_contacts_page()"
});
formatter.result({
  "duration": 1034360291,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sam",
      "offset": 25
    },
    {
      "val": "wellington",
      "offset": 35
    },
    {
      "val": "manager",
      "offset": 52
    }
  ],
  "location": "loginStepDefinition.user_enters_details_for_and_and(String,String,String)"
});
formatter.result({
  "duration": 992243775,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.close_Browser()"
});
formatter.result({
  "duration": 668851767,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": ": Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-create-new-contact-feature;:-free-crm-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "user enters \"vijaya1979\" and \"password\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user moves to new contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enters details for \"peter\" and \"rabbit\" and \"hr\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "close Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 5509236472,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.whe_title_of_login_page_is_FREECRM()"
});
formatter.result({
  "duration": 8646535,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vijaya1979",
      "offset": 13
    },
    {
      "val": "password",
      "offset": 30
    }
  ],
  "location": "loginStepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "duration": 3164461087,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1370169995,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 95824700,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_moves_to_new_contacts_page()"
});
formatter.result({
  "duration": 844641128,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "peter",
      "offset": 25
    },
    {
      "val": "rabbit",
      "offset": 37
    },
    {
      "val": "hr",
      "offset": 50
    }
  ],
  "location": "loginStepDefinition.user_enters_details_for_and_and(String,String,String)"
});
formatter.result({
  "duration": 909294158,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.close_Browser()"
});
formatter.result({
  "duration": 635273698,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": ": Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-create-new-contact-feature;:-free-crm-login-test-scenario;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "user enters \"vijaya1979\" and \"password\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user moves to new contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enters details for \"tim\" and \"cook\" and \"ceo\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "close Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 5364073787,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.whe_title_of_login_page_is_FREECRM()"
});
formatter.result({
  "duration": 7335816,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vijaya1979",
      "offset": 13
    },
    {
      "val": "password",
      "offset": 30
    }
  ],
  "location": "loginStepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "duration": 3181174459,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1740213128,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4760458,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_moves_to_new_contacts_page()"
});
formatter.result({
  "duration": 827560253,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tim",
      "offset": 25
    },
    {
      "val": "cook",
      "offset": 35
    },
    {
      "val": "ceo",
      "offset": 46
    }
  ],
  "location": "loginStepDefinition.user_enters_details_for_and_and(String,String,String)"
});
formatter.result({
  "duration": 972177375,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.close_Browser()"
});
formatter.result({
  "duration": 622291665,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": ": Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-create-new-contact-feature;:-free-crm-login-test-scenario;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "user enters \"vijaya1979\" and \"password\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user moves to new contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enters details for \"neeta\" and \"ambani\" and \"director\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "close Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 5464899585,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.whe_title_of_login_page_is_FREECRM()"
});
formatter.result({
  "duration": 6299870,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vijaya1979",
      "offset": 13
    },
    {
      "val": "password",
      "offset": 30
    }
  ],
  "location": "loginStepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "duration": 3172203089,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1677040347,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 5353240,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_moves_to_new_contacts_page()"
});
formatter.result({
  "duration": 710546167,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "neeta",
      "offset": 25
    },
    {
      "val": "ambani",
      "offset": 37
    },
    {
      "val": "director",
      "offset": 50
    }
  ],
  "location": "loginStepDefinition.user_enters_details_for_and_and(String,String,String)"
});
formatter.result({
  "duration": 977330366,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.close_Browser()"
});
formatter.result({
  "duration": 629215037,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": ": Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-create-new-contact-feature;:-free-crm-login-test-scenario;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "user enters \"vijaya1979\" and \"password\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user moves to new contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enters details for \"ravi\" and \"done\" and \"employee\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "close Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 5354686559,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.whe_title_of_login_page_is_FREECRM()"
});
formatter.result({
  "duration": 9520347,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vijaya1979",
      "offset": 13
    },
    {
      "val": "password",
      "offset": 30
    }
  ],
  "location": "loginStepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "duration": 3186355325,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1193790127,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 8264811,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_moves_to_new_contacts_page()"
});
formatter.result({
  "duration": 667967714,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ravi",
      "offset": 25
    },
    {
      "val": "done",
      "offset": 36
    },
    {
      "val": "employee",
      "offset": 47
    }
  ],
  "location": "loginStepDefinition.user_enters_details_for_and_and(String,String,String)"
});
formatter.result({
  "duration": 935654739,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.close_Browser()"
});
formatter.result({
  "duration": 629215037,
  "status": "passed"
});
});