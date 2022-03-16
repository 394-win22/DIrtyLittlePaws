/* globals cy */

describe ('Test App', () => {

    it('enter card info at map station', () => {
        cy.visit ('/');
        cy.get('[style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: -101px; top: 49px; z-index: 89;"] > img').click({ multiple: true, force: true});
        cy.get('[data-cy="UnlockStation"]').click({ multiple: true, force: true});

        cy.get('[data-cy=PaymentClick]').click({ multiple: true, force: true}); //clicks and displays edit payment
        
        //EDIT THE PAYMENT
        cy.get('[ data-cy="PaymentInfoNumber"]').type('1234567812345678');
        cy.on('uncaught:exception', (err, runnable) => {
          // returning false here prevents Cypress from
          // failing the test
          return false
        })
        cy.get('[ data-cy="PaymentInfoCVV"]').type('123');
        cy.get('[ data-cy="PaymentInfoCCDate"]').type('2024-12');

        //SAVE THE PAYMENT
        cy.get('[data-cy=saveButton]').click();

      });
    
  });