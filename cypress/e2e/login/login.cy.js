import loginPage from '../pages/loginPage'

describe('Login Hub Integration', () => {

  it('Login com sucesso', () => {

    loginPage.realizarLogin('mercia.teste', 'mercia@2026')
    loginPage.validarLoginSucesso()

  })

  it('Login inválido', () => {

    loginPage.realizarLogin('usuario.invalido', 'senhaerrada')
    loginPage.validarErroLogin()

  })

})
