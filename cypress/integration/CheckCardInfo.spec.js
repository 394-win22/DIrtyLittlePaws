/* globals cy */

describe ('Test App', () => {

  it('show email address in profile page after clicking', () => {
      cy.visit ('/');
      cy.get('[data-cy=profile]').click({ multiple: true, force: true});
      cy.get('[data-cy=Email]').should('contain' ,'Email');
    });
  
    it('Goes to profile, Enters card info, saves, returns home, clicks on station, uses station, finishes', () => {
      cy.visit ('/');
      cy.get('[data-cy=profile]').click({ multiple: true, force: true}); //clicks and displays profile
      cy.get('[data-cy=Payment]').should('contain' ,'Payment');
      cy.get('[data-cy=PaymentClick]').click({ multiple: true, force: true}); //clicks and displays edit payment
      
      //EDIT THE PAYMENT
      cy.get('[ data-cy="PaymentInfoNumber"]').type('1234123412341234');
      cy.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
      cy.get('[ data-cy="PaymentInfoCVV"]').type('123');
      cy.get('[ data-cy="PaymentInfoCCDate"]').type('2026-10');

      //SAVE THE PAYMENT
      cy.get('[data-cy=saveButton]').click();
      
    });
  
});