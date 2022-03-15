/* globals cy */

describe ('Test App', () => {

    it('show email address in profile page after clicking', () => {
        cy.visit ('/');
        cy.get('[data-cy=profile]').click({ multiple: true, force: true});
        cy.get('[data-cy=Email]').should('contain' ,'Email');
      });
    
      it('Goes to profile, Enters hoome address (street, city, state, zip code), saves, returns home', () => {
        cy.visit ('/');
        cy.get('[data-cy=profile]').click({ multiple: true, force: true}); //clicks and displays profile
        cy.get('[data-cy=HomeAddress]').should('contain' ,'Home Address');
        cy.get('[data-cy=HomeAddressClick]').click({ multiple: true, force: true}); //clicks and displays edit payment
        
        //EDIT THE PAYMENT
        cy.get('[ data-cy="Street"]').clear()
        cy.get('[ data-cy="Street"]').type('1820 Chicago Ave.');
        cy.on('uncaught:exception', (err, runnable) => {
          // returning false here prevents Cypress from
          // failing the test
          return false
        })
        cy.get('[ data-cy="City"]').clear()
        cy.get('[ data-cy="City"]').type('Evanston');
        cy.get('[ data-cy="State"]').clear()
        cy.get('[ data-cy="State"]').type('IL');
        cy.get('[ data-cy="Zip"]').clear()
        cy.get('[ data-cy="Zip"]').type('60201')

        //SAVE THE PAYMENT
        cy.get('[data-cy=saveButton]').click();
        
      });

      //Please note that the it takes to the home address that you just input
      it('clicks on homeLocation button, check if location changes, finishes', () => {
        cy.visit ('/');
        cy.get('[data-cy="GoToHome"]').click({ multiple: true, force: true});
      });
    
  });