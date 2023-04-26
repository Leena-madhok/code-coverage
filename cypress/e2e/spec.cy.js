describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/');
    cy.get("p").should("have.text","Edit src/App.js and save to reload.")
  })
})