# WorkMotion QA Assessment

![workmotion](https://i.ytimg.com/vi/9noiqwqWvpc/sddefault.jpg)

> This assessment is to automate the following employee onboarding test scenario using Javascript:
>1. As you already logged in as HR manager, so you’ll be able to add new employee
>2. Add new employee with all steps
>3. Check the action items section for this HR manager after confirming the employee onboarding on
our platform
>4. Mark the action that been received and assert that it has been done

In order to do it, I chose Cypress framework due to the easier way to setup, write and run Javascript tests using POM (Page Object Model) design pattern.

## Index

- Required Tools
- Setup
- Test Execution

## Required Tools
- [node js](https://nodejs.org/en/)
- [cypress](https://www.cypress.io/)

## Setup

Due to security reasons, create a file `cypress.env.json` in the root of your project with your email and password as displayed below to access the system. This file won't push to git because it is added .gitignore
```
{
    "email": "username@workmotion.com",
    "password": "your password here"
}
```

After that go to the project folder on the terminal and type:

```shell
npm init -y
npm install
npm install cypress
```

## Test Execution
- type `npx cypress open` to run the test using the browser 
- type `npx cypress run` to run as headless 