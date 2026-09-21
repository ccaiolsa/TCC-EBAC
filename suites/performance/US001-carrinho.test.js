import { describe, expect } from 'https://jslib.k6.io/k6chaijs/4.5.0.1/index.js';
import http from 'k6/http';
import { check } from 'k6';
import { loginAdm } from './requests/login.js';

export const options = {
    /*
    stages: [
        { duration: '20s', target: 20 },
        { duration: '2m', target: 20 }
    ],
    */
};

export default () => {
    const token = loginAdm(__ENV.EMAIL_API, __ENV.SENHA_API)
    const url = 'http://localhost:3000/api/reservations';
    const params = {
        headers: {
            'Content-type': 'application/json',
            'Authorization': `${token}`
        },
    };
    const payload = JSON.stringify(
        {
            "bookId": 5
        }
    );

    const resp = http.post(url, payload, params)

    describe('CT01 - Adicionar item ao carrinho com sucesso', () => {
        check(resp, {'Adicionado com sucesso': (r) => r.status === 201})
        
    });

};