const { defineConfig } = require("cypress");
const { readFileSync } = require('fs')


module.exports = defineConfig({
  e2e: {
    projectId: "i4eci5",
    baseUrl:'https://magento.softwaretestingboard.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
      const envName = config.env.name
      const text = readFileSync(`cypress/fixtures/${envName}.json`)
      const values = JSON.parse(text)
      config.env = {
        ...values
      }
      return config
    },
  },
});
