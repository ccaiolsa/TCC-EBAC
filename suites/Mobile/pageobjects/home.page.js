const { $ } = require('@wdio/globals')

class HomePage {
    get buscabtn() {
        return $('//android.widget.TextView[@resource-id="tab-Search"]')

    }

    async acessarCatalogo() {
        await this.buscabtn.click()
    }
}


module.exports = new HomePage()