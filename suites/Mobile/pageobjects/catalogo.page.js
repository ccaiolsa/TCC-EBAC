const { $, expect } = require('@wdio/globals')

class CatalogoPage {
    get barraBusca() {
        return $('new UiSelector().resourceId("searchInput")')
    };
    get sortBtn() {
        return $('new UiSelector().resourceId("SortBy")')
    };
    get filtroOpt() {
        return $(`//android.view.ViewGroup[@content-desc=${filtro}]/android.view.ViewGroup`)
    };
    get primeiroProduto() {
        return $('new UiSelector().text("R$ 149.99").instance(0)')
    };
    get segundoProduto() {
        return $('new UiSelector().text("R$ 159.99").instance(0)')
    };
    get produto() {
        return $('new UiSelector().description("Camiseta EBAC, R$ 149.99").instance(0)')
    }

    async catalogoPersonalizado(palavraCahve, filtro) {
        if (palavraCahve !== '') {
            await expect(this.sortBtn).toBeClickable()
            await this.sortBtn.click()

            await expect(this.filtroOpt).toBeClickable()
            await this.filtroOpt.click()

            if (filtro !== '') {
                await expect(this.barraBusca).toBeClickable()
                await this.barraBusca.setValue(palavraCahve)

                await expect(this.sortBtn).toBeClickable()
                await this.sortBtn.click()

                await expect(this.filtroOpt).toBeClickable()
                await this.filtroOpt.click()

            }
        } else {
            await expect(this.barraBusca).toBeClickable()
            await this.barraBusca.setValue(palavraCahve)
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