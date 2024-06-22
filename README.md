In this readme file, there will be information about the Automation Tests and instructions to install and run the Cypress tests created for the Raidiam Project.

## General Information

The automated tests are performed in Cypress (https://www.cypress.io/), which is a testing framework which I, Dhiego Bastos, am familiar with, and is one of the most used testing tools in the market nowadays.

The test runs are considering the test cases created for the “Sign Up”, "Sign In" and "Articles" flows, considering the main cases for each one, found on Test Cases in [Documents](Documents/) folder.

With it, the [Faker Library](https://fakerjs.dev/guide/usage.html) will be used to generate random data to perform some test validation.


## Instructions to install tools to perform Automated tests:

1 - Clone this repository to your computer.

```sh
git clone https://github.com/dhiego-bastos/raidiam-project.git
```

![Captura de Tela 2024-06-22 às 15 08 42](https://github.com/dhiego-bastos/raidiam-project/assets/173289553/92b000ab-b6d6-4a29-aae7-da2f8b661552)

The instructions on how to clone repositories on GitHub can be found in [this link](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository);

2 - Clone also the repository from https://github.com/CaiqueCoelho/vue-realworld-example-app and run its server.

3 - Install Node.js on your local machine. Instructions for MacOS and Windows in this link: https://radixweb.com/blog/installing-npm-and-nodejs-on-windows-and-mac

4 - With the files on your pc, access the folder through the terminal with the command:

``` sh
cd raidiam-project/Cypress\ Tests
```

![image](https://github.com/dhiego-bastos/raidiam-project/assets/173289553/3fdb3eaa-83ee-4fbd-80a8-88e4ddc96a1b)

5 - Run 
```sh
npm install cypress --save-dev
```

(Maybe you will need to run sudo also)

6 - Install npx if not installed already with the command:
```sh
npm install -g npx
```

7 - Install Faker library, if not installed already with the command (Maybe you will need to run sudo also):

```sh
npm install @faker-js/faker --save-dev
```

There are two ways to run the Cypress Test. In Visual model, where user can see the test running, or headless, and the user only gets the result.

To run the Visual Test, one test by one, follow the steps below.
To run the Headless Test, skip to the step 15.

8 - Run 
```sh
npx cypress open
```

9 - A new window will be displayed. Click on the “E2E Testing” button:

![image](https://github.com/dhiego-bastos/raidiam-project/assets/173289553/9ba3d113-3ff2-4bfc-ae11-997774787ac0)

10 - Select the Electron, and click on “Start E2E Testing in Electron”:

![image](https://github.com/dhiego-bastos/raidiam-project/assets/173289553/42bdc3fc-4d33-46cc-861c-00776767cd87)

PS: Other browsings are not working as the RealWorld API seems to have a Authorization issue after the user logs in on other browsers. Electron works fine.

11 - The browser will be open and select the “Articles.cy.js”, “SignIn.cy.js” and “SignUp.cy.js” files to execute the test run:

![image](https://github.com/dhiego-bastos/raidiam-project/assets/173289553/b3c62103-f842-49ba-92ba-2fad60e1064b)

12 - Wait for the test run to be finished:

![image](https://github.com/dhiego-bastos/raidiam-project/assets/173289553/2974b942-04d0-49c6-9a44-9f65496341f1)

13 - After the run is over, the tests results will be displayed. The correct icon at the top of the screen will have the passed tests, the Red Cross, the failed ones, and the circle will be for skipped tests.

![image](https://github.com/dhiego-bastos/raidiam-project/assets/173289553/3cdecc3c-16b5-4685-b7a4-e4f945496a82)

14 - You can now select the other tests and repeat the process.

15 - To run the test in headless mode, insert the command on the Terminal:

```sh
npx cypress run “cypress/e2e/specs/” 
```
![image](https://github.com/dhiego-bastos/raidiam-project/assets/173289553/7cbf22a7-32b0-48a7-a0b3-7dcb13172445)
