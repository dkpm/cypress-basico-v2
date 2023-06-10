Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Dayane')
    cy.get('#lastName').type('Moreira')
    cy.get('#email').type('dayanekmoreira@gmail.com')
    cy.get('#open-text-area').type('teste')
    cy.contains('button', 'Enviar').click()
})