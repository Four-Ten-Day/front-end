/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    hideMap(): Chainable<any>;
  }
}
