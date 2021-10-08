//ações da página
const el = require('../pagesobjects_TOTVS/elements').ELEMENTS
class validar {

GravarNomeePreco(){
    cy.visit(el.url);
    cy.get(el.busca).type("construção {enter}");
    cy.get(el.produto2).invoke('text').as('ProdutoEscolhido');
    cy.get(el.comprar).click();
    cy.get(el.valor1).invoke('text').as('valorProduto');
}
acessarLogin(){
    cy.visit(el.url);
 }
 PreencherBusca(){
    cy.get(el.busca).type("construção {enter}");
}

SelecionarProduto(){
    cy.get(el.comprar).click();

}
AcessarCarrinhodeCompra(){
    cy.get(el.carrinho).click();
}
}


export default new validar();