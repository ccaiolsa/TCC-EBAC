const request = require('supertest');
const user = require('../requests/user.js')
const minha_contaSchema = require('../schema/schema_US007-minha_conta.js')

const email = process.env.EMAIL_API;
const senha = process.env.SENHA_API;

const num = Math.floor(Math.random() * 1000)
let userId

describe('US007 - Adicionar novo usuário', () => {

    it('CT01 - Realizar registro de usuário com sucesso', async () => {
        await user.novoUsario(`usuario${num}`, `usuario${num}@email.com`, `senha${num}`).then((resp) => {
            userId = resp.body.user.id
            expect(resp.status).toEqual(201)
        })

        // Deletar usuário criado
        await user.deletarUsuario(userId, email, senha)

        // Validar contrato
        const { error } = await minha_contaSchema
        await expect(error).toBeUndefined()

    });

    it('CT02 - Fazer cadastro sem preencher senha', async () => {
        await user.novoUsario(`usuario${num}`, `usuario${num}@email.com`, ``).then((resp) => {
            expect(resp.status).toEqual(400)
            expect(resp.body.message).toBe('Nome, email e senha são obrigatórios.')
        })

    });

    it('CT03 - Fazer cadastro sem preencher email', async () => {
        await user.novoUsario(`usuario${num}`, ``, `senha${num}`).then((resp) => {
            expect(resp.status).toEqual(400)
            expect(resp.body.message).toMatch('Nome, email e senha são obrigatórios.')
        })

    });

    it('CT04 - Realizar registro sem preencher um campo', async () => {
        await user.novoUsario(`usuario${num}`, ``, ``).then((resp) => {
            expect(resp.status).toEqual(400)
            expect(resp.body.message).toMatch('Nome, email e senha são obrigatórios.')
        })

    });
});