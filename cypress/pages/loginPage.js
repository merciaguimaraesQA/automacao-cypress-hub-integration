class LoginPage {

  acessarTelaLogin() {
    cy.visit('/login.aspx', { failOnStatusCode: false })

    // garante que a tela carregou
    cy.get('#vSECUSERNAME', { timeout: 20000 })
      .should('be.visible')
  }

  preencherUsuario(usuario) {
    cy.get('#vSECUSERNAME')
      .should('be.visible')
      .clear()
      .type(usuario)
  }

  preencherSenha(senha) {
    cy.get('#vSECUSERPASSWORD')
      .should('be.visible')
      .clear()
      .type(senha)
  }

  clicarEntrar() {
    cy.get('#BTNENTER')
      .should('be.enabled')
      .click()
  }

  validarLoginSucesso() {
    cy.contains('Hub Integration', { timeout: 20000 })
      .should('be.visible')
  }

  validarErroLogin() {
    // valida mensagem dinâmica (toast pnotify)
    cy.get('.ui-pnotify-text', { timeout: 10000 })
      .should('be.visible')
      .and('contain.text', 'inválido')
  }

  // método reutilizável para login direto
  realizarLogin(usuario, senha) {
    this.acessarTelaLogin()
    this.preencherUsuario(usuario)
    this.preencherSenha(senha)
    this.clicarEntrar()
  }

}

export default new LoginPage()
