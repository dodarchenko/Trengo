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
        cy.get('[data-test="create-team-members"] > .multiselect > .multiselect__content-wrapper > .multiselect__content > .multiselect__element > .multiselect__option').should('be.visible').click()
    }

    selectChannel(){
        cy.get('[placeholder="Select one or more channels"]').click()
        cy.get(':nth-child(3) > .multiselect__option').click()
        cy.get('[data-test="input"]').click()
        cy.get('[data-test="create-team-modal-submit"]').click()
    }

    getListOfTeams(){
        return cy.get('.row-inner')
    }
}
export default TeamPage