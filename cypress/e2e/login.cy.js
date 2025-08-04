describe("Login", () => {
  it("Login com dados válidos deve permitir entrada no sistema", () => {
    //Arrange
    cy.visit("http://localhost:4000");

    //Acts
    cy.get("#username").click().type("julio.lima");
    cy.get("#senha").click().type("123456");
    //cy.get("#login-section > .btn").click();
    cy.contains("button", "Entrar").click();

    //Asserts
    cy.contains("h4", "Realizar Transferência").should("be.visible");
  });

  it("Login com dados inválidos deve apresentar mensagem com erro", () => {
    //Arrange
    cy.visit("http://localhost:4000");

    //Acts
    cy.get("#username").click().type("julio.lima");
    cy.get("#senha").click().type("654321");
    cy.contains("button", "Entrar").click();

    //Asserts
    cy.get(".toast").should("have.text", "Erro no login. Tente novamente.");
  });
});
