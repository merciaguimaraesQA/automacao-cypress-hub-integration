import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://conhecimento_hubintegration.dealernetworkflow.com.br",
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {

      on("before:browser:launch", (browser = {}, launchOptions) => {

        if (browser.name === "chrome") {
          launchOptions.args.push("--ignore-certificate-errors");
          launchOptions.args.push("--allow-running-insecure-content");
        }

        return launchOptions;
      });

    },
  },
});
