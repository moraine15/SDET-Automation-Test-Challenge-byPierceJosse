exports.config = {
    // Test runner
    runner: 'local',
    
    // Specs (lokasi file test)
    specs: [
        './test/specs/**/*.js'
    ],
    
    // Capabilities (browser yang digunakan)
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: ['--disable-gpu', '--no-sandbox', '--disable-dev-shm-usage']
        }
    }],
    
    // Level log
    logLevel: 'info',
    
    // Framework
    framework: 'mocha',
    
    // Reporter
    reporters: ['spec'],
    
    // Mocha options
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};