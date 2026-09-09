const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '../env/.env') })
const { generalConf } = require('./general.conf')

const sauceConf = {
    ...generalConf,
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    region: 'us',
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    baseUrl: 'wd/hub',

    capabilities: [{
        platformName: 'Android',
        'appium:app': 'storage:filename=mda-2.2.0-25.apk',
        'appium:deviceName': 'Google Pixel 6 Emulator',
        'appium:platformVersion': '13.0',
        'appium:automationName': 'UiAutomator2',
        'sauce:options': {
            appiumVersion: '2.11.0',
            build: 'appium-build-test',
            name: 'teste wdio',
            deviceOrientation: 'PORTRAIT',
        }
    }
    ]
}

module.exports = { sauceConf }