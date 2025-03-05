let display = document.getElementById("display");
let currentInput = "";
let previousInput = "";
let operator = "";

function updateDisplay() {
    display.value = currentInput || "0"; // Agar empty ho to "0" show ho
}

function appendNumber(num) {
    currentInput += num;
    updateDisplay();
}

function appendOperator(op) {
    if (currentInput === "") return; // Agar input empty hai to kuch na ho

    if (operator !== "") { 
        currentInput = currentInput.slice(0, -1); // Pichla operator hataye
    }

    previousInput = currentInput;
    operator = op;
    currentInput += op;
    updateDisplay();
}

function clearDisplay() {
    currentInput = "";
    previousInput = "";
    operator = "";
    updateDisplay();
}

function calculateResult() {
    if (previousInput === "" || operator === "" || currentInput === "") return;

    let num1 = parseFloat(previousInput);
    let num2 = parseFloat(currentInput.split(operator)[1]); // Operator ke baad ka number

    let result = 0;
    if (operator === "+") result = num1 + num2;
    else if (operator === "-") result = num1 - num2;
    else if (operator === "*") result = num1 * num2;
    else if (operator === "/") result = num2 !== 0 ? num1 / num2 : "Error";

    currentInput = result.toString();
    previousInput = "";
    operator = "";
    updateDisplay();
}