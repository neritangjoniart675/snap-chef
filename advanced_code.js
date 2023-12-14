/*
Filename: advanced_code.js
Description: This code is a simulation of a banking system, complete with account creation, transactions, and balance management. It incorporates object-oriented programming principles and multiple design patterns.
*/

class Bank {
  constructor(name) {
    this.name = name;
    this.accounts = [];
  }

  createAccount(customer, initialBalance) {
    const account = new Account(customer, initialBalance);
    this.accounts.push(account);
  }

  getAccount(accountNumber) {
    return this.accounts.find(account => account.number === accountNumber);
  }

  deleteAccount(accountNumber) {
    const index = this.accounts.findIndex(account => account.number === accountNumber);
    if (index !== -1) {
      this.accounts.splice(index, 1);
      return true;
    }
    return false;
  }

  getBankBalance() {
    return this.accounts.reduce((totalBalance, account) => totalBalance + account.balance, 0);
  }
}

class Account {
  static #nextAccountNumber = 1000;

  constructor(customer, initialBalance) {
    this.number = Account.#nextAccountNumber++;
    this.customer = customer;
    this.balance = initialBalance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      return true;
    }
    return false;
  }
}

class Customer {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
}

// Usage example:

const myBank = new Bank("ACME Bank");

const customer1 = new Customer("John Doe", "123 Main St");
const customer2 = new Customer("Jane Smith", "456 Oak Ave");

myBank.createAccount(customer1, 500);
myBank.createAccount(customer2, 1000);

const account1 = myBank.getAccount(1000);
const account2 = myBank.getAccount(1001);

account1.deposit(200);
account2.withdraw(400);

console.log("Bank: " + myBank.name);
console.log("Customer: " + account1.customer.name);
console.log("Account Number: " + account1.number);
console.log("Balance: $" + account1.balance);
console.log("Bank Balance: $" + myBank.getBankBalance());

// Output:
// Bank: ACME Bank
// Customer: John Doe
// Account Number: 1000
// Balance: $700
// Bank Balance: $1300

// ... and many more lines of code. This is just a simplified example.