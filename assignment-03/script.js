// USER INPUT & CONDITIONAL STATEMENT
// Question 01
// Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”
let userCity = prompt("Enter a city name")
if(userCity === "Karachi") {
    console.log("Welcome to city of lights");
} else {
    console.log("Welcome to the city of Pakistan");
}

// Question 02
// Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.
let userGender = prompt("Enter your gender")
if(userGender === "male") {
    alert("Good Morning Sir")
}else if(userGender === "female") {
    alert("Good Morning Mam")
} else{
    alert("Invalid gender");
}

// Question 03
// Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”
let fuel = parseFloat(prompt("How much fuel is remaining in the car (in litres)?"));
if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
} else {
    alert("You have enough fuel");
}

// Question 04
// Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.
let number = +prompt("Enter a number");
if (isNaN(number)) {
    alert("Invalid input! Please enter a valid number.");
} else if (number % 3 === 0) {
    alert(`${number} is divisible by 3`);
} else {
    alert(`${number} is not divisible by 3`);
}

// Question 05
// Write a program that checks whether the given input is an even number or an odd number.
let checkNumber = +prompt("Enter a random number");
if (isNaN(checkNumber)) {
    console.log("Invalid input! Please enter a valid number.");
} else if (checkNumber % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}

// Question 06
// Write a program that takes temperature as input and shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”
let userTemperature = +prompt("What is the current temperature in your city?");
if (isNaN(userTemperature)) {
    console.log("Invalid input! Please enter a valid number.");
} else if (userTemperature > 40) {
    console.log("It is too hot outside.");
} else if (userTemperature > 30) {
    console.log("The weather today is normal.");
} else if (userTemperature > 20) {
    console.log("Today's weather is cool.");
} else if (userTemperature > 10) {
    console.log("OMG! Today's weather is so cool.");
} else {
    console.log("It is very cold outside.");
}

// Question 07
// Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.
let firstNumber = +prompt("Enter the first number");
let opt = prompt("Enter an operator (+, -, *, /, %)");
let secondNumber = +prompt("Enter the second number");

if (opt === "+") {
    console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
} else if (opt === "-") {
    console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
} else if (opt === "*") {
    console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
} else if (opt === "/") {
    if (secondNumber === 0) {
        console.log("Division by zero is not allowed.");
    } else {
        console.log(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
    }
} else if (opt === "%") {
    console.log(`${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
} else {
    console.log("Invalid operator. Please enter a valid operator (+, -, *, /, %).");
}

// Question 08
// Guess game: Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct answer”.
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.
let secretNumber = 8;
let userGuess = +prompt("Guess a number between 1 and 10");

if (userGuess < 1 || userGuess > 10) {
    console.log("Please enter a number between 1 and 10.");
} else if (userGuess === secretNumber) {
    console.log("Bingo! Correct answer");
} else if (userGuess + 1 === secretNumber) {
    console.log("Close enough to the correct answer");
} else {
    console.log("You guessed the wrong number");
}

// Question 09
// Run this script, & check whether alert message would be displayed or not. Record the outputs.
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

// Question 10
// Write a program to take input color of road traffic signal from the user & show the message
let signalColor = prompt("Enter a Traffic Signal Color")
if (signalColor === "red") {
    console.log("Must Stop");
} else if (signalColor === "yellow") {
    console.log("Ready to move");
} else if (signalColor === "green") {
    console.log("Move now");
} else {
    console.log("Invalid color");
}

// Question 11
// Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:
let totalMarks = 300
let subject1 = +prompt("Enter your first subject marks")
let subject2 = +prompt("Enter your second subject marks")
let subject3 = +prompt("Enter your third subject marks")
let obtainedMarks = subject1 + subject2 + subject3
let percentage = (obtainedMarks / totalMarks) * 100
let grade,remarks
if(percentage >= 80) {
    grade = "A-One"
    remarks = "Excellent"
} else if(percentage >=70) {
    grade = "B"
    remarks = "Good"
}  else if(percentage >=60) {
    grade = "C"
    remarks = "You need to improve"
}  else if(percentage < 60) {
    grade = "Fail"
    remarks = "Sorry"
}
document.write("<h1>Marksheet</h1>");
document.write(`Total Marks : ${totalMarks}<br>`);
document.write(`Obtained Marks : ${obtainedMarks}<br>`);
document.write(`Percentage : ${percentage}<br>`);
document.write(`Grade : ${grade}<br>`);
document.write(`Remarks : ${remarks}`);

// IF...ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS
// Question 01
// Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).
let input = '8'
let asciiCode = input.charCodeAt(0)
//     range =>  0                  9
if(asciiCode >= 48 && asciiCode <= 57) {
    console.log("This input is a number");
//     range =>         A                  Z
} else if(asciiCode >= 65 && asciiCode <= 90) {
    console.log("This input is an UpperCase letter");
//     range =>         a                   z
} else if(asciiCode >= 97 && asciiCode <= 122) {
    console.log("This input is an lowercase letter");
}else {
    console.log("The input is not a number or letter");
}

// Question 02
// Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.
let integer1 = 80
let integer2 = 90
if (integer1 > integer2 && integer2 < integer2) {
    console.log("integer one is not greater than integer 2");
} else if (integer1 > integer2 || integer2 > integer1) {
    console.log("integer 2 is greater than integer one");
} else if (integer1 == integer2 || integer2 == integer1) {
    console.log("Both integers are equal")
} else {
    console.log("This condition become false");
}

// Question 03
// Write a program that takes input a number from user & state whether the number is positive, negative or zero.
let user_number = +prompt("Enter any number");
if (isNaN(user_number)) {
  console.log("Invalid Number");
} else if (user_number > 0) {
  console.log("This number is positive");
} else if (user_number < 0) {
  console.log("This number is negative");
} else {
  console.log("This number becomes 0");
}

// Question 04
// Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise
let str = "a";
if (str === 'a' || str === 'e' || str === 'i' || str === 'o' || str === 'u') {
  console.log("Yes, this is a vowel");
} else {
  console.log("No, this is not a vowel");
}
//       OR 
// let str = "u"
// let vowels = ['a','e','i','o','u']
// if(vowels.includes(str)) {
//     console.log("Yes This is a vowel");
// } else {
//     console.log("No This is not a vowel");
// }

// Question 05
// This if/else statement does not work. Try to fix it:
let greetng;
let hour = 13;
if (hour < 18) {
  greetng = "Good day";
  console.log(greetng);
} else {
  greetng = "Good evening";
  console.log(greetng);
}

// Question 06
// Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give message “ Please enter your password”
// ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show
// “Incorrect password” otherwise.
let originalPassword = "abc@123";
let userPrompt = prompt("Enter your password");

if (userPrompt === null || userPrompt === "") {
  alert("Please enter your password");
} else if (userPrompt === originalPassword) {
  console.log("Correct! The password you entered matches the original password");
} else {
  console.log("Incorrect password");
}

// Question 07
// Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements
let time = 2200
if (time >= 1111 && time < 1200) {
    console.log("Good morning");
} else if (time >= 1200 && time < 1700) {
    console.log("Good afternoon");
} else if(time >= 1700 && time < 2100) {
    console.log("Good evening");
} else if(time >= 2100 && time < 2359) {
    console.log("Good night");
}