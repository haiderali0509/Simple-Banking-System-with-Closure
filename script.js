function bankAccount(initialBalance) {
    let balance = initialBalance;
    return {
        deposit: function (amount) {
            balance += amount;
            console.log(`Deposited: ${amount} | Balance: ${balance}`);
        },
        withdraw: function (amount) {
            if (amount > balance) {
                console.log(`Insufficient funds!`);
                return;
            }
            balance -= amount;
            console.log(`Withdrawn:${amount} | Balance: ${balance}`);
        },
        getBalance: function () {
            return balance;
        }
    };
}
const myAccount = bankAccount(1600);
myAccount.deposit(400);
myAccount.withdraw(300);
console.log(myAccount.getBalance());

// if we try to directly access balance, we will get an error