function Bank(name) {
  this.name = name;
  this.accounts = [];
}

Bank.prototype.addAccount = function (account) {
  this.accounts.push(account);
};

Bank.prototype.getValue = function () {

return this.accounts.reduce((total, a) => total + a.balance, 0);

};

module.exports = Bank;
