const reportportal = require('wdio-reportportal-reporter');
const RpService = require("wdio-reportportal-service");

const conf = {
    reportPortalClientConfig: { // report portal settings
        token: 'c19fece9-2644-4d92-b4a3-eb395af85bf3',
        endpoint: 'http://localhost:8080/api/v1',
        launch: 'smoke test',
        project: 'wdiotests-1',
        mode: 'DEFAULT',
        debug: false,
        description: "Launch description text",
        attributes: [{key:"tag", value: "foo"}],
        headers: {"foo": "bar"} // optional headers for internal http client
    },
    reportSeleniumCommands: false, // add selenium commands to log
    seleniumCommandsLogLevel: 'debug', // log level for selenium commands
    autoAttachScreenshots: false, // automatically add screenshots
    screenshotsLogLevel: 'info', // log level for screenshots
    parseTagsFromTestTitle: false, // parse strings like `@foo` from titles and add to Report Portal
    cucumberNestedSteps: false, // report cucumber steps as Report Portal steps
    autoAttachCucumberFeatureToScenario: false, // requires cucumberNestedSteps to be true for use
    isSauseLabRun: false, // automatically add SauseLab ID to rp tags. Deprecated and will be removed. Use sauceLabOptions instead
    sauceLabOptions : {
        enabled: true, // automatically add SauseLab ID to rp tags.
        sldc: "US" // automatically add SauseLab region to rp tags.
    }
};

exports.config = {
    // ...
    reporters: [[reportportal, conf]],
    // ...
};

module.exports = {
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
        './test/specs/navigation.spec.js'
    ],

    logLevel: 'info',
    bail: 0,

    waitforTimeout: 10000,
    connectionRetryTimeout: 30000,
    connectionRetryCount: 1,

    baseUrl: 'https://localcoding.us',

    services: [[RpService, {}]],

    framework: 'mocha',
    reporters: ['spec', ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true
    }]],
    mochaOpts: {
        require: ['@babel/register'],
        ui: 'bdd',
        timeout: 60000
    }
}
