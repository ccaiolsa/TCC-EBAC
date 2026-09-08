const request = require('supertest');

class Produtos {
    async listarProdutos() {
        const response = await request('lojaebac.ebaconline.art.br/wp-json')
            .get('/wc/v3/products/')
            .expect(200)
            .expect('Content-Type', '/json/')
        return response
    }

}


module.exports = Produtos