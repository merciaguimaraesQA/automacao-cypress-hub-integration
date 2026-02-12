import loginPage from '../pages/loginPage'
import webservicePage from '../pages/webservicePage'

describe('CRUD Webservice', () => {

  const hostOriginal = 'teste.com.br'
  const hostEditado = 'teste2.com.br'

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
    webservicePage.preencherHost(hostOriginal)
    webservicePage.preencherPorta('43')
    webservicePage.preencherBaseUrl('Dealernet')
    webservicePage.preencherUsuario('Teste')
    webservicePage.preencherSenha('Teste@teste')

    webservicePage.confirmarCadastro()
    webservicePage.validarLinhaCriada(hostOriginal)

  })

  it('Editar Webservice', () => {

    webservicePage.clicarEditarPorHost(hostOriginal)
    webservicePage.editarHost(hostEditado)
    webservicePage.validarEdicao(hostEditado)

  })

  it('Excluir Webservice', () => {

    webservicePage.clicarExcluirPorHost(hostEditado)
    webservicePage.confirmarExclusao()
    webservicePage.validarExclusao(hostEditado)

  })

})
