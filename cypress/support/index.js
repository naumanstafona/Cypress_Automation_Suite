import './commands'
import 'cypress-file-upload'
require('@cypress/xpath');
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
});