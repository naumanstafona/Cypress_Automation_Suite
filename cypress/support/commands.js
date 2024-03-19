import 'cypress-iframe';

// Defined Twitter Credits and User name & Password fields HTML ids to 
//use these elements where they are required in-case we need to change anything we can change it over here only
const twitterPageElementsAndCredits = { 
  username: '@test1116977', 
  password: 'Panda@2020',
  usernameinput: '#username_or_email',
  passwordinput: '#password' 
};

// This method contains functionality of the Login with twitter from Altcoinist app
//We are passing above declared variables in this method to keep the identifiers and credits at a single location
Cypress.Commands.add('login', () => {
  cy.origin('https://api.twitter.com',
  // Send the args here...
  { args: twitterPageElementsAndCredits },
  // ...and receive them at the other end here!
  ({ username, password,usernameinput,passwordinput })=> {
    cy.get(usernameinput).type(username);
    cy.get(passwordinput).type(password);
    // prompts a sign in that redirects to http://localhost:3000 with a token, cookie, or other means of acknowledgement
    cy.get('#allow').contains('Sign In').click();
    cy.wait(3000);
  });
});

Cypress.Commands.add('openMyApp', () => {
  // Customize the URL based on your app's URL
  cy.visit('http://localhost:3000/');
});