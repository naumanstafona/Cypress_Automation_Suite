import { xpaths } from "../../POM/all_xpaths_Of_Altcoinist_App.js";
describe('Test Login with Twitter and verify Finance Tab is available', () => { 
  it('Should be able to see Finance tab after logging in', () => { 

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
         
    //Verify if Finance tab is appeared in the app or not
    cy.xpath(xpaths.finance_Tab_xpath).should('exist');
    
    //Print log message that user gets logged in successfully and Finance tab is available
    cy.log("Test case for login with Twitter and Finance tab is available is Passed");

  });
 });