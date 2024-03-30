#! /usr/bin/env node



import inquirer from "inquirer";

let myBalance = 20000;
let myPin = 1234;

let pinAnswer = await inquirer.prompt(
 [
 {
 name: "pin",
 message: "Enter your pin",
 type: "number"
 }
 ]
);

if (pinAnswer.pin === myPin) {
 console.log("Correct pin code!!");
 let operationAns = await inquirer.prompt(
 [
 {
 name: "operation",
 message: "Please select an option",
 type: "list",
 choices: ["withdraw", "balance inquiry", "Fast Cash"]
 }
 ]
 );

 if (operationAns.operation === "withdraw") {
 let amountAns = await inquirer.prompt(
 [
 {
 name: "amount",
 message: "Enter your required amount",
 type: "number"
 }
 ]
 );
 if (amountAns.amount > myBalance) {
 console.log("Insufficient Balance..");
 } else {
 myBalance -= amountAns.amount;
 console.log(` ${ amountAns.amount} withdrawn successfully`);
 }
 } else if (operationAns.operation === "balance inquiry") {
 console.log("Your current balance is: " + myBalance);
 } else if (operationAns.operation === "Fast Cash") {
 let Fast = await inquirer.prompt(
 [
 {
 name: "fast_opt",
 message: "Select the amount from the list you want to withdraw",
 type: "list",
 choices: ["1000", "2000", "5000", "10000"]
 }
 ]
 );
 let fastAmount = parseInt(Fast.fast_opt); // Convert string to number
 myBalance -= fastAmount;
 console.log(`Your remaining balance is ${myBalance}`);
 }
} else {
 console.log("Incorrect pin number");
}