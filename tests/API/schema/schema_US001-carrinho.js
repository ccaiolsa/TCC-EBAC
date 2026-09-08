const joi = require('joi')

const unidadeSchema = joi.object({

    id: joi.number().integer(),
    name: joi.string(),
    price: joi.number().integer(),
    status: joi.string(),
    stock_quantity: joi.number().integer(),

})
const produtosSchema = joi.array()
    .items(unidadeSchema)
    .required()

module.exports = produtosSchema
