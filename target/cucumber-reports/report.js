$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/techGlobal.feature");
formatter.feature({
  "name": "Validating Pagination Page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on \"https://techglobal-training.netlify.app/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "PaginationPageSteps.user_is_on_https_techGlobal_training_netlify_app(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user moves to \"Practices\" header dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "PaginationPageSteps.user_moves_to_Practices_header_dropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Frontend Testing\" header dropdown option",
  "keyword": "And "
});
formatter.match({
  "location": "PaginationPageSteps.user_clicks_on_option(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to \"https://techglobal-training.netlify.app/frontend\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PaginationPageSteps.user_should_be_navigated_to_according_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Pagination\" card",
  "keyword": "And "
});
formatter.match({
  "location": "PaginationPageSteps.user_clicks_on_Pagination_card(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to \"https://techglobal-training.netlify.app/frontend/pagination\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PaginationPageSteps.user_should_be_navigated_to_according_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the main content of the Pagination Page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "user should see \"Pagination\" heading",
  "keyword": "And "
});
formatter.match({
  "location": "PaginationPageSteps.user_should_see_according_heading(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"World City Populations 2022\" heading",
  "keyword": "And "
});
formatter.match({
  "location": "PaginationPageSteps.user_should_see_according_heading(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"What are the most populated cities in the world? Here is a list of the top five most populated cities in the world:\" paragraph",
  "keyword": "And "
});
formatter.match({
  "location": "PaginationPageSteps.user_should_see_paragraph(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on \"https://techglobal-training.netlify.app/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "PaginationPageSteps.user_is_on_https_techGlobal_training_netlify_app(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user moves to \"Practices\" header dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "PaginationPageSteps.user_moves_to_Practices_header_dropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Frontend Testing\" header dropdown option",
  "keyword": "And "
});
formatter.match({
  "location": "PaginationPageSteps.user_clicks_on_option(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to \"https://techglobal-training.netlify.app/frontend\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PaginationPageSteps.user_should_be_navigated_to_according_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Pagination\" card",
  "keyword": "And "
});
formatter.match({
  "location": "PaginationPageSteps.user_clicks_on_Pagination_card(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to \"https://techglobal-training.netlify.app/frontend/pagination\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PaginationPageSteps.user_should_be_navigated_to_according_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the Pagination Page Next/Previous buttons",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "user should see \"Previous\" button is disabled",
  "keyword": "And "
});
formatter.match({
  "location": "PaginationPageSteps.userShouldSeeButtonIsDisabled(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Next\" button is enabled",
  "keyword": "And "
});
formatter.match({
  "location": "PaginationPageSteps.userShouldSeeButtonIsEnabled(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Next\" button",
  "keyword": "When "
});
formatter.match({
  "location": "PaginationPageSteps.userClicksOnButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Previous\" button is enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "PaginationPageSteps.userShouldSeeButtonIsEnabled(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Next\" button till it becomes disabled",
  "keyword": "When "
});
formatter.match({
  "location": "PaginationPageSteps.userClicksOnButtonTillItBecomesDisabled(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Previous\" button is enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "PaginationPageSteps.userShouldSeeButtonIsEnabled(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Next\" button is disabled",
  "keyword": "And "
});
formatter.match({
  "location": "PaginationPageSteps.userShouldSeeButtonIsDisabled(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on \"https://techglobal-training.netlify.app/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "PaginationPageSteps.user_is_on_https_techGlobal_training_netlify_app(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user moves to \"Practices\" header dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "PaginationPageSteps.user_moves_to_Practices_header_dropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Frontend Testing\" header dropdown option",
  "keyword": "And "
});
formatter.match({
  "location": "PaginationPageSteps.user_clicks_on_option(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to \"https://techglobal-training.netlify.app/frontend\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PaginationPageSteps.user_should_be_navigated_to_according_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Pagination\" card",
  "keyword": "And "
});
formatter.match({
  "location": "PaginationPageSteps.user_clicks_on_Pagination_card(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to \"https://techglobal-training.netlify.app/frontend/pagination\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PaginationPageSteps.user_should_be_navigated_to_according_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the Pagination Page cities content",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "user should see \"Tokyo\" city with info below and an image",
  "rows": [
    {
      "cells": [
        "City: Tokyo",
        "Country: Japan",
        "Population: 37,435,191"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PaginationPageSteps.userShouldSeeCityWithInfoBelowAndAnImage(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Delhi\" city with info below and an image",
  "rows": [
    {
      "cells": [
        "City: Delhi",
        "Country: India",
        "Population: 29,399,141"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PaginationPageSteps.userShouldSeeCityWithInfoBelowAndAnImage(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Shangai\" city with info below and an image",
  "rows": [
    {
      "cells": [
        "City: Shangai",
        "Country: China",
        "Population: 26,317,104"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PaginationPageSteps.userShouldSeeCityWithInfoBelowAndAnImage(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Sao Paulo\" city with info below and an image",
  "rows": [
    {
      "cells": [
        "City: Sao Paulo",
        "Country: Brasil",
        "Population: 21,846,507"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PaginationPageSteps.userShouldSeeCityWithInfoBelowAndAnImage(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Mexico City\" city with info below and an image",
  "rows": [
    {
      "cells": [
        "City: Mexico City",
        "Country: Mexico",
        "Population: 21,671,908"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PaginationPageSteps.userShouldSeeCityWithInfoBelowAndAnImage(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});