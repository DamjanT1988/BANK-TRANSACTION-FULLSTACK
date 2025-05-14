describe('Transaction Management App', () => {
  it('submits a transaction and updates the list', () => {
    cy.visit('http://localhost:3000');

    cy.get('input[name="accountId"]').type('12345');
    cy.get('input[name="amount"]').type('100');
    cy.get('button[type="submit"]').click();

    cy.contains('Transferred 100$ to account 12345');
  });

  it('displays an error for invalid input', () => {
    cy.visit('http://localhost:3000');

    cy.get('input[name="amount"]').type('100');
    cy.get('button[type="submit"]').click();

    cy.contains('Please enter valid Account ID and Amount.');
  });

  it('updates the balance after transaction', () => {
    cy.visit('http://localhost:3000');

    cy.get('input[name="accountId"]').type('abc-acc');
    cy.get('input[name="amount"]').type('-50');
    cy.get('button[type="submit"]').click();

    cy.contains('Transferred 50$ from account abc-acc');
    cy.contains('The current account balance is -50$');
  });
});
