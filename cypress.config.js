const { defineConfig } = require("cypress");
module.exports = defineConfig({
  modifyObstructiveCode:false,
  
  e2e: {
    baseUrl: 'https://app.trengo.com/',

    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
