# APIAutomationCodeCeptJS

Behavior Driven Development CodeceptJs - API Test automation framework including Allure reports

This framework contains API Transaction code containing:

1 feature 9 Scenarios

# GET Method
Scenario 1: Given user can see all the transactions

Scenario 2: Given user can see any specific transactions

# POST Method
Scenario 1: Given user can create new transcation with request body

Scenario 2: Given user can create new transcation without request body

# PUT Method
Scenario 1: Given user search transaction id for updation

Scenario 2: Given user can update any transaction

# DELETE Method
Scenario 1: Given user search transaction id for deletion

Scenario 2: Given user can delete any transaction

Scenario 2: Given user can not see deleted transaction

# Pr-requisite:
Node Js
Visual Studio Code
Allure (Refere to link for installtion)

# Directory Structure:
1. config : Have all global data like base endpoint
2. output: Execution results get stored this location
3. tets: Test Automation scripts are here
4. utility: Helper classes like create instance, random generation, readers etc..

# Steps to run at your system:

Clone the repository using "git clone "

Open project in visual studio code then enter “npm install" command in terminal

Run "npm run test" command to execute all tests

Go to output folder in project directory and execute "allure serve" command in cmd

![image](https://user-images.githubusercontent.com/26184674/136733156-405538ab-d153-419b-b437-5f569ba4771b.png)

![image](https://user-images.githubusercontent.com/26184674/136733213-0847c994-99d1-4ef8-9700-d34b4acb771c.png)

   Happy Testing :)
