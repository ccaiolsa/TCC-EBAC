import http from 'k6/http';
import { loginAdm } from './login.js';
const email = __ENV.EMAIL_API;
const senha = __ENV.SENHA_API;

export class Cesta {
    primeiroProduto(token) {
        const url = 'http://localhost:3000/api/basket';
        const params = {
            headers: {
                'Authorization': `${token}`
            },
        };

        const response = http.get(`${url}/2`, params)

        if (!response.status === 200) {
            console.log("Status: ", response.status)
            console.log("Body: ", response.body)
            return null
        } else {
            const body = JSON.parse(response.body)
            console.log('ID ENCONTRADO: ', body.items[0].id)
            return body.items[0].id
        }

    }

    limparCesta(token) {
        const url = 'http://localhost:3000/api/basket';
        const params = {
            headers: {
                'Authorization': `${token}`
            },
        };
        const payload = JSON.stringify(
            {
                userId: 2
            }
        )

        const response = http.del(`${url}/2`, payload, params)

        if (!response.status === 200) {
            console.log("Status: ", response.status)
            console.log("Body: ", response.body)
            return null
        } else {
            console.log('STATUA DA REMOÇÃ: ', response.status)
            console.log('BODY DO CANCELAMENTO: ', response.body)
            return JSON.parse(response.body)
        }

    }

}

