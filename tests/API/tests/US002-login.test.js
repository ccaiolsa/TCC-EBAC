const user = require('../requests/user.js')
const userSchema = require('../schema/schema_US002-login.js')

const email = process.env.EMAIL_API;
const senha = process.env.SENHA_API;

describe('US002 - Funcionalidade Login', () => {
    it('CT01 - Realizar login com sucesso', async () => {
        await user.loginAdm(email, senha).then((resp) => {
            expect(resp.status).toEqual(200)
            expect(resp.body)

        })

        // Validação de contrato
        const { error } = await userSchema
        await expect(error).toBeUndefined()
    });

    it('CT02 - Tentar realizar login com email inválido', async () => {
        await user.loginAdm('user1_ebac', senha).then((resp) => {
            expect(resp.status).toEqual(400)
            expect(resp.body.message).toEqual('Formato de email inválido.')

        })
    });

    it('CT03 - Tentar realizar login com senha inválida', async () => {
        await user.loginAdm(email, 'sw!ebac@test').then((resp) => {
            expect(resp.status).toEqual(401)
            expect(resp.body.message).toEqual('Email ou senha incorretos.')

        })
    });

    it('CT04 - Tentar realizar login com email e senha inválidos', async () => {
        await user.loginAdm('user1_ebac', 'sw!ebac@test').then((resp) => {
            expect(resp.status).toEqual(400)
            expect(resp.body.message).toEqual('Formato de email inválido.')

        })
    });
});