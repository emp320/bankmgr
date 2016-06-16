const uuid = require('uuid');
function Account(name) {
  this.name = name;
  this.number = uuid.v1();
  this.balance = 0;
  this.deposits = [];
  this.withdraws = [];
}

Account.prototype.addDeposit = function(amount) {
  this.balance += amount;
  this.deposits.push(amount);
  return this.balance;
}

Account.prototype.withdraw = function(amount) {
  if(amount > this.balance) return this.balance;
  this.balance -= amount;
  this.withdraws.push(amount);
  return this.balance;
}
module.exports = Account;
