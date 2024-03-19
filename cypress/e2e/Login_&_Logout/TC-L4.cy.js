import { xpaths } from "../../POM/all_xpaths_Of_Altcoinist_App.js";
describe('Test Login with Twitter', () => { 
  it('Should sign in with twitter successfully', () => { 

    //Go to app page
    cy.visit('http://localhost:3000/app'); 

    //To cater the test case run sucessfully on cloud.cypress because of element not found error
    cy.wait(5000);
    
    //click on Sign in button
    cy.xpath(xpaths.sign_in_button_xpath).click();
    
    //Click on Login button from login popup
    cy.xpath(xpaths.login_with_twitter_button).click();
    
    //Login with twitter functionality wrtitten in support/commmands.js file to make it use every where in the code from that file only
    cy.login();
    
    //wait for some time so user gets back to Altcoinist Page successfully and Link Wallet button displays
    cy.wait(5000);
         
    //Verify if Create ALPHA button is appeared in the app or not to verify wallet is successully connected
    cy.xpath(xpaths.create_ALPHA_Buttton).should('exist');
    
    //Print log message that user gets logged in successfully
    cy.log("Test case for login with Twitter is Passed");

  });
 });