const expect = require('chai').expect;
const Account = require('../lib/account');

describe('Account', function() {
    it('should create a bank account', function(){
       const a1 = new Account("moe", 500);
       expect(a1).to.be.instanceof(Account);
       expect(a1.name).to.equal('moe');
       expect(a1).to.have.property('name');
       expect(a1).to.be.property('number');
 });
});
