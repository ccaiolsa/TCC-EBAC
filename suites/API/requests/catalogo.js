const http = require('supertest')
const request = http('http://localhost:3000');


class Catalogo {

    async buscarProduto(nome, categoria, filtro) {

        const response = await request.get('/api/books')
            .send(
                {
                    search:`${nome}`,
                    category: `${categoria}`,
                    orderBy: `${filtro}`
                }
            )

        return response;
    }
    
}

module.exports = new Catalogo();