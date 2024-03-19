describe('Login with Test User', () => { 
  it('User Should be Logged in with Test User', () => { 
   

    //Go to app page
    cy.visit('http://localhost:3000/app'); 
    
    //To cater the test case run sucessfully on cloud.cypress because of element not found error
    cy.wait(5000);

    //click on Login button
    cy.xpath("//*[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium mui-style-y48mx6-MuiButtonBase-root-MuiButton-root']").click();
    
    //wait for popup to open
    cy.wait(5000);
    
    cy.xpath("/html/body/div[2]/div[3]/div[2]/div/button[2]").click();
    
    //wait for popup to open
    cy.wait(5000);
    
    cy.xpath('/html/body/div[2]/div[3]/div[1]/button').click();

    //wait for popup to open
    cy.wait(5000);
    

    cy.xpath("//*[@class='MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters mui-style-eexor7-MuiTypography-root-MuiLink-root-MuiButtonBase-root-MuiListItemButton-root']").click();
    
    //wait for popup to open
    cy.wait(5000);
    
    cy.xpath('//*[@id="root"]/div/div[1]/aside/div[2]/ul/li[4]/a').should('exist');
    
    //Print log message that user gets logged in successfully
    cy.log("Test case for login with Test User is Passed");

  });
 });