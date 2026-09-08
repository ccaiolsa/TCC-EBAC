const request = require('supertest');

class User {

    async registrar() {

        const response = await request(
            'https://lojaebac.ebaconline.art.br/wp-json'
        )
            .post('/wc/v3/customers/')
            .send({
                name: "admin_ebacm",
                password: "@admin!&b@c!2022"
            });

        return response;
    }
}

module.exports = User;