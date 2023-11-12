class TeamPage {

    visit(){
        cy.visit('/admin/teams')
    }

    getCreateTeamBtn(){
        return cy.get('[aria-label="Create a team"]')
    }

    getTeamNameInput(){
        return cy.get('[data-test="input"]')
    }

    selectFirstUser(){
        cy.get('[data-test="create-team-members"]').click()
        cy.get('[data-test="create-team-members"] .multiselect__option').first().should('be.visible').click()
    }

    selectChannel(){
        cy.get('[placeholder="Select one or more channels"]').click()
        cy.get('[data-test="create-team-channels"] .multiselect__option').first().click()
        cy.get('[data-test="input"]').click()
        cy.get('[data-test="create-team-modal-submit"]').click()
    }

    getListOfTeams(){
        return cy.get('.row-inner')
    }
}
export default TeamPage