import loginPage from '../pages/loginPage'
import webservicePage from '../pages/webservicePage'

describe('CRUD Webservice', () => {

  beforeEach(() => {

    loginPage.acessarTelaLogin()
    loginPage.preencherUsuario('mercia.teste')
    loginPage.preencherSenha('mercia@2026')
    loginPage.clicarEntrar()
    loginPage.validarLoginSucesso()

    webservicePage.acessarMenuWebservice()

  })

  it('Cadastrar Webservice', () => {

    webservicePage.clicarInserir()

    webservicePage.selecionarTipo('Orçamento')
    webservicePage.preencherHost('teste.com.br')
    webservicePage.preencherPorta('43')
    webservicePage.preencherBaseUrl('Dealernet')
    webservicePage.preencherUsuario('Teste')
    webservicePage.preencherSenha('Teste@teste')

    webservicePage.confirmarCadastro()
    webservicePage.validarLinhaCriada('teste.com.br')

  })

  it('Alterar Webservice', () => {

    // editar registro criado anteriormente
    webservicePage.clicarEditarPorHost('teste.com.br')

    cy.get('#WEBSERVICE_HOST')
      .clear()
      .type('teste2.com.br')

    webservicePage.confirmarCadastro()
    webservicePage.validarLinhaCriada('teste2.com.br')

  })

  it('Excluir Webservice', () => {

    // excluir registro alterado
    webservicePage.clicarExcluirPorHost('teste2.com.br')

    webservicePage.confirmarExclusao()
    webservicePage.validarExclusao('teste2.com.br')

  })

})
