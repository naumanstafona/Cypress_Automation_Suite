describe('Test Login with Twitter and Connect Wallet', () => { 
  it('Should sign in with twitter and connect wallet manually and verify that wallet is successfully', () => { 

    //Go to app page
    cy.visit('http://localhost:3000/app'); 

    //click on Login button
    cy.xpath("//*[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium mui-style-z99i8t-MuiButtonBase-root-MuiButton-root']").click();
    
    //wait for Login popup to open
    cy.xpath('/html/body/div[2]/div[3]/div[2]/div/button[1]').click();
    
    //Login with twitter functionality wrtitten in support/commmands.js file to make it use every where in the code from that file only
    cy.login();
    
    //wait for some time so user gets back to Altcoinist Page successfully and Link Wallet button displays
    cy.wait(5000);
    
    //Click on Link Wallet Button to open a popup 
    cy.xpath('//*[@id="root"]/div/div[1]/aside/div[4]/button').click();
    
    //Click Connect wallet button in the link wallet 
    cy.xpath('/html/body/div[2]/div[3]/div[2]/div/button').click();
    
    //Click Meta mask button from wallet popup
    cy.xpath('//*[@id="__CONNECTKIT__"]/div/div/div/div[2]/div[2]/div[3]/div/div/div/div[1]/button[2]').click();
    
    //wait till the wallet gets loaded
    cy.wait(15000);
    
    //Click on Sign in button 
    cy.xpath('//*[@id="__CONNECTKIT__"]/div/div/div/div[2]/div[2]/div[3]/div/div/div/div/button').click();
    
    // Wait to manually select option from the new window of chrome so user can sign in from that window
    //***As Cypress doesnot support context of the extensions opened by chrome */
    cy.wait(15000);
    
    //Select successfull popup window and click not now button
    cy.xpath('/html/body/div[2]/div[3]/div[2]/div/div[3]/div/button[2]').click();
    
    //Verify if Create ALPHA button is appeared in the app or not to verify wallet is successully connected
    cy.xpath('//*[@id="root"]/div/div[1]/aside/button').should('exist');
    
    //Print log message that user gets logged in successfully
    cy.log("Test case for login with Twitter and connect wallet is Passed");

  });
 });