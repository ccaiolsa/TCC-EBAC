const joi = require('joi')


const minha_contaSchema = joi.object({
    message: joi.string(),
    user: joi.object({
        id: joi.number().integer(),
        name: joi.string(),
        isAdmin: joi.boolean(),
        created_at: joi.date()
    })
})

const { error, value } = minha_contaSchema.validate({
    message: 'Usuário criado com sucesso.',
    user: {
        id: 9,
        name: 'usuario835',
        email: 'usuario835@email.com',
        isAdmin: false,
        created_at: '2026-09-13T19:16:31.557Z'
    }
})

module.exports = { minha_contaSchema }