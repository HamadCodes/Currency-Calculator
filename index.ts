#! /usr/bin/env node
import inquirer from "inquirer"

console.log("\n\tCurrency Converter\n")

let values = {
    PKR:{USD:277.58,
         YEN:1.83,
         EUR:299.61,
         PKR:1
        },
    USD:{USD:1,
         YEN:0.0066,
         EUR:1.08,
         PKR:0.0036
        },
    EUR:{USD:0.93,
         YEN:0.0061,
         EUR:1,
         PKR:0.0033
        },
    YEN:{USD:151.34,
         YEN:1,
         EUR:163.47,
         PKR:0.55
        }
}

const convertFrom:{from:"USD"|"PKR"|"YEN"|"EUR"} = await inquirer.prompt([{
    message: "Convert from?",
    type: "list",
    choices:["USD","PKR","YEN","EUR"],
    name:"from"
}])

const convertTo:{to:"USD"|"PKR"|"YEN"|"EUR"} = await inquirer.prompt([{
    message: "Convert to?",
    type: "list",
    choices:["USD","PKR","YEN","EUR"],
    name:"to"
}])
const amount = await inquirer.prompt([{
    message: "Enter The Amount",
    type: "number",
    name:"value"
}])

const from = convertFrom.from
const to = convertTo.to
const answer = (values[to][from]*amount.value).toFixed(2)
console.log(`The Convertion of your amount from ${from} to ${to} is ${answer}`)