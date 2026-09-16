const request = require('supertest');
const catalogo = require('../requests/catalogo.js')
const catalogoSchema = require('../schema/schema_US006-catalogo.js')

describe('US006 - Catálogo de produtos', () => {
    it('CT01 - Acessar catálogo de produtos selecionando categoria e filtro de busca', async () => {
        await catalogo.buscarProduto('', 'Ficção', 'ASC').then((resp) => {
            expect(resp.status).toEqual(200)
        })

        // Validar contrato
        const { error } = await catalogoSchema
        await expect(error).toBeUndefined()

    });
    it('CT02 - Acessar catálogo de produtos por categoria', async () => {
        await catalogo.buscarProduto('', 'Ficção', '').then((resp) => {
            expect(resp.status).toEqual(200)
        })

    });
    it('CT03 - Realizar busca de produtos apenas digitando seu nome', async () => {
        await catalogo.buscarProduto('Machado de Assis', '', '').then((resp) => {
            expect(resp.status).toEqual(200)
        })

    });
    it('CT04 - Acessar catálogo de produtos utilizando filtro de produtos', async () => {
        await catalogo.buscarProduto('', '', 'ASC').then((resp) => {
            expect(resp.status).toEqual(200)
        })

    });
});