const joi = require('joi')

const detalheSchema = joi.object(
    {
        message: joi.string(),
        user: joi.object({
            id: joi.number().integer(),
            name: joi.string(),
            email: joi.string(),
            isAdmin: joi.boolean(),
            updated_at: joi.date()
        })
    }
)
const { error, value } = detalheSchema.validate(
    {
        message: "Usuário atualizado com sucesso.",
        user: {
            id: 2,
            name: "João da Silva Santos",
            email: "joao.novo@email.com",
            isAdmin: false,
            updated_at: "2026-09-13T18:11:18.419Z"
        }
    }
)

module.exports = { detalheSchema }

