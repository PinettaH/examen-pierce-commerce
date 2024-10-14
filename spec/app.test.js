import app from "../app.js";
import request from 'supertest';

describe('GET /api/stats', () => {

    test('deberia responder con un codigo de estado 200', async () => {
        const response = await request(app).get('/api/stats').send()
        expect(response.statusCode).toBe(200)
    })

})

describe('POST /api/validate', () => {

    test('deberia recibir un array de strings y actualizar el conteo de positivos y negativos respond with 200 status code', async () => {
        const response = await request(app)
            .post('/api/validate')
            .send({ adn: ["0RH", "0RH-", "0RH+", "2RH4", "2RH1", "0RH1"] })

        expect(response.status).toBe(200);

    })

})

describe('POST /api/validate', () => {
    test('deberia devolver un codigo de estado 403 si no encuentra un patron correcto', async () => {
        const response = await request(app)
            .post('/api/validate')
            .send({ adn: ["0RH", "0RH", "0RH", "2RH4", "2RH1", "0RH1"] })

        expect(response.status).toBe(403)
    })
})