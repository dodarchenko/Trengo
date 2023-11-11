Cypress.Commands.add('login', (email, password) => {
    cy.visit('/auth/login');
   
    // Input credentials
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
  
    // Submit
    cy.get('button[type="submit"]').click();
    //Validate login
    cy.url().should('include', '/tickets'); 
    cy.get('[data-test="main-navigation-inbox"]').should('be.visible');
    
});


  