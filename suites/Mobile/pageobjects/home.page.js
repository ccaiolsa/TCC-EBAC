const { $ } = require('@wdio/globals')

class HomePage {
    get buscabtn() {
        return $('new UiSelector().resourceId("tab-Search")')

    }

    async acessarCatalogo() {
        await this.buscabtn.click()
    }
}


module.exports = new HomePage()