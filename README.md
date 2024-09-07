This test suite is meant to test the various functions of the Urban.Routes webapp. The tests get more complex as they go. The createAnOrder.e2e.js file contains the actual tests, page.js contains named inputs, buttons, functions, and modals, and helper.js contains specific funtions for generating inputs. wdio.conf.js contains the configuration of the tests, such as what browsers are tested, timeout times, and importantly, the browser.url, which is called in every test to open and log in to the test server. When running the tests, ensure an open test server is put in baseUrl. 

Technologies used: VS Code, Node.js, npm, JEST, WebdriverIO, and Mocha, and is shared on GitHub. VSCode can be installed at https://code.visualstudio.com/download, Node.js can be installed at https://nodejs.org/en, npm is installed with Node.js, WebdriverIO is installed and configured by typing "npx wdio config" once in your desired directory, and Mocha will be added during the configuration of WebdriverIO. The dependencies are in the file labled 'package.json', which includes jest. Please ensure to pull both package.json and package-lock.json from github to in order to run these tests.

To run the tests, type "npm run wdio" in the console of VS code. It will run the tests in order, displaying errors that are seen, and end with a summary of the tests run, as well as why tests that failed did so.

Please note that all tests will fill the "to" and "from" addresses and click the "call a taxi" button.

Tests described in order:
'it should fill in the phone number'- Will fill in the address then open the phone number modal, fill in a generated phone number, retreive the code sent to that number then fill in the code. It then tests that the generated phone number is populated in the phone number field.

'it should select the plan'-Will fill in the adddress, then selects the "supportive" ride type. It then checks that the "supportive" ride type card is active.

'it should set the address'- Will fill in the address. It then tests that the "to" and "from" field are filled with the correct values.

'it should add a credit card'- Will fill in the address, then open the "payment method" modal, select "add a credit card", generate a card number and input it into the "card number" field, then do the same with a cvv for the "card code" field, then add that card. It will then test that the card has been added as "card 1", the default name for the first card added.

'it should message the driver'- Will fill in the address, then select the "supportive" ride type, then input "play a funny podcast" in the "message to the driver..." field. It will then check that the message is in the field.

'it should order a blanket and handkerchiefs'- Will fill in the address, then select the "supportive" ride type, then clicks the switch "Blankets and handkerchiefs". It then checks that the switch is on.

'it should order 2 ice creams'- Will fill in the address, then select the "supportive" ride type, then click the "+" button in the "Ice cream" row. It then checks that the value of ice creams added is 2.

'it should show the car search modal'- Will fill in the address, then select the "supportive" ride type, add the message (note that the message must be filled in to move on), then click the "Enter the number and order" button, which should open the car search modal. It will test that the modal is shown.

'it should show waiting for driver info'- Will fill in the address, fill in the phone number and confirm it, then select the "supportive" ride type, add the message (note that the message must be filled in to move on), then click the "Enter the number and order" button, which should open the car search modal, then will check that the driver info appears by checking that "The driver will arrive in..." is displayed after 50 seconds. Note that when the modal first opens, there will be a timer while it searches for a driver, then the dirver info will appear.
