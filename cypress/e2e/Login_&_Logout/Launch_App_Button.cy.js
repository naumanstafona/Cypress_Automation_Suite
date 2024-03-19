import { xpaths } from "../../POM/all_xpaths_Of_Altcoinist_App";

describe('Open URL, Click on Launch dApp', () => {
  it('should open Creator TVL Leaderboard page and SIGN IN button is present', () => {

    cy.visit('http://localhost:3000/');

    //verify Launch dApp button present
    cy.xpath(xpaths.launch_dApp_button).should('exist'); 

    //click on launch dApp button
    cy.xpath(xpaths.launch_dApp_button).click();  
    //wait for some time to Sign In button to appear
    cy.wait(5000);
    
    //check if user is successfully landed on the Creator TVL Leaderboard page 
    cy.xpath(xpaths.creator_TVL_Leaderboard).should('exist');
    
    //Print log message that test case is passed
    cy.log("Test case for user is successfully landed on the Creator TVL Leaderboard page  successfull");
  });
});