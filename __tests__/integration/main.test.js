const app  = require('../../src/app');

const supertest = require('supertest');

describe('testando rota principal', () => {
    it('deve retornar 200 para rota principal /',async () => {
        const response = await supertest(app).get('/');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('status');
        expect(response.body).toHaveProperty('mensagem');

    })
})