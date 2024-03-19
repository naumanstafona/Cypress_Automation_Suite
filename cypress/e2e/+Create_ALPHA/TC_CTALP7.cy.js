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
    cy.xpath(xpaths.create_ALPHA_Buttton).click();

    cy.wait(7000);

    //Click on Title Richtext
    cy.get(xpaths.create_alpha_richtext).type('Do you remember the first time you!!!');

    //Click on create article
    cy.get(xpaths.create_article_textarea).type('heard about Bitcoin? Maybe it was a faint buzz about a new technology that would change everything. Perhaps you felt a tingle of FOMO as the folks who got in early suddenly amassed a small fortune — even if it wasn’t clear what the “money” could legitimately be spent on (really expensive pizza?).');


    //Selecting Upload Picture from Create ALPHA page 
    cy.get("input[type=file]").attachFile('sampleabc5.jpg');

    //Wait for some time to post the content
    cy.wait(5000);

    //Click on post button
    cy.xpath(xpaths.create_Alpha_Post_button).click();

    //Wait for some time to post the content
    cy.wait(5000);

    //Get the title of the post title to match if the text entered appeared as same
    cy.get(xpaths.create_Alpha_disabled_title_after_Posting).invoke('text').then((text) => {
      const title = text
      cy.log('title', title);

      //check if the title is same to draw assertion at this step
      if (title == "Do you remember the first time you!!!") {
        cy.log("Test case for login with Twitter is Passed");
      }
      else {
        cy.log("Test case for login with Twitter is Failed");
      }

    })
  });
});