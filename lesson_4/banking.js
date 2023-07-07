function makeBank() {
  let accountNumber = 101;
  let accounts = [];

  return {
    openAccount() {
      let newAccount = makeAccount(accountNumber);
      accountNumber += 1;
      accounts.push(newAccount);

      return newAccount;
    },

    transfer(source, destination, amount) {
      let withdrawalAmount = source.withdraw(amount);
      destination.deposit(withdrawalAmount);
      return withdrawalAmount;
    }
  };
}

function makeAccount(number) {
  let balance = 0;
  let transactions = [];

  return {
    number() {
      return number
    },

    balance() {
      return balance;
    },

    transactions() {
      return transactions;
    },

    deposit(amount) {
      balance += amount;
      transactions.push({ type: "deposit", amount });
      return amount;
    },

    withdraw(amount) {
      if (amount > balance) {
        amount = balance;
      }

      balance -= amount;
      transactions.push({ type: "withdraw", amount });
      return amount;
    }
  };
}

let bank = makeBank();
let account = bank.openAccount();
console.log(account.balance());
// 0
console.log(account.deposit(17));
// 17
let secondAccount = bank.openAccount();
console.log(secondAccount.number());
// 102
console.log(account.transactions());
// [{...}]
