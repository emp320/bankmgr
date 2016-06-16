const expect = require('chai').expect;
const Account = require('../lib/account');

describe('Account', function () {
  it('should create a bank account', () => {
    const a1 = new Account('CookieMonster');
    expect(a1).to.be.instanceof(Account);
    expect(a1.name).to.equal('CookieMonster');
    expect(a1).to.have.property('name');
    expect(a1).to.be.property('number');
  });
});
describe('Deposits', function () {
  it('should create a deposit', () => {
    const a2 = new Account('Rich');
    const bal = a2.addDeposit(50);
    expect(bal).to.equal(50);
    });
});
// describe('Withdrawl', function () {
//   it('should withdrawl from account', () => {
//     const a3 = new Account('Don');
//     a3.addDeposit(50);
//     const bal2 = a3.withdraw(25);
//     expect(bal2).to.equal.(25);
//   });
//   it('should not withdrawl from account', () => {
//     const a4 = new Account('Don');
//     const bal3 = a4.addDeposit(20);
//     const bal4 = a4.withdraw(25);
//     expect(bal4).to.equal.(20);
//   });
// });
