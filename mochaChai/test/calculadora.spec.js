import { expect } from 'chai';
import Calculadora from '../src/Calculadora.js';

describe('Calculadora', () => {
    // Teste de Soma
    describe('teste de soma', () => {
        it('Deve somar 4 e 5 resultando em 9', () => {
            let resultado = Calculadora.soma(4, 5);
            expect(resultado).to.be.eq(9);
        });

        it('Deve somar números negativos', () => {
            let resultado = Calculadora.soma(-4, -5);
            expect(resultado).to.be.eq(-9);
        });

        it('Deve somar um número positivo e um negativo', () => {
            let resultado = Calculadora.soma(4, -5);
            expect(resultado).to.be.eq(-1);
        });

        it('Deve somar 0 com 5 resultando em 5', () => {
            let resultado = Calculadora.soma(0, 5);
            expect(resultado).to.be.eq(5);
        });
    });

    // Teste de Subtração
    describe('teste de subtração', () => {
        it('Deve subtrair 10 e 3 resultando em 7', () => {
            let resultado = Calculadora.subtracao(10, 3);
            expect(resultado).to.be.eq(7);
        });

        it('Deve subtrair números negativos', () => {
            let resultado = Calculadora.subtracao(-10, -3);
            expect(resultado).to.be.eq(-7);
        });

        it('Deve subtrair um número negativo de um positivo', () => {
            let resultado = Calculadora.subtracao(10, -3);
            expect(resultado).to.be.eq(13);
        });

        it('Deve subtrair 0 de 5 resultando em 5', () => {
            let resultado = Calculadora.subtracao(5, 0);
            expect(resultado).to.be.eq(5);
        });
    });

    // Teste de Multiplicação
    describe('teste de multiplicação', () => {
        it('Deve multiplicar 4 e 5 resultando em 20', () => {
            let resultado = Calculadora.multiplicacao(4, 5);
            expect(resultado).to.be.eq(20);
        });

        it('Deve multiplicar números negativos', () => {
            let resultado = Calculadora.multiplicacao(-4, -5);
            expect(resultado).to.be.eq(20);
        });

        it('Deve multiplicar um número positivo e um negativo', () => {
            let resultado = Calculadora.multiplicacao(4, -5);
            expect(resultado).to.be.eq(-20);
        });

        it('Deve multiplicar qualquer número por 0 resultando em 0', () => {
            let resultado = Calculadora.multiplicacao(0, 5);
            expect(resultado).to.be.eq(0);
        });
    });

    // Teste de Divisão
    describe('teste de divisão', () => {
        it('Deve dividir 10 por 2 resultando em 5', () => {
            let resultado = Calculadora.divisao(10, 2);
            expect(resultado).to.be.eq(5);
        });

        it('Deve dividir números negativos', () => {
            let resultado = Calculadora.divisao(-10, -2);
            expect(resultado).to.be.eq(5);
        });

        it('Deve dividir um número positivo por um negativo', () => {
            let resultado = Calculadora.divisao(10, -2);
            expect(resultado).to.be.eq(-5);
        });

        it('Deve dividir 0 por qualquer número resultando em 0', () => {
            let resultado = Calculadora.divisao(0, 5);
            expect(resultado).to.be.eq(0);
        });

        it('Deve lançar um erro ao dividir por zero', () => {
            expect(() => Calculadora.divisao(10, 0)).to.throw('Divisão por zero não é permitida.');
        });
    });

    // Teste de Potência
    describe('teste de potência', () => {
        it('Deve elevar 2 à potência de 3 resultando em 8', () => {
            let resultado = Calculadora.potencia(2, 3);
            expect(resultado).to.be.eq(8);
        });

        it('Deve elevar um número a 0 resultando em 1', () => {
            let resultado = Calculadora.potencia(5, 0);
            expect(resultado).to.be.eq(1);
        });

        it('Deve elevar 0 a qualquer potência resultando em 0', () => {
            let resultado = Calculadora.potencia(0, 5);
            expect(resultado).to.be.eq(0);
        });

        it('Deve calcular a potência de um número negativo', () => {
            let resultado = Calculadora.potencia(-2, 3);
            expect(resultado).to.be.eq(-8);
        });
    });

    // Teste de Raiz Quadrada
    describe('teste de raiz quadrada', () => {
        it('Deve calcular a raiz quadrada de 9 resultando em aproximadamente 3', () => {
            let resultado = Calculadora.raizQuadrada(9);
            expect(resultado).to.be.closeTo(3, 0.00001);
        });

        it('Deve calcular a raiz quadrada de 0 resultando em 0', () => {
            let resultado = Calculadora.raizQuadrada(0);
            expect(resultado).to.be.closeTo(0, 0.00001);
        });

        it('Deve lançar um erro ao calcular a raiz quadrada de um número negativo', () => {
            expect(() => Calculadora.raizQuadrada(-9)).to.throw('Não é possível calcular a raiz quadrada de um número negativo.');
        });

        it('Deve calcular a raiz quadrada de 16 resultando em aproximadamente 4', () => {
            let resultado = Calculadora.raizQuadrada(16);
            expect(resultado).to.be.closeTo(4, 0.00001);
        });
    });
});
