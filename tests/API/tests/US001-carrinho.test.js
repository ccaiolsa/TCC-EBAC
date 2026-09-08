const request = require('supertest');
const Produtos = require('../requests/produtos.js')
const produtosSchema = require('../schema/schema_US001-carrinho.js')

describe('Deve listar produtos', () => {

    it('Deve listar produtos', async () => {
        const produtos = new Produtos
        produtos.listarProdutos()

    });

});