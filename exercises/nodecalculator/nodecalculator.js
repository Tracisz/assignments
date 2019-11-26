const readline = require("readline-sync")

function sum(num1, num2){ 
    var sum = num1 + num2
    return sum
}
function multi(num1, num2){ 
    var muli = num1 * num2 
    return muli
}
function divide (num1, num2){ 
    var divide = num1 / num2 
    return divide 
}

function subtract (num1, num2){ 
    var subtract = num1 - num2
    return subtract
}


var firstNumber = readline.question('Please enter your first number ')
var secondNumber = readline.question('Please enter your second number ')
var operators = ['add', 'subtract', 'multiply', 'divide'
]
var operation = readline.keyInSelect(operators, 'choose which operation you want to complete')
var userAnswer = operators[operation]

if(userAnswer == 'add'){ 
    console.log("Your answer is " + sum(Number(firstNumber), Number(secondNumber)))
} else if(userAnswer == 'subtract'){ 
    console.log("Your answer is " + subtract(Number(firstNumber), Number(secondNumber)))
} else if(userAnswer == 'multiply'){ 
    console.log("Your answer is " + multi(Number(firstNumber), Number(secondNumber)))
} else { 
    console.log ("Your answer is " + divide(Number(firstNumber), Number(secondNumber)))
}
