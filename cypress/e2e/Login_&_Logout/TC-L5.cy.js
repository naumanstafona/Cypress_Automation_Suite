import { xpaths } from "../../POM/all_xpaths_Of_Altcoinist_App.js";
describe('Test Logout functionality', () => { 
  it('Should sign out successfully', () => { 

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
         
    //Click on three dots to open menu for logging out user
    cy.xpath(xpaths.three_dots_in_LHN).click();

    //Click on logout button
    cy.xpath(xpaths.logout_button_in_LHN).click();

    //Check if Profile tab does not exists hence user gets logged out successfully
    cy.xpath(xpaths.profile_tab_xpath).should('not.exist')
    
    //Print log message that user gets logged in successfully
    cy.log("Test case for logout functionality is Passed");

  });
 });