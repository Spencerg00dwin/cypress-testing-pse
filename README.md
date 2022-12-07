# Cypress Testing Pi Sigma Epsilon Professional Fraternity Website:
## https://pse-umich.org/


### Setup:

I decided to use a react app for the basis of the cypress testing. It streamlined the download and run proccesses for my tests. Refer to the link below to setup a React app
Setup: https://reactjs.org/docs/create-a-new-react-app.html

### Framework:

1. The first step is to run the cypress tests on the PSE website. It's fairly simple because it's already hosted. Prior to running each cypress test cy.visit must be set the https://pse-umich.org/. This can be automated by using the beforeEach function.

2. Smoke Test: This is simple feature testing. Essentially making sure everything that's supposed to be there is actually there. Cypress make this easy by using the .get() and find() funtions. These can be called on specific elements or classes.

3. Functional Test: These tests are more complex than the smoke tests. They're used for quality assurance to test the performance of your software. Cypress has various tools for these kinds of tests. Because the PSE website isn't super in depth I mainly used .click() and .location() for these. But .type() is also a popular function that could be used to test the functionality of text boxes.

### How to Run Locally
1. Clone the repo. Refer to: https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository
2. In terminal run: npx cypress open
3. Click E2E testing
4. Choose a browser to run the tests in. I prefer Electron
5. View your specs page and choose a file you'd like to run (i.e smoke or functional)
6. Tests will run once you click on the file. To take a deeper dive into the tests click on each individual test and scroll to see what it's doing

