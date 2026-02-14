import loginPage from '../../pages/loginPage'
import webservicePage from '../../pages/webservicePage'

describe('CRUD Webservice E2E', () => {

  const hostOriginal = 'teste.com.br'
  const hostEditado = 'teste2.com.br'

  it('Fluxo completo: cadastrar, editar e excluir Webservice', () => {

    loginPage.realizarLogin('mercia.teste', 'Mercia@2026')
    loginPage.validarLoginSucesso()

    webservicePage.acessarMenuWebservice()

    // CADASTRAR
    webservicePage.clicarInserir()
    webservicePage.selecionarTipo()
    webservicePage.preencherHost(hostOriginal)
    webservicePage.preencherPorta('43')
    webservicePage.preencherBaseUrl('Dealernet')
    webservicePage.preencherUsuario('Teste')
    webservicePage.preencherSenha('Teste@teste')
    webservicePage.confirmarCadastro()
    webservicePage.tratarHostDuplicado()
    webservicePage.validarLinhaCriada(hostOriginal)

    // EDITAR
    webservicePage.clicarEditarPorHost()
    webservicePage.editarHost(hostEditado)
    webservicePage.validarEdicao(hostEditado)

    // EXCLUIR
    webservicePage.clicarExcluirPorHost()
    webservicePage.confirmarExclusao()
    webservicePage.validarExclusao(hostEditado)

  })

})
