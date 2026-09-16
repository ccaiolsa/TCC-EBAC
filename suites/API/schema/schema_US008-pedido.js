const joi = require('joi')


const pedidoSchema = joi.object(
    {
        message: joi.string(),
        bookTitle: joi.string(),
        existingReservation: joi.object(
            {
                id: joi.number().integer(),
                status: joi.string(),
                reservationDate: joi.date()
            })
    })
const { error, value } = pedidoSchema.validate({

    message: 'Você já possui uma reserva ativa para este livro.',
    bookTitle: 'O Senhor dos Anéis: A Sociedade do Anel',
    existingReservation:
    {
        id: 3,
        status: 'active',
        reservationDate: '2026-09-13 19:47:41'
    }
})
module.exports = { pedidoSchema }