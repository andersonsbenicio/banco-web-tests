describe("Login", () => {
  beforeEach(() => {
    //Arrange
    cy.visit("/");
    cy.screenshot("apos-visitar-pagina");
  });
  it("Login com dados válidos deve permitir entrada no sistema", () => {
    //Acts
    cy.fixture("credenciais").then((credenciais) => {
      cy.get("#username").click().type(credenciais.valida.usuario);
      cy.get("#senha").click().type(credenciais.valida.senha);
    });

    cy.screenshot("apos-preencher-dados-validos");
    //cy.get("#login-section > .btn").click();
    cy.contains("button", "Entrar").click();
    cy.screenshot("apos-clicar-no-botao-entrar");

    //Asserts
    cy.contains("h4", "Realizar Transferência").should("be.visible");
  });

  it("Login com dados inválidos deve apresentar mensagem com erro", () => {
    //Acts
    cy.fixture("credenciais").then((credenciais) => {
      cy.get("#username").click().type(credenciais.invalida.usuario);
      cy.get("#senha").click().type(credenciais.invalida.senha);
    });

    cy.contains("button", "Entrar").click();

    //Asserts
    cy.get(".toast").should("have.text", "Erro no login. Tente novamente.");
  });
});
