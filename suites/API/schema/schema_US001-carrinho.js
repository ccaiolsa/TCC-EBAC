const joi = require('joi')

const carrinhoSchema = joi.object({

    message: joi.string(),
    itemId: joi.number().integer(),
    bookTitle: joi.string(),
    bookAuthor: joi.string(),
    addedDate: joi.date()
})
const {error, value} = carrinhoSchema.validate({
    message: 'Livro adicionado ao carrinho com sucesso.',
    itemId: 4,
    bookTitle: 'Dom Casmurro',
    bookAuthor: 'Machado de Assis',
    addedDate: '2026-09-13T14:59:45.308Z'
})

module.exports = {carrinhoSchema}
