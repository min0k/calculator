
const result = document.querySelector(".result");
const operand = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");
const dot = document.querySelector(".dot");
const equals = document.querySelector(".equals");

let operatorWasChosen = false;

const allOperators = ["+", "/", "*", "-"];

// 

clear.addEventListener("click", clearAll);
equals.addEventListener("click", equalsClicked);

operators.forEach(operator => {
    operator.addEventListener("click", operatorClick);
})

operand.forEach(number => {
    number.addEventListener("click", operandClick)
})


//

let tempOperator;
let tempNum1;
let tempNum2;

function equalsClicked() {
    result.textContent = operate(tempOperator, tempNum1, tempNum2);
}

function operandClick(e) {
    if (operatorWasChosen === true) {
        if (tempNum2) {
            tempNum2 += e.target.getAttribute("data-value");
        } else {
            tempNum2 = e.target.getAttribute("data-value");
        }
        result.textContent += e.target.getAttribute("data-value");
    } else {
        if (tempNum1) {
            tempNum1 += e.target.getAttribute("data-value");
        } else {
            tempNum1 = e.target.getAttribute("data-value");
        }
        result.textContent += e.target.getAttribute("data-value");
    }
}

function operatorClick(e) {
    operatorWasChosen = true;
    tempOperator = e.target.getAttribute("data-value");
    result.textContent = e.target.getAttribute("data-value");
    result.textContent = "";
}

function updateDisplay() {

}

function clearAll() {
    result.textContent = "";
    tempNum1 = "";
    tempNum2 = "";
    operatorWasChosen = false;
    tempOperator = "";
}


// 

function operate(operator, num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    if (operator === "+") return add(num1, num2);
    if (operator === "-") return subtract(num1, num2);
    if (operator === "*") return multiply(num1, num2);
    if (operator === "/") return divide(num1, num2);
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b
}

function divide(a, b) {
    return a / b
}

function multiply(a, b) {
    return a * b
}


