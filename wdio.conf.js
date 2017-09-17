var config = {
    protocol: 'https',
    host: 'app.testobject.com',
    port: '443',
    path: '/api/appium/wd/hub',
    String apiKey = System.getenv("TESTOBJECT_API_KEY");
    String deviceId = System.getenv("TESTOBJECT_DEVICE");
    DesiredCapabilities capabilities = new DesiredCapabilities();
    capabilities: [{
        capabilities.setCapability(TestObjectCapabilities.TESTOBJECT_API_KEY, apiKey);
        capabilities.setCapability(TestObjectCapabilities.TESTOBJECT_DEVICE, deviceId);
    }],

    specs: [
        './test/**/*.js'
    ],

    sync: true,
    logLevel: 'verbose',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 10 * 60000,
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        enableTimeouts: false
    }
}

exports.config = config