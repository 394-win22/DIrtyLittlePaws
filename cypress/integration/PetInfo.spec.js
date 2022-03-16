describe ('Test App', () => {

    it('shows email address in profile page after clicking', () => {
        cy.visit ('/');
        cy.get('[data-cy=profile]').click({ multiple: true, force: true});
        cy.get('[data-cy=Email]').should('contain' ,'Email');
      });

    
      it('Goes to profile, enters pet name, save pet name. Check if profile contains pet name. This should pass', () => {
        cy.visit ('/');
        cy.get('[data-cy=profile]').click({ multiple: true, force: true}); //clicks and displays profile
        cy.get('[data-cy=PetName]').should('contain' ,'Pet Name');
        cy.get('[data-cy=PetNameClick]').click({ multiple: true, force: true}); //clicks and displays pet name
        
        // edit pet name
        cy.get('[ data-cy="petname"]').type('Spot');

        //SAVE THE pet name
        cy.get('[data-cy=saveButton]').click();
        cy.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
        cy.get('[data-cy=savedPetName').should('contain' ,'Spot');

      });

    });