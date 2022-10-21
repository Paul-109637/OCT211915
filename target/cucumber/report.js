$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("featurefiles/AiCreateNewJob.feature");
formatter.feature({
  "line": 2,
  "name": "Create New Job Feature",
  "description": "Create new job with basic details",
  "id": "create-new-job-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Check Recruiter AI Create New Job functionality",
  "description": "",
  "id": "create-new-job-feature;check-recruiter-ai-create-new-job-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@CreateNewJob"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user launch application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on Jobs Menu",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "select create new job section",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on Start button of form",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click on Add New Office button to add new office Address",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "add Job Title",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "select Job Status",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Select Country Location",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Select City location",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "add skills",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "add Qualification",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "add job type",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "select minimum experience",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "select maximum experience",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "choose Employment type",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "add no of vacancies",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "add Job Description",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "add Job Requirements",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "choose office location",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinitions.user_launch_application()"
});
formatter.result({
  "duration": 12880238700,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinitions.user_enter_valid_credentials()"
});
formatter.result({
  "duration": 10773621700,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinitions.user_clicks_on_Jobs_Menu()"
});
formatter.result({
  "duration": 606939500,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinitions.select_create_new_job_section()"
});
formatter.result({
  "duration": 2400721700,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinitions.click_on_Start_button_of_form()"
});
formatter.result({
  "duration": 3482713000,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinitions.click_on_Add_New_Office_button_to_add_new_office_Address()"
});
formatter.result({
  "duration": 38554282200,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d106.0.5249.119)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027PAUL\u0027, ip: \u0027192.168.1.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 106.0.5249.119, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\paul\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:61815}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 326d3de97ce1c9be3b8cfcca9f40746a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat stepdefinitions.Stepdefinitions.click_on_Add_New_Office_button_to_add_new_office_Address(Stepdefinitions.java:111)\r\n\tat ✽.And click on Add New Office button to add new office Address(featurefiles/AiCreateNewJob.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Stepdefinitions.add_Job_Title()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinitions.select_Job_Status()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinitions.select_Country_Location()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinitions.select_City_location()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinitions.add_skills()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinitions.add_Qualification()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinitions.add_job_type()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinitions.select_minimum_experience()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinitions.select_maximum_experience()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinitions.choose_Employment_type()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinitions.add_no_of_vacancies()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinitions.add_Job_Description()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinitions.add_Job_Requirements()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinitions.choose_office_location()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("featurefiles/AiLogin.feature");
formatter.feature({
  "line": 2,
  "name": "Login Feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "Check Recruiter AI Login functionality",
  "description": "",
  "id": "login-feature;check-recruiter-ai-login-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@RecruiterLogin"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user launch application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user enter valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinitions.user_launch_application()"
});
formatter.result({
  "duration": 11703648900,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinitions.user_enter_valid_credentials()"
});
formatter.result({
  "duration": 10612286100,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinitions.close_Browser()"
});
formatter.result({
  "duration": 2540221800,
  "status": "passed"
});
formatter.uri("featurefiles/AiLogout.feature");
formatter.feature({
  "line": 2,
  "name": "Logout Feature",
  "description": "",
  "id": "logout-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Check Recruiter AI Logout functionality",
  "description": "",
  "id": "logout-feature;check-recruiter-ai-logout-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@RecruiterLogout"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user launch application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user click on logout",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinitions.user_launch_application()"
});
formatter.result({
  "duration": 12837883500,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinitions.user_enter_valid_credentials()"
});
formatter.result({
  "duration": 10753849100,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinitions.user_click_on_logout()"
});
formatter.result({
  "duration": 7203726700,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinitions.close_Browser()"
});
formatter.result({
  "duration": 2808895800,
  "status": "passed"
});
formatter.uri("featurefiles/SkillsandEdu.feature");
formatter.feature({
  "line": 2,
  "name": "Skills and Education",
  "description": "",
  "id": "skills-and-education",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Check Recruiter AI Add skills and Education functionality",
  "description": "",
  "id": "skills-and-education;check-recruiter-ai-add-skills-and-education-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@SkillsandEducation"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user launch application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on Jobs Menu",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "select create new job section",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on Start button of form",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "add skills and Education",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "add industry field",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "add keyword field",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "add Education",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinitions.user_launch_application()"
});
formatter.result({
  "duration": 12507177500,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinitions.user_enter_valid_credentials()"
});
formatter.result({
  "duration": 10736973400,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinitions.user_clicks_on_Jobs_Menu()"
});
formatter.result({
  "duration": 392805800,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinitions.select_create_new_job_section()"
});
formatter.result({
  "duration": 2236937100,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinitions.click_on_Start_button_of_form()"
});
formatter.result({
  "duration": 3731563100,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinitions.add_skills_and_Education()"
});
formatter.result({
  "duration": 191606600,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinitions.add_industry_field()"
});
formatter.result({
  "duration": 7171777700,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinitions.add_keyword_field()"
});
formatter.result({
  "duration": 16292335800,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using xpath\u003d//input[@id\u003d\u0027react-select-14-input\u0027]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027PAUL\u0027, ip: \u0027192.168.1.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepdefinitions.Stepdefinitions.add_keyword_field(Stepdefinitions.java:292)\r\n\tat ✽.And add keyword field(featurefiles/SkillsandEdu.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Stepdefinitions.add_Education()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("featurefiles/additionalinfo.feature");
formatter.feature({
  "line": 2,
  "name": "Additional Information",
  "description": "additional information of New Job",
  "id": "additional-information",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Check Additional Information section of Jobs menu",
  "description": "",
  "id": "additional-information;check-additional-information-section-of-jobs-menu",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@AdditionalInfo"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user launch application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on Jobs Menu",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "select create new job section",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on Start button of form",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click on Additional Information",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "add Work Location",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "add working Hours",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "enter minimal Annual Salary",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "enter maximum Annual Salary",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinitions.user_launch_application()"
});
formatter.result({
  "duration": 6832189400,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d106.0.5249.119)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027PAUL\u0027, ip: \u0027192.168.1.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 106.0.5249.119, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\paul\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:62355}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 1eac0f78c880d64f83089b04be741e18\n*** Element info: {Using\u003did, value\u003dhs-eu-confirmation-button}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepdefinitions.Stepdefinitions.user_launch_application(Stepdefinitions.java:32)\r\n\tat ✽.Given user launch application(featurefiles/additionalinfo.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Stepdefinitions.user_enter_valid_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinitions.user_clicks_on_Jobs_Menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinitions.select_create_new_job_section()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinitions.click_on_Start_button_of_form()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinitions.click_on_Additional_Information()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinitions.add_Work_Location()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinitions.add_working_Hours()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinitions.enter_minimal_Annual_Salary()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinitions.enter_maximum_Annual_Salary()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("featurefiles/prescreeningQ.feature");
formatter.feature({
  "line": 2,
  "name": "pre screening Questions",
  "description": "",
  "id": "pre-screening-questions",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Check Recruiter able to add pre screening questions",
  "description": "",
  "id": "pre-screening-questions;check-recruiter-able-to-add-pre-screening-questions",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@PreScreeningQuestions"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user launch application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on Jobs Menu",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "select create new job section",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on Start button of form",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "add pre screening questions",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click on Add Question button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "enter Question",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "choose the Category of Question",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "click on Submit Button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Select questions from Questions List",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click on Add Selected",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinitions.user_launch_application()"
});
formatter.result({
  "duration": 12607668500,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinitions.user_enter_valid_credentials()"
});
formatter.result({
  "duration": 10767845600,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinitions.user_clicks_on_Jobs_Menu()"
});
formatter.result({
  "duration": 778219000,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinitions.select_create_new_job_section()"
});
formatter.result({
  "duration": 2297812300,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinitions.click_on_Start_button_of_form()"
});
formatter.result({
  "duration": 3577194500,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinitions.add_pre_screening_questions()"
});
formatter.result({
  "duration": 139769400,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinitions.click_on_Add_Question_button()"
});
formatter.result({
  "duration": 11769377200,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using xpath\u003d//button[contains(text(),\u0027Select Questions\u0027)]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027PAUL\u0027, ip: \u0027192.168.1.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepdefinitions.Stepdefinitions.click_on_Add_Question_button(Stepdefinitions.java:348)\r\n\tat ✽.And click on Add Question button(featurefiles/prescreeningQ.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Stepdefinitions.enter_Question()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinitions.choose_the_Category_of_Question()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinitions.click_on_Submit_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinitions.select_questions_from_Questions_List()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinitions.click_on_Add_Selected()"
});
formatter.result({
  "status": "skipped"
});
});