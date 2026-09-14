const http = require('supertest')
const request = http('http://localhost:3000');


class User {

    async loginAdm(email, senha) {

        const response = await request.post('/api/login')
            .send(
                {
                    "email": email,
                    "password": senha
                }
            )
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)

        return response;
    }

    async novoUsario(nome, email, senha) {
        const response = await request.post('/api/users')
            .send(
                {
                    "name": `${nome}`,
                    "email": `${email}`,
                    "password": `${senha}`
                }
            )
            return response
    }

    async deletarUsuario(userId, email, senha){
        let token
        await this.loginAdm(email, senha).then((resp)=>{
            token = resp.body.token_for_swagger            

        })
        const response = request.delete(`/api/users/${userId}`)
            .set('Authorization', `Bearer ${token}`)
        return response
    }
}

module.exports = new User();