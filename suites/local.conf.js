const { generalConf } = require('./general.conf')

const localConf = {
    ...generalConf,

    runner: 'local',
    port: 4723,
    services: ['appium'],
    capabilities: [{
        // capabilities for local Appium web tests on an Android Emulator
        platformName: 'Android',
        'appium:deviceName': 'Pixel 6a',
        'appium:platformVersion': '13.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': './app/ebacshop.apks'
    }],

}

module.exports = { localConf }