import loginPage from '../pages/loginPage'

describe('Smoke - acesso principal', () => {

  it('Aplicação sobe e permite login', () => {

    loginPage.realizarLogin('mercia.teste', 'mercia@2026')
    loginPage.validarLoginSucesso()

  })

})
