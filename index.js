import inquirer from "inquirer";
let mybalance = 5000;
let mypin = 1234;
console.log("wellcome to ATM machine");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code:"
    }
]);
if (pinAnswer.pin === mypin) {
    console.log("pin is correct, login successfully!");
    console.log(`Current Account Balance is ${mybalance}`);
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation:",
            choices: ["Withdraw Ammount", "Check Balance"]
        }
    ]);
    if (operationAns.operation === "Withdraw Ammount") {
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdrawmMethod",
                type: "list",
                message: "Select a withdrawal method",
                choices: ["Fast cash", "Enter Amount"]
            }
        ]);
        if (withdrawAns.withdrawmMethod === "Fast cash") {
            let FastcashAns = await inquirer.prompt([
                {
                    name: "Fastcash",
                    type: "list",
                    message: "Select Amount:",
                    choices: [1000, 2000, 5000, 10000, 20000, 50000]
                }
            ]);
            if (FastcashAns.Fastcash > mybalance) {
                console.log("insufficient balance");
            }
            else {
                mybalance -= FastcashAns.Fastcash;
                console.log(`${FastcashAns.Fastcash} withdraw successfully`);
                console.log(`your remaining balance is: ${mybalance}`);
            }
        }
        else if (withdrawAns.withdrawmMethod === "Enter Amount") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter the amount to withdraw:"
                }
            ]);
            if (amountAns.amount > mybalance) {
                console.log("insufficient Balance");
            }
            else {
                mybalance -= amountAns.amount;
                console.log(`${amountAns.amount} Withdraw successfully`);
                console.log(`your remaining Balance is: ${mybalance}`);
            }
        }
    }
    else if (operationAns.operation === "check Balance") {
        console.log(`your Account Balance is: ${mybalance}`);
    }
}
else {
    console.log("pin is incorrect, Try Again");
}
