const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '../../../env/.env') })

const reporterConf = process.env.REPORTER === 'true' ? {
    reporters: [['allure', { outputDir: '../reports/allure-results' }]]

} : {}

module.exports = { reporterConf }