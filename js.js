let displayNumber = 0;

const result = document.querySelector(".result");
const numbers = document.querySelectorAll(".number");

result.textContent = displayNumber;

// numbers.forEach(number => {
//     console.log(numbers.values);
// })



function displayResult() {
    displayNumber = 0;
}





function operate(operator, num1, num2) {
    if (operator === "add") return add(num1, num2);
    if (operator === "subtract") return subtract(num1, num2);
    if (operator === "multiply") return multiply(num1, num2);
    if (operator === "divide") return divide(num1, num2);
}

function add(a, b) {
    return a + b
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


