function bankAccount(initialBalance) {
    let balance = initialBalance;
    return {
        deposit: function (amount) {
            balance += amount;
            console.log(`Deposited: ${amount} | Balance: ${balance}`);
        }
    }
}