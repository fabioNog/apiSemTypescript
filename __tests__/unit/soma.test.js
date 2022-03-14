const soma = require('../../src/utils/soma')

describe('Exemplo de teste de soma', () =>{
    it('deve somar 2 + 2 igual a 4', () => {
        expect(soma(2,2)).toBe(4);
    })
}); 