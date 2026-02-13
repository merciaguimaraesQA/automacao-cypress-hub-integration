
# Automação de Testes - Hub Integration (DealerNet)

Projeto de automação de testes E2E utilizando Cypress para validação de funcionalidades do sistema Hub Integration.

## Objetivo

Automatizar cenários críticos da aplicação:

- Login com sucesso
- Login inválido
- Cadastro de Webservice
- Alteração de Webservice
- Exclusão de Webservice

## Stack utilizada

- Cypress
- JavaScript
- Page Object Pattern
- Git

## Estrutura do projeto

cypress/
├── e2e
│ ├── login.cy.js
│ ├── smoke.cy.js
│ └── webservice.cy.js
├── pages
│ ├── loginPage.js
│ └── webservicePage.js
├── support
│ ├── commands.js
│ └── e2e.js
cypress.config.js


## Como executar o projeto

**1- Clonar repositório

git clone https://github.com/merciaguimaraesQA/automacao-cypress-hub-integration.git

**2- Instalar dependências

npm install

**3- Executar Cypress

npx cypress open

ou

npx cypress run


## Observações técnicas

Durante a execução foi identificado bloqueio de certificado SSL no ambiente externo da aplicação, impedindo a execução completa via Cypress em browser automatizado.

A automação foi estruturada considerando ambiente corporativo interno, onde o certificado é confiável.

Com acesso ao ambiente interno ou certificado válido, os testes executam normalmente.

## Boas práticas aplicadas

- Page Object Pattern
- Separação de responsabilidades
- Testes independentes
- Reutilização de métodos
- Estrutura preparada para CI/CD

## Contexto do desafio

Este projeto foi desenvolvido como parte de um teste técnico para automação de testes utilizando Cypress, com foco em validar o fluxo de login e o CRUD da funcionalidade Webservice da aplicação Hub Integration.

O objetivo foi demonstrar:

- Estruturação de automação E2E
- Aplicação de Page Object Model
- Organização de testes por responsabilidade
- Boas práticas de legibilidade e manutenção
- Visão de QA orientada a qualidade e rastreabilidade

---

## Abordagem de Qualidade

A automação foi pensada considerando:

- Reutilização de componentes (Pages)
- Separação entre lógica de teste e elementos da tela
- Validações visuais e funcionais
- Simulação de cenários reais de uso do usuário
- Preparação para evolução futura em CI/CD

Os testes implementados cobrem:

### Login
- Login com sucesso
- Login com falha (credenciais inválidas)

### Webservice
- Cadastro
- Alteração
- Exclusão

---

## Decisões técnicas

Foi utilizado:

- Cypress como framework principal de automação
- Page Object Model para desacoplamento
- Estrutura separada por:
  - pages
  - e2e
  - support
- Seletores obtidos diretamente do DOM da aplicação
- Validações baseadas em comportamento do usuário

A automação foi pensada para ser:

- simples de manter
- escalável
- compreensível por outros QAs e desenvolvedores

---

## Limitação encontrada

Durante a execução da automação, foi identificado um comportamento de certificado SSL inválido no ambiente disponibilizado:

ERR_SSL_SERVER_CERT_BAD_FORMAT

Isso impactou a execução do Cypress em modo headless/eletron, impedindo a inicialização automática do navegador em algumas tentativas.

Mesmo assim:

- A estrutura da automação foi construída
- Os cenários foram implementados
- Os seletores foram validados manualmente
- O fluxo foi testado via navegador

Em ambiente corporativo com certificado válido ou via configuração interna de rede, a execução tende a ocorrer normalmente.

---

## Visão como QA

Mais do que automatizar passos, o objetivo foi estruturar uma base de testes que:

- possa evoluir para pipeline
- reduza regressões
- aumente confiabilidade do produto
- permita expansão para testes de API e integração

A automação foi construída considerando o papel do QA como agente de qualidade e não apenas executor de testes.


