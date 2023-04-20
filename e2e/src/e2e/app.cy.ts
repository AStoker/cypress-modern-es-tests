import { getGreeting } from '../support/app.po';

import { Interval } from '../../../src/app/interval';

describe('modern-es-tests', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');
  
    const interval = new Interval(1, 2, 3);
    console.log(interval);

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome modern-es-tests');
  });
});
