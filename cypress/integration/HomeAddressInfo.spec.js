describe ('Test App', () => {

    it ('launches', () => {
      cy.visit ('/');
    });
  
    it ('sign ins and finds scan button', () => {
      cy.visit ('/');


      cy.get('[data-cy=unlock]').should('contain', 'Unlock');
    });

    
      it('Goes to profile, enters home address, save address. Check if profile contains address. This should pass', () => {
        cy.visit ('/');
        cy.get('[data-cy=profile]').click({ multiple: true, force: true}); //clicks and displays profile
        cy.get('[data-cy=HomeAddress]').should('contain' ,'Home Address');
        cy.get('[data-cy=HomeAddressClick]').click({ multiple: true, force: true}); //clicks and displays homeaddress
        

        cy.get('[ data-cy="Street"]').focus().clear();
        cy.get('[ data-cy="Street"]').type('811 Emerson St');
        cy.get('[ data-cy="City"]').invoke('val', 'Evanston');
        cy.get('[ data-cy="State"]').invoke('val', 'IL');
        cy.get('[ data-cy="Zip"]').invoke('val', '60201');

        //SAVE THE PAYMENT
        cy.get('[data-cy=saveButton]').click();
        cy.get('[data-cy=savedHomeAddress').should('contain' ,'811 Emerson St');
        cy.get('[data-cy=savedHomeAddress').should('contain' ,'Evanston');
        cy.get('[data-cy=savedHomeAddress').should('contain' ,'IL');
        cy.get('[data-cy=savedHomeAddress').should('contain' ,'60201');

      });


      it('Goes to profile, enters home address, cancel. Check if profile contains address. This test should fail since we did not save', () => {
        cy.visit ('/');
        cy.get('[data-cy=profile]').click({ multiple: true, force: true}); //clicks and displays profile
        cy.get('[data-cy=HomeAddress]').should('contain' ,'Home Address');
        cy.get('[data-cy=HomeAddressClick]').click({ multiple: true, force: true}); //clicks and displays homeaddress

        // This test should fail as we saved without inputting all information
        // so the functionality will fail
        cy.get('[ data-cy="Street"]').focus().clear();
        cy.get('[ data-cy="Street"]').type('2133 Sheridan Road');
        cy.get('[ data-cy="City"]').invoke('val', 'Evanston');
        cy.get('[ data-cy="State"]').invoke('val', 'IL');
        cy.get('[ data-cy="Zip"]').invoke('val', '60208');
        cy.get('[data-cy=cancelButton]').click();
        cy.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
        cy.get('[data-cy=savedHomeAddress').should('contain' ,'2133 Sheridan Road');
      });


      

    
  });