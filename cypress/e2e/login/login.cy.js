import loginPage from '../../pages/loginPage'


describe('Login Hub Integration', () => {

  it('Login com sucesso', () => {

    loginPage.realizarLogin('mercia.teste', 'Mercia@2026')
    loginPage.validarLoginSucesso()

  })

  it('Login inválido', () => {

  loginPage.acessarTelaLogin()
  loginPage.preencherUsuario('usuario.invalido')
  loginPage.preencherSenha('123456')
  loginPage.clicarEntrar()

  //loginPage.validarErroLogin()

})


})
