const { $, expect } = require('@wdio/globals')

class CatalogoPage {
    get barraBusca() {
        return $('android=new UiSelector().resourceId("searchInput")')
    };
    get sortBtn() {
        return $('//android.widget.TextView[@text="Sort By"]')
    };
    filtroOpt(filtro) {
        return $(`//android.view.ViewGroup[@content-desc="${filtro}"]/android.view.ViewGroup`)
    };
    get primeiroProduto() {
        return $('(//android.widget.TextView[@text="R$ 149.99"])[1]')
    };
    get segundoProduto() {
        return $('(//android.widget.TextView[@text="R$ 159.99"])[1]')
    };
    get produto() {
        return $('(//android.view.ViewGroup[@content-desc="Camiseta EBAC, R$ 149.99"])[1]')
    }

    async catalogoPersonalizado(palavraCahve, filtro) {
        if (palavraCahve !== '') {
            await this.barraBusca.waitForDisplayed({ timeout: 10000 })
            await this.barraBusca.setValue(palavraCahve)

            if (filtro !== '') {
                await this.sortBtn.waitForDisplayed({ timeout: 10000 })
                await this.sortBtn.click()

                await this.filtroOpt(filtro).waitForDisplayed({ timeout: 10000 })
                await this.filtroOpt(filtro).click()

            }
        } else {
            await this.sortBtn.waitForDisplayed({ timeout: 10000 })
            await this.sortBtn.click()

            await this.filtroOpt(filtro).waitForDisplayed({ timeout: 10000 })
            await this.filtroOpt(filtro).click()
        }

    };

    async comparadorProdutos() {

        const produto1 = parseFloat((await this.primeiroProduto.getText())
            .replace(/[^\d,-]/g, '')
            .replace(',', '.'))

        const produto2 = parseFloat((await this.segundoProduto.getText())
            .replace(/[^\d,-]/g, '')
            .replace(',', '.'))

        return produto1 < produto2
    }
}


module.exports = new CatalogoPage()