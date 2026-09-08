const request = require('supertest');
const User = require('../requests/user.js')

describe('Realizar login', () => {
    it('Deve realizar login com sucesso', () => {
        const user = new User
        const response = user.registrar()
        console.log('==============================');
        console.log('STATUS:', response.status);
        console.log('STATUS CODE:', response.statusCode);
        console.log('HEADERS:', response.headers);
        console.log('BODY:', response.body);
        console.log('TEXT:', response.text);
        console.log('==============================');
    });
});