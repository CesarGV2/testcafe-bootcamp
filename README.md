# testcafe-bootcamp
Todoist - Testcafe Automation bootcamp
This project is aimed to anyone on the corporation ho wants to test E2E scenarios on Todois webpage 
using Testcafe and POM pattern to creates the automated test. For the test report the cucumber reporter is used.

## To start you need to clone this repository
- $git clone https://github.com/CesarGV2/testcafe-bootcamp.git
## install node dependencies
- $npm install node
## Run Scripts
-  test-smoke: runs all the TC of the smoke suite.
   - command: *npm run test-smoke*.
-  test-login:runs all the test for login feature.
   - command: *npm run test-login*.
-  test-loginHeadless: 
   - command: *npm run test-loginHeadless*
- test-createTask: runs all the tests for Create Task feature.
   - command: *npm run test-createTask*
-  test-createProject: run all the tests for Create Project feature.
   - command: *npm run test-createProject*
-  test:runs the full Suite of Testcases (Login, Task, Project)
   - command: *npm run test*
-  ### Report Creation
-  create-report: after run any of the previous scripts use this script to generate a visual report of the results on a webrowser
   - command: *npm run create-report.*


***Note:***
- the Test Case: *'As a user I should not be able to login with incorrect email and password'* should be ignore in order to be ale to test the login fixture, due to a Todist restriction about the nuber of attemp on the loggin.
- The .env file it supposed to not be attached, it is on this repository in order to make easier the review of this Framework.
