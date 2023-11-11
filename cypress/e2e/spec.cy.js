import { email, password } from '/credentials.js';
import ChannelsPage from 'cypress/pages/ChannelsPage.js';
import TeamPage from 'cypress/pages/TeamPage.js';
import CommonFnc from 'cypress/pages/CommonFnc.js';

describe('Trengo tests', () => {
  beforeEach(() => {
    
    cy.viewport(1920, 1080)
    cy.login(email,password);

  })

  it('Should create a custom channel', () => {    
    const channelsPage = new ChannelsPage();
    const commonFnc = new CommonFnc();
    const channelName = commonFnc.randomString()
 
    channelsPage.visit();
    channelsPage.getConnectCustomChannelBtn().should('be.visible').click();
    channelsPage.getChannelNameInput().should('be.visible').clear().type(channelName)
    channelsPage.getSubmitBtn().click()

    channelsPage.getSuccesMessage().should('be.visible').click()
    channelsPage.getBackBtn().should('be.visible').click()
    channelsPage.getAllChannels().should('contain.text', channelName)
    
  });

  it('Should create a team', () =>{
    const commonFnc = new CommonFnc();
    const teamPage = new TeamPage();
    const teamName = commonFnc.randomString();
    
    teamPage.visit();
    teamPage.getCreateTeamBtn().should('be.visible').click()
    teamPage.getTeamNameInput().should('be.visible').type(teamName)
    teamPage.selectFirstUser();
    teamPage.selectChannel();
  
    teamPage.getListOfTeams().should('contain.text', teamName)
  })

  // after(() => {
  //   //API clean DB to delete test channel and test team

  // })

});
