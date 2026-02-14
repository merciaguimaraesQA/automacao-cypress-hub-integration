class LoginPage {

  acessarTelaLogin() {
    cy.visit('/login.aspx', { failOnStatusCode: false })
    cy.get('#vSECUSERNAME', { timeout: 20000 }).should('be.visible')
  }

  preencherUsuario(usuario) {
    cy.get('#vSECUSERNAME').clear().type(usuario)
  }

  preencherSenha(senha) {
    cy.get('#vSECUSERPASSWORD').clear().type(senha)
  }

  clicarEntrar() {
    cy.get('#BTNENTER').should('be.enabled').click()
  }

  validarLoginSucesso() {
    cy.url().should('include', '/home')
  }

  realizarLogin(usuario, senha) {
    this.acessarTelaLogin()
    this.preencherUsuario(usuario)
    this.preencherSenha(senha)
    this.clicarEntrar()
    this.validarLoginSucesso()
  }
}

export default new LoginPage()
