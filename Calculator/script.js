// Screen ka reference lena
var screen = document.getElementById("screen");

// Expression store karne ke liye variable
var expression = "";

// Function: Button press hone per input add karega
function pressButton(value) {
    var lastChar = expression.slice(-1); // Last character check karo

    // Agar user operator dabaye aur pehle se bhi operator ho to replace kar do
    if ((value === "+" || value === "-" || value === "*" || value === "/") && 
        (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/")) {
        expression = expression.slice(0, -1) + value; // Last operator replace karo
    } 
    else {
        expression += value; // Normal case me value add karo
    }

    screen.value = expression; // Screen update karo
}

// Function: Screen clear karega
function clearScreen() {
    expression = "";
    screen.value = "";
}

// Function: Last character delete karega
function deleteLast() {
    expression = expression.slice(0, -1);
    screen.value = expression;
}

// Function: Calculate karega bina eval() ke
function calculate() {
    if (expression === "") {
        screen.value = "";
        return;
    }

    var num = "";
    var numbers = [];
    var operators = [];

    // Expression ko numbers aur operators me split karo
    for (var i = 0; i < expression.length; i++) {
        var char = expression[i];

        if (char === "+" || char === "-" || char === "*" || char === "/") {
            numbers.push(Number(num)); // Number array me add karo
            operators.push(char); // Operator array me add karo
            num = ""; // Reset num
        } else {
            num += char; // Number collect karo
        }
    }
    numbers.push(Number(num)); // Last number bhi add karo

    // Pehle multiply aur divide solve karo
    for (var i = 0; i < operators.length; i++) {
        if (operators[i] === "*" || operators[i] === "/") {
            var result = (operators[i] === "*") ? numbers[i] * numbers[i + 1] : numbers[i] / numbers[i + 1];
            numbers.splice(i, 2, result); // Replace numbers
            operators.splice(i, 1); // Operator remove karo
            i--; // Loop adjust karo
        }
    }

    // Ab addition aur subtraction solve karo
    var finalResult = numbers[0];
    for (var i = 0; i < operators.length; i++) {
        if (operators[i] === "+") {
            finalResult += numbers[i + 1];
        } else {
            finalResult -= numbers[i + 1];
        }
    }

    expression = finalResult.toString(); // Expression ko update karo
    screen.value = expression; // Screen update karo
}
