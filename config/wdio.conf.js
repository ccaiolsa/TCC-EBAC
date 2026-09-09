const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '../env/.env') })
const { localConf } = require('./local.conf')
const { sauceConf } = require('./sauce.conf')

function getConf() {
    switch (process.env.ENVIRONMENT) {
        case 'local':
            return localConf
        case 'sauce':
            return sauceConf
    }
}

const config = getConf()

module.exports = { config }