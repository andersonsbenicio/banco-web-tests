describe("Transferencias", () => {
  beforeEach(() => {
    //Arrange
    cy.visit("/");
    cy.fazerLoginComCredenciaisValidas();
  });
  it("Deve transferir quando informo dados e valor validos", () => {
    //Act
    cy.realizarTransferencia("Ana Pereira", "Carlos Souza", "11");

    //Assert
    cy.verificarMensagemdNoToast("Transferência realizada!");
  });

  it("Deve apresentar erro quando tentar transferir mais que 5 mil sem o token", () => {
    //Act
    cy.realizarTransferencia("Ana Pereira", "Carlos Souza", "5000.01");

    //Assert
    cy.verificarMensagemdNoToast(
      "Autenticação necessária para transferências acima de R$5.000,00."
    );
  });
});
