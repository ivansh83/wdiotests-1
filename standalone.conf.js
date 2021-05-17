const hooks = require('./config/hooks.conf');
const base = require('./config/base.conf');
exports.config = {
    host: 'localhost',
    port: 4444,
    path: '/wd/hub',
    maxInstances: 1,
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome',
            acceptInsecureCerts: true,
            'goog:chromeOptions': {
                args: ['--window-size=1280,720']
            },
        }
    ],
    ...base,
    ...hooks
}
