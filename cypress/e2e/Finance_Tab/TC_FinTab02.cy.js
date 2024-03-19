import { xpaths } from "../../POM/all_xpaths_Of_Altcoinist_App.js";
describe('Test Finance Tab functionality', () => { 
  it('Should be able to verify functionality of Finance Tab and all expected elements are present in the page', () => { 

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
    cy.xpath(xpaths.finance_Tab_xpath).click();

    //Selecting the element where Brand TVL exists
    cy.xpath(xpaths.finace_tab_Brand_TVL);

    //Verify the element is having text Brand TVL
    cy.contains('h3','Brand TVL');
    
    //Selecting the element where Stakers exists
    cy.xpath(xpaths.fince_tab_Stakers);

    //Verify the element is having text Stakers
    cy.contains('h3','Stakers');

    //Selecting the element where Pool top-up exists
    cy.xpath(xpaths.finance_tab_Pool_top_up);

    //Verify the element is having text Pool top-up
    cy.contains('h3','Pool top-up');

    //Selecting the element where Monthly members exists
    cy.xpath('//*[@id="root"]/div/main/div/div[2]/div/div[4]/div/div[1]/div[1]/h3');

    //Verify the element is having text Monthly members
    cy.contains('h3','Monthly members');

    //Selecting the element where Monthly revenue exists
    cy.xpath(xpaths.finance_tab_Monthly_Revenue);

    //Verify the element is having text Monthly revenue
    cy.contains('h3','Monthly revenue');

    //Selecting the element where Lifetime members exists
    cy.xpath(xpaths.finance_tab_Lifetime_Members);

    //Verify the element is having text Lifetime members
    cy.contains('h3','Lifetime members');

    //Selecting the element where Total revenue exists
    cy.xpath(xpaths.finance_tab_Total_Revenue);

    //Verify the element is having text Total revenue
    cy.contains('h3','Total revenue');

    //Selecting the element where Shared Revenue exists
    cy.xpath(xpaths.finance_tab_Shared_Revenue);

    //Verify the element is having text Shared Revenue
    cy.contains('h3','Shared Revenue');

        
    //Print log message that user gets logged in successfully and Finance tab is available
    cy.log("Test case for Finance tab is available and all expected elements are present in the page is Passed");

  });
 });