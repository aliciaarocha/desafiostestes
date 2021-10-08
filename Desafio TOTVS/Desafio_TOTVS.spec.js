// <reference types="cypress"> />
// Desafio 03 - TOTVS (Github)

import validar from '../../../support/pagesobjects_TOTVS/index'
const el = require('../../../support/pagesobjects_TOTVS/elements').ELEMENTS

describe("Validação de um produto", () => {
 
    beforeEach(() => {
       validar.GravarNomeePreco();
        
    })
    it( "Acessar o site e pesquisar por produto", function () {
        validar.acessarLogin();
        validar.PreencherBusca();
        validar.SelecionarProduto();
        cy.get(el.produto1).should('contain', this.ProdutoEscolhido);
        validar.AcessarCarrinhodeCompra();
        cy.get(el.valor).should('contain', this.valorProduto)
        cy.get(el.produto).should('contain', this.ProdutoEscolhido)
        
    })
})