"use strict";
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Niv",
    bankAccount: bankAccount,
    hobbies: ["Guitar", "Programming", "Photography"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
