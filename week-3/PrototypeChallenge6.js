function BankAccount(balance) {
    this.balance = balance;
    this.transactions = [];
  }
  
  BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
    this.transactions.push(`Deposited ${amount}`);
  };
  
  BankAccount.prototype.withdraw = function (amount) {
    if (amount > this.balance) {
      this.transactions.push('Insufficient balance');
    } else {
      this.balance -= amount;
      this.transactions.push(`Withdrew ${amount}`);
    }
  };
  
  BankAccount.prototype.getTransactionHistory = function () {
    return this.transactions;
  };
  // Please don't remove the code below
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.on('line', (input) => {
    const { balance, transactions } = JSON.parse(input);
    const account = new BankAccount(balance);
  
    transactions.forEach(({ type, amount }) => {
      if (type === "deposit") account.deposit(amount);
      if (type === "withdraw") account.withdraw(amount);
    });
  
    process.stdout.write(JSON.stringify(account.getTransactionHistory()));
  });
  