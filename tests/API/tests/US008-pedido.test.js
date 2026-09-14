const request = require('supertest');
const pedido = require('../requests/pedido.js')
const pedidoSchema = require('../schema/schema_US008-pedido.js')

const email = process.env.EMAIL_API;
const senha = process.env.SENHA_API;

let produtoId = 1
let reservaId

describe('US008 - Realizar reserva', () => {

    it('CT01 - Realizar reserva com sucesso', async () => {
        await pedido.fazerPedido(email, senha, produtoId).then((resp) => {
            reservaId = resp.body.reservation.id
            expect(resp.status).toEqual(201)

        })

        // Esvaziar reserva
        await pedido.retirarReserva(email, senha, reservaId).then((resp) => {
            expect(resp.status).toEqual(200)
        })

        // validar contrato
        const { error } = pedidoSchema
        await expect(error).toBeUndefined()

    });

    it('CT02 - Atualizar reserva', async () => {
        await pedido.fazerPedido(email, senha, produtoId).then((resp) => {
            reservaId = resp.body.reservation.id
            expect(resp.status).toEqual(201)

        })

        // Atualizar reserva
        await pedido.atualizarPedido(email, senha, reservaId).then((resp) => {
            expect(resp.status).toEqual(200)
            expect(resp.body.message).toBe('Observações atualizadas com sucesso.')
        })
    });

    it('CT03 - Cancelar reserva', async () => {
        await pedido.retirarReserva(email, senha, reservaId).then((resp) => {
            expect(resp.status).toEqual(200)
        })
    });

});