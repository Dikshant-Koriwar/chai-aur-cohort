// You need to implement the BankAccount constructor function and its prototype methods

function BankAccount(accountNumber, holderName, balance) {
    this.accountNumber = accountNumber;
    this.holderName = holderName;
    this.balance = balance;
  }
  
  BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
  };
  
  BankAccount.prototype.withdraw = function (amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    }
  };
  
  BankAccount.prototype.transfer = function (amount, targetAccount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      targetAccount.balance += amount;
    }
  };
  
  
  // Please don't remove the code below
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.on('line', (input) => {
    const { accounts, transaction } = JSON.parse(input);
  
    const acc1 = new BankAccount(accounts[0].accountNumber, accounts[0].holderName, accounts[0].balance);
    const acc2 = new BankAccount(accounts[1].accountNumber, accounts[1].holderName, accounts[1].balance);
  
    if (transaction.type === "deposit") {
      acc1.deposit(transaction.amount);
    } else if (transaction.type === "withdraw") {
      acc1.withdraw(transaction.amount);
    } else if (transaction.type === "transfer") {
      acc1.transfer(transaction.amount, acc2);
    }
  
    process.stdout.write(JSON.stringify([acc1.balance, acc2.balance]));
  });
  