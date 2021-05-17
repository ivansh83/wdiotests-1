const hooks = require('./config/hooks.conf');
const base = require('./config/base.conf');
const RpService = require('wdio-reportportal-service');

exports.config = {
    hostname: '93.115.21.174',
    port: 4444,
    path: '/wd/hub',
    maxInstances: 2,
    capabilities: [
        {
            browserName: 'chrome',
            'selenoid:options': {
                enableVNC: true,
                enableVideo: true,
            },
        },
        {
            browserName: 'firefox',
            'selenoid:options': {
                enableVNC: true,
                enableVideo: true,
            },
        }
    ],

    services: [[RpService, {}]],

    ...base,
    ...hooks
}
