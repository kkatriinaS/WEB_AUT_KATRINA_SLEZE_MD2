const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    viewportWidth: 1000,
    viewportHeight: 660,
  },
  
});
