# testcafe-bootcamp
Todoist - Testcafe Automation bootcamp
This project is aimed to anyone on the corporation ho wants to test E2E scenarios on Todois webpage 
using Testcafe and POM pattern to creates the automated test. For the test report the cucumber reporter is used.

## Installation
1. Clone the repository *$git clone https://github.com/CesarGV2/testcafe-bootcamp.git*
2. Go to the porejcts folder on a IDE
3. Open a new terminal and run *$npm install*
 ## Run Scripts
-  test-smoke: runs all the TC of the smoke suite.
-  test-login:runs all the test for login feature.
-  test-loginHeadless: runs all the test for login feature on chrome y safari on headless mode.
-  test-createTask: runs all the tests for Create Task feature.
-  test-createProject: run all the tests for Create Project feature.
-  test:runs the full Suite of Testcases (Login, Task, Project)
-  ### Report Creation
-  create-report: after run any of the previous scripts use this script to generate a visual report of the results on a webrowser
   - command: *npm run create-report.*


***Note:***
- The Test Case: *'As a user I should not be able to login with incorrect email and password'* should be ignore in order to be able to test the login fixture, due to a Todist restriction about the nuber of attemp on the loggin.
- The .env file it supposed to not be attached, it is on this repository in order to make easier the review of this Framework.
