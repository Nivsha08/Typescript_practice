type BankAccount = {
    money: number,
    deposit: (value: number) => void
}

type Man = {
    name: string,
    bankAccount: BankAccount,
    hobbies: string[]
}

let bankAccount : BankAccount = {
    money: 2000,
    deposit(value) {
        this.money += value;
    }
};

let myself : Man = {
    name: "Niv",
    bankAccount,
    hobbies: ["Guitar", "Programming", "Photography"]
};

myself.bankAccount.deposit(3000);

console.log(myself);