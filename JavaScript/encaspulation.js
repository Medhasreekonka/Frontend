class BankBalance {
    #balance; //private variable
    constructor(balance) {
        this.#balance = balance;
    }

    getBalance() {
        return this.#balance
    }

    deposit(amt) {
        this.#balance += amt;
        console.log(`Deposited : ${amt}`)
    }

    withdraw(amt) {
        this.#balance -= amt;
        console.log(`Withdrawn : ${amt}`)
    }
}

let b = new BankBalance(20000);
//console.log(b.balance);
b.deposit(2000)
b.withdraw(180)
console.log("avaiable balance is ", b.getBalance());