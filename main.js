#! /usr/bin/env node
import inquirer from "inquirer";
//import Chalk from "chalk";
//Initialize user balance and pin code
let myBalance = 10000; //Doller
let myPin = 1234;
//print Welcom message
console.log("Welcome to code with Syeda Nighat - ATM Machine");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: ("Enter your pin code:")
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("\npin is correct, Login successfully!\n");
    //console.log(`current Account Balance is ${myBalance}`)
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "select an operation:",
            choices: ["withdraw Amount", "check Balance"]
        }
    ]);
    if (operationAns.operation === "withdraw Amount") {
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdrawMethod",
                type: "list",
                message: "select a withdrawl method:",
                choices: ["Fast cash", "Enter Amount"]
            }
        ]);
        if (withdrawAns.withdrawMethod === "Fast cash") {
            let fastcashAns = await inquirer.prompt([
                {
                    name: "fastcash",
                    type: "list",
                    message: "select Amount:",
                    choices: [1000, 2000, 5000, 10000, 20000, 50000]
                }
            ]);
            if (fastcashAns.fastcash > myBalance) {
                console.log("Insufficient Balance");
            }
            else {
                myBalance -= fastcashAns.fastcash;
                console.log(` ${fastcashAns.fastcash} withdraw successfully`);
                console.log(`your Remaining Balance is: ${myBalance}`);
            }
        }
        else if (withdrawAns.withdrawMethod === "Enter Amount") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter the amount to withdraw:"
                }
            ]);
            if (amountAns.amount > myBalance) {
                console.log("Insufficient Balance");
            }
            else {
                myBalance -= amountAns.amount;
                console.log(` ${amountAns.amount} withdraw successfully`);
                console.log(`your Remaining Balance is: ${myBalance} `);
            }
        }
    }
    else if (operationAns.operation === "check Balance") {
        console.log(`your Account Balance is: ${myBalance}`);
    }
}
else {
    console.log("pin is Incorrect, Try Again!");
}
