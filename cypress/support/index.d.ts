/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    hideMap(): Chainable<any>;
    login(): Chainable<any>;
    mockServerSideProps(
      pathname: string,
      props: Record<string, any>
    ): Chainable<any>;
  }
}
