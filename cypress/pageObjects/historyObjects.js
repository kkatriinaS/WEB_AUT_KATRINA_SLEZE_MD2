class HistoryObjects {
static clickMenu() {
  cy.get('#menu-toggle').click();
  cy.get('#sidebar-wrapper').should('have.class', 'active');
  cy.get("#sidebar-wrapper a[href='history.php#history']").should("be.visible").click();
  cy.get('#history').should('contain', 'No appointment')

}};
export default HistoryObjects;