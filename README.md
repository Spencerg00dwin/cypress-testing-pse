# Cypress Testing Pi Sigma Epsilon Professional Fraternity Website:
## https://pse-umich.org/


### Setup:

I decided to use a react app for the basis of the cypress testing. It streamlined the download and run proccesses for my tests. Refer to the link below to setup a React app

Setup: https://reactjs.org/docs/create-a-new-react-app.html

### Framework:

1. The first step is to run the cypress tests on the PSE website. It's faily simple because it's already hosted. Prior to running each cypress test cy.visit must be set the https://pse-umich.org/. This can be automated by using the beforeEach function.

2. Smoke Test: This is simple feature testing. Essentially making sure everything that's supposed to be there is actually there. Cypress make this easy by using the .get() and find() funtions. These can be called on specific elements or classes.

3. Functional Test: 

### How to Run Locally:
