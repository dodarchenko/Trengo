class ChannelsPage {
    visit(){
        cy.visit('/admin/channels2/custom')
    }

    getConnectCustomChannelBtn () {
        return cy.get('[aria-label="Connect Custom channel"]')
    }

    getChannelNameInput () {
        return cy.get('.col-sm-10 > .form-control')
    }

    getSubmitBtn () {
        return cy.get('.box-body > .btn')
    }

    getSuccesMessage(){
        return cy.get('.growl-close')
    }

    getBackBtn(){
        return cy.get('.mx-2')
    }

    getAllChannels(){
        return cy.get('.row-inner')
    }
}
export default ChannelsPage