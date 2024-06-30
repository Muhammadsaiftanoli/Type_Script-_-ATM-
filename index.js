#!/usr/bin/env node
import inquirer from "inquirer";
let myBalance = 50000;
let myPin = 1234;
let pinCheck = await inquirer.prompt([
    { message: "Enter your Pin.", type: "number", name: "pin" }
]);
if (pinCheck.pin === myPin) {
    let menuOptions = await inquirer.prompt([
        { message: "Select an option.", type: "list", name: "list", choices: ["Withdraw", "Deposit", "Check Balance"] }
    ]);
    if (menuOptions.list === "Withdraw") {
        let amount = await inquirer.prompt([
            { message: "Enter the amount to withdraw", type: "number", name: "amount" }
        ]);
        if (amount.amount <= myBalance && amount.amount >= 500) {
            myBalance -= amount.amount;
            console.log(`You withdrawn ${amount.amount}. Your remaining balance is ${myBalance}`);
        }
        else {
            console.log("Invalid amount.");
        }
    }
    else if (menuOptions.list === "Deposit") {
        let amountDeposite = await inquirer.prompt([
            { message: "Enter the amount to deposite", type: "number", name: "amountdeposite" }
        ]);
        myBalance += amountDeposite.amountdeposite;
        console.log(`You deposited ${amountDeposite.amountdeposite}. Your new balance is ${myBalance}`);
    }
    else if (menuOptions.list === "Check Balance") {
        console.log(`Your current balance is ${myBalance}`);
    }
}
else {
    console.log("Invalid Pin");
}
