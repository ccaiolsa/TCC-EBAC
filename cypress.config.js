import {defineConfig} from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

export async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

export default defineConfig({
  projectId: 'b1iimy',
  allowCypressEnv: false,
  e2e: {
    baseUrl: "http://localhost:80",
    stepDefinitions: "tests/BDD/step_definitions/**/*.{js,ts}",
    specPattern:[
      "tests/BDD/features/**/*.feature",
      "tests/component_test/**/*.cy.js",
      "tests/api_test/**/*.cy.js",
      "tests/system_test/**/*.cy.js",
      "tests/mobile_test/**/*.cy.js",

    ], 
    setupNodeEvents,
  },
});
