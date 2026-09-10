const { defineConfig } = require("cypress");
const cypressOnFix = require('cypress-on-fix');
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {addCucumberPreprocessorPlugin} = require("@badeball/cypress-cucumber-preprocessor");
const {createEsbuildPlugin} = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  projectId: 'b1iimy',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'E2E Test',
    reportDir: 'tests/reports/mochawesome-reporter',
    timestamp: 'ddmmyyyy',
    overwrite:false,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    baseUrl: "http://localhost:80",
    specPattern:[
      "tests/UI/features/**/*.feature"

    ], 
    async setupNodeEvents(on, config) {
      on = cypressOnFix(on);
      require('cypress-mochawesome-reporter/plugin')(on);

      await addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      return config;
    },
  },
});
