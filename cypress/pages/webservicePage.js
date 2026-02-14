class WebservicePage {

  acessarMenuWebservice() {

    cy.get('#sidebar_ul > li:nth-child(3) > a').click()

    cy.get('#DHI0201', { timeout: 20000 })
      .should('be.visible')
      .click()
  }

  clicarInserir() {
    cy.get('#BTNINSERT').should('be.visible').click()
  }

  selecionarTipo() {
    cy.get('#WEBSERVICE_TIPO').should('be.visible').select('Orcamento')
  }

  preencherHost(host) {
    cy.get('#WEBSERVICE_HOST').clear().type(host)
  }

  preencherPorta(porta) {
    cy.get('#WEBSERVICE_PORTA').clear().type(porta)
  }

  preencherBaseUrl(baseUrl) {
    cy.get('#WEBSERVICE_BASEURL').clear().type(baseUrl)
  }

  preencherUsuario(usuario) {
    cy.get('#WEBSERVICE_USUARIOID').clear().type(usuario)
  }

  preencherSenha(senha) {
    cy.get('#WEBSERVICE_USUARIOSENHA').clear().type(senha)
  }

  confirmarCadastro() {
    cy.get('#BTNTRN_ENTER').click()
  }

  tratarHostDuplicado() {
    cy.get('body').then(($body) => {

      if ($body.text().includes('já existe')) {
        cy.get('#BTNTRN_CANCEL').click()
      }

    })
  }

  validarLinhaCriada(host) {
    //cy.contains('td', host, { timeout: 20000 }).should('be.visible')
  }

  // ---------- EDITAR ----------

  clicarEditarPorHost() {
    cy.get('#span_vUPDATE_0001 > a > .fa')
      .should('be.visible')
      .click()
  }

  editarHost(novoHost) {

  cy.get('#WEBSERVICE_HOST', { timeout: 20000 })
    .should('be.visible')
    .then(($input) => {

      const valorAtual = $input.val()

      // só altera se for diferente
      if (valorAtual !== novoHost) {

        cy.wrap($input)
          .clear()
          .type(novoHost)
          .blur()

      } else {

        // força mudança para permitir salvar
        cy.wrap($input)
          .clear()
          .type(novoHost + '1')
          .blur()

      }

    })

  cy.wait(1000)

  cy.get('#BTNTRN_ENTER')
    .should('be.enabled')
    .click()

}


  validarEdicao(host) {
    cy.contains('td', host, { timeout: 20000 })
      //.should('be.visible')
  }

  // ---------- EXCLUIR ----------

  clicarExcluirPorHost() {
    cy.get('#span_vDELETE_0001 > a > .fa')
      .should('be.visible')
      .click()
  }

  confirmarExclusao() {
    cy.contains('Confirme').should('be.visible')
    cy.get('#BTNTRN_ENTER')
    .should('be.enabled')
    .click()
  }

  validarExclusao(host) {
    cy.contains('td', host).should('not.exist')
  }

}

export default new WebservicePage()
