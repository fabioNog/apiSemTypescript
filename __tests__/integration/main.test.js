const app  = require('../../src/app');

const supertest = require('supertest');

describe('testando rota principal', () => {
    it('deve retornar 200 para rota principal /',async () => {
        const response = await supertest(app).get('/');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('status');
        expect(response.body).toHaveProperty('mensagem');

    });

    it('deve recuperar o id de um usuario a partir da rota /teste/:id', async () => {
        const response = await supertest(app).get('/test/1000');
        console.log(response.body);
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toBe('1000');
    })
})