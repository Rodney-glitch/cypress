class LoginPage {
  get pageLogo() {
    return cy.get(".auth-left-container > .img-fluid");
  }
  get emailField() {
    return cy.get("[data-testid=email]");
  }
  get passwordField() {
    return cy.get("[data-testid=password]");
  }
  get loginBtn() {
    return cy.get("[data-testid=login]");
  }
  get errorFieldMessage() {
    return cy.get(".error");
  }
  get loginBGMessage() {
    return cy.get(".Toastify__toast--error");
  }
  get loginMsg() {
    return cy.get(".Toastify__toast-body");
  }
  get loginMsgCancelBtn() {
    return cy.get(".Toastify__close-button > svg > path");
  }
}
export default LoginPage;
