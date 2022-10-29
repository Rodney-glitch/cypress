/// <reference types="Cypress" />
const testData = require("../../fixtures/data.json");
import LoginPage from "../../pageObjects/admin/LoginPage";

const loginPage = new LoginPage();
const invalidEmail = testData.invalidEmail;
const invalidPassword = testData.invalidPassword;

describe("Login Module", function () {
  before("Open URL", function () {
    cy.visit(Cypress.env("adminUrl"));
  });
  it("should verify that user cannot login with empty username and password", function () {
    loginPage.pageLogo.should("be.visible");
    loginPage.emailField.clear();
    loginPage.passwordField.clear();
    loginPage.loginBtn.click();
    loginPage.errorFieldMessage
      .contains("Email is required")
      .should("be.visible");
    loginPage.errorFieldMessage
      .contains("Password is required")
      .should("be.visible");
  });
  it("should verify that user cannot login with invalid email and password", function () {
    loginPage.emailField.clear().type(invalidEmail);
    loginPage.passwordField.clear().type(invalidPassword);
    loginPage.loginBtn.click();
    loginPage.loginMsg
      .should("be.visible")
      .and("contain.text", "Invalid credentials");
    loginPage.loginBGMessage.should(
      "have.css",
      "background-color",
      "rgb(231, 76, 60)"
    );
    loginPage.loginMsgCancelBtn.click();
  });
});
// cy.get('#item:invalid')
//   .invoke('prop', 'validationMessage')
//   .should('equal', 'Please fill out this field.')
