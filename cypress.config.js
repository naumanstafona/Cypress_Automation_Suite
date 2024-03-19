const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "8itydg",
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
