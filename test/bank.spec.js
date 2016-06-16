const expect = require('chai').expect;
const Account = require('../lib/account');
const Bank = require('../lib/bank');

describe('Bank', function () {
  it('should create a new bank', () => {
    const a1 = new Bank('Allstate Bank');
    expect(a1).to.be.instanceof(Bank);
    expect(a1.name).to.equal('Allstate Bank');
  });
});
describe('Bank', function () {
  it('should a new Bank then add a new Account', () => {
    const a2 = new Bank('Allstate Bank');
    const account1 = new Account('John Doe');
    account1.addDeposit(500);
    a2.addAccount(account1);
    expect(account1).to.be.instanceof(Account);
    expect(a2).to.be.instanceof(Bank);
    const value = a2.getValue();
    expect(value).to.equal(500);
  });
});
