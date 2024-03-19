describe('Test Login with Twitter', () => { 
  it('Should sign in with twitter successfully', () => { 
    var genArr = Array.from({length:1000},(v,k)=>k+1)
    cy.wrap(genArr).each((index) => {
    //Go to app page
    cy.visit('http://localhost:3000/app'); 
    
    //Wait fo page to get loaded successfully
    cy.wait(90000);
    
    //Click on search bar and add text in it
    cy.xpath('//*[@id="creators-search"]').type('justyn_Mante');

    //wait for page to get loaded before we look for results to appear in the results list
    cy.wait(90000);

    //Click on the top results returned
    cy.xpath('//*[@id="creators-search-option-0"]/div[2]/a').click();
    
    //wait for profile to get loaded in the main content area
    cy.wait(90000);

    //Select the Profile title from the page
    cy.xpath('//*[@id="root"]/div/main/div/div[1]/div/div[1]/div[1]/div/a/p');

    //Look for the same value we searched for earlier, to ensure that profile is rendered on the page
    cy.contains('p','Justyn_Mante');

    //ASSERTION
    cy.log("Test case for validating Search Functionality is Passed");


    });

  });
 });