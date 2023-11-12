import { email, password,bearerToken } from './credentials.js';
import ChannelsPage from './pages/ChannelsPage.js';
import TeamPage from './pages/TeamPage.js';
import CommonFnc from './pages/CommonFnc.js';


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
    teamPage.getCreateTeamBtn().should('be.visible').click();
    teamPage.getTeamNameInput().should('be.visible').type(teamName);
    teamPage.selectFirstUser();
    teamPage.selectChannel(); 
    teamPage.getListOfTeams().should('contain.text', teamName);

    //Get ID of created channel
    let channelUrl;
      cy.wait(1000).location('href').then((url) => {
      channelUrl = url;
      const urlParts = channelUrl.split('/');
      const channelID = urlParts[urlParts.length -1]; //
      const apiURL = 'https://app.trengo.com/api/v2/teams/'+channelID;

    //API delete created channel to not swamp DB
      cy.request({
      method: 'DELETE',
      url: apiURL,
        headers: {
        Authorization: `Bearer ${bearerToken}`,
          },             
          }).then((response) => {
            //Handle response if needed
          });

    })
  })
})
