
describe ('Curr Loc', () => {


      it('clicks on currLoc button, check if blue marker appears', () => {
        cy.visit ('/');
        cy.get('[data-cy="GoToCurrLoc"]').click({ multiple: true, force: true});

        cy.get(`[aria-label="hel"]`, {timeout:   70000}).find('img').should('have.attr', 'src')
        cy.get(`[aria-label="hel"]`, {timeout:   70000}).find('img').invoke('height').should('gte', 40)
        cy.get(`[aria-label="hel"]`, {timeout:   70000}).find('img').invoke('width').should('gte', 40)

      });
    
  });
