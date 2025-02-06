// VARIABLE NAMES: LEGAL & ILLEGAL
// Question 01
// Declare 3 variables in one statement.
let a; let b; let c;

// Question 02
// Declare 5 legal & 5 illegal variable names.
// Legal variable names:
let userName;
let user_name;
let userr$name;
let userName01;
let $username;

// Illegal variable names (with explanations):
// let 12fullname;  -> Cannot start with a number
// let full-name;   -> Hyphen (-) is not allowed
// let full name;   -> Space is not allowed in variable names
// let fullName*;   -> Asterisk (*) is not allowed
// let %fullName;   -> % symbol is not allowed

// Question 03
document.write("<h1>Rules for naming JS variables</h1>");
document.write("<p>Variable names can only contain numbers,$ and _. For example $my_1stVariable</p>");
document.write("<p>Variables must begin with a letter,$ and _. For example $name, _name or name</p>");
document.write("<p>Variable names are case sensitive</p>");
document.write("<p>Variable names should not be JS keywords or reserved words</p>");

// MATH EXPRESSIONS
// Question 01
// Write a program that take two numbers & add them in a new variable. Show the result in your browser.
let num1 = 10
let num2 = 20
let result = num1 + num2
document.write(`Sum of ${num1} and ${num2} is = ${result}<br>`);

// Question 02
// Repeat task1 for subtraction, multiplication, division & modulus.
// Subtraction
let num3 = 100
let num4 = 20
let Result = num3 - num4
document.write(`Subtract of ${num3} and ${num4} is = ${Result}<br>`);
// Multiplication
let num5 = 30
let num6 = 2
let output = num5 * num6
document.write(`Multiplication of ${num5} and ${num6} is = ${output}<br>`);
// Modulus
let num7 = 10
let num8 = 2
let Output = num7 % num8
document.write(`Modulus of ${num7} and ${num8} is = ${Output}<br><br>`);

// Question 03
// Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.
// let number;
// document.write(`Value after variable declaration is: ${number}.<br>`);
// number = 5
// document.write(`Initial value : ${number}<br>`);
// document.write(`Value after increment is: ${++number}<br>`);
// number = 6 + 7
// document.write(`Value after addition is ${number}<br>`);
// document.write(`Value after decrement is: ${--number}<br>.`);
// document.write(`The remainder is : ${number % 3}<br><br>`);

// Question 04
// Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:
let ticketPrice = 600
let _result = 600 * 5
document.write(`The cost to buy 5 Tickets to a movie is ${_result} PKR.`);

// Question 05
// Write a script to display multiplication table of any number in your browser.
var Number = 5;
document.write("<h2>Multiplication Table of " + Number + "</h2>");
document.write (Number + " x 1 = " +  (Number * 1) + "<br>");
document.write (Number + " x 2 = " +  (Number * 2) + "<br>");
document.write (Number + " x 3 = " +  (Number * 3) + "<br>");
document.write (Number + " x 4 = " +  (Number * 4) + "<br>");
document.write (Number + " x 5 = " +  (Number * 5) + "<br>");
document.write (Number + " x 6 = " +  (Number * 6) + "<br>");
document.write (Number + " x 7 = " +  (Number * 7) + "<br>");
document.write (Number + " x 8 = " +  (Number * 8) + "<br>");
document.write (Number + " x 9 = " +  (Number * 9) + "<br>");
document.write (Number + " x 10 = " +  (Number * 10) + "<br>");

// Question 06
// The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
let celsiusTemp = 25
let Fahrenheit = (celsiusTemp * 9/5) + 32
document.write(`25<sup>o</sup>C is ${Fahrenheit}<sup>o</sup>F<br>`);

let fahrenheitTemp = 70
let Celsius = (70 - 32) * 5/9
document.write(`70<sup>o</sup>F is ${Celsius}<sup>o</sup>C<br>`);

// Question 07
// Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.
document.write("<h1>Shopping Cart</h1>");
let price1 = 650
let quantitiyItem1 = 3
document.write(`Price of item 1 is ${price1}<br>`);
document.write(`Quantitiy of item 1 is ${quantitiyItem1}<br>`);
let price2 = 100
let quantitiyItem2 = 7
document.write(`Price of item 2 is ${price2}<br>`);
document.write(`Quantitiy of item 2 is ${quantitiyItem2}<br>`);
let shippingCharges = 100
document.write(`Shippping Charges is ${shippingCharges}<br>`);
let resulted = price1 * quantitiyItem1 + price2 * quantitiyItem2 + shippingCharges
document.write(`Total cost of your order is ${resulted}<br><br>`);

// Question 08
// Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
let totalMarks = 950
let obtainedMarks = 804
let Percentage = (obtainedMarks / totalMarks) * 100
document.write(`Total Marks : ${totalMarks}<br>`);
document.write(`Total Obtained Marks : ${obtainedMarks}<br>`);
document.write(`Percentage : ${Percentage}`);

// Question 09
// Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
document.write("<h1>Currency in PKR</h1>");
document.write("Total Currency in PKR = " + ((10 * 104.80) + (25 * 28))+"<br>");

// Question 10
// Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
let initialNumber = 10
document.write("Result = "+ ((initialNumber + 5) * 10) / 2);

// Question 11
// The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.
document.write("<h1>Age Calculator</h1>");
let currentYear = 2025;
let birthYear = 2002;
let age = currentYear - birthYear;
document.write(`Current Year : ${currentYear}<br>`);
document.write(`Birth Year : ${birthYear}<br>`);
document.write(`Your age : ${age}<br>`);

// Question 12
// The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and output “The circumference is NN”.(Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
let radius = 20
let Circumference = 2 * 3.142 * 20
document.write("<h1>Calculate Circumfernce</h1>");
document.write(`Radius of a circle : ${radius}<br>`);
document.write(`The circumference is : ${Circumference}`);
document.write("<h1>Calculate Area</h1><br>");
let Area = 3.142 * 20**2
document.write(`The Area is : ${Area}`);

// Question 13
// The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of your life.
document.write("<h1>The Lifetime Supply Calculator</h1>");
let favouriteSnack = "chocolate chip"
let currentAge = 15
let maximumAge = 65
let amount = 3
let TotalSnacks = (maximumAge - currentAge) * amount * 365
document.write(`You will need ${TotalSnacks} chocolate chip to last until the ripe of old age of 65<br><br>`);

// More Maths Expression
// Question 01
// Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
let x = 10
document.write(`The value of x is : ${x}<br>`);
// Increment
document.write("The value of ++x" +" "+"is :", ++x + "<br>");
document.write(`Now the value of x is : ${x}<br>`);
document.write("The value of x++" +" "+"is :", x++ + "<br>");
document.write(`Now the value of x is : ${x}<br>`);
// Decrement
document.write("The value of --x" +" "+"is :", --x + "<br>");
document.write(`Now the value of x is : ${x}<br>`);
document.write("The value of x--" +" "+"is :", x-- + "<br>");
document.write(`Now the value of x is : ${x}<br><br>`);

// Question 02
// Write a program that takes input a name from user & greet the user.
let name = prompt("Enter your name:");
document.write(`Hello ${name} Welcome!<br>`);

// Question 03
// Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.
// User se number input lena
var number = prompt("Enter a number for multiplication table:");

// Agar user ne number enter kiya
if (number !== null && number !== "") {
    // number !== null:
    // Is condition ka matlab hai: "Kya number null nahi hai?". Agar null nahi hai, toh iska matlab hai ke user ne kuch diya hai.
    // number !== "":
    // Is condition ka matlab hai: "Kya number khaali nahi hai?". Agar khaali nahi hai, toh iska matlab hai ke user ne kuch likha hai.
    // User ke entered number ka multiplication table display karna
    document.write(number + " x 1 = " + (number * 1) + "<br>");
    document.write(number + " x 2 = " + (number * 2) + "<br>");
    document.write(number + " x 3 = " + (number * 3) + "<br>");
    document.write(number + " x 4 = " + (number * 4) + "<br>");
    document.write(number + " x 5 = " + (number * 5) + "<br>");
    document.write(number + " x 6 = " + (number * 6) + "<br>");
    document.write(number + " x 7 = " + (number * 7) + "<br>");
    document.write(number + " x 8 = " + (number * 8) + "<br>");
    document.write(number + " x 9 = " + (number * 9) + "<br>");
    document.write(number + " x 10 = " + (number * 10) + "<br>");
} else {
    // Agar user ne kuch nahi diya, toh default 5 ka multiplication table dikhana
    document.write("5 x 1 = " + (5 * 1) + "<br>");
    document.write("5 x 2 = " + (5 * 2) + "<br>");
    document.write("5 x 3 = " + (5 * 3) + "<br>");
    document.write("5 x 4 = " + (5 * 4) + "<br>");
    document.write("5 x 5 = " + (5 * 5) + "<br>");
    document.write("5 x 6 = " + (5 * 6) + "<br>");
    document.write("5 x 7 = " + (5 * 7) + "<br>");
    document.write("5 x 8 = " + (5 * 8) + "<br>");
    document.write("5 x 9 = " + (5 * 9) + "<br>");
    document.write("5 x 10 = " + (5 * 10) + "<br>");
}

// Question 04
// What will be the output in variables a, b & result after execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
let y = 2
let z = 1
let cal = --y - --z + ++z + z--;
//         1  -   0 +  1  +  1
document.write(`Your Result : ${cal}<br>`); // 3

// Question 05
// Take
// a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser
let subj1 = prompt("Enter a first subject name")
let subj2 = prompt("Enter second subject name")
let subj3 = prompt("Enter third subject name")
let total_marks = 100
let firstMarks = prompt("Enter first subject marks")
let secondMarks = prompt("Enter second subject marks")
let thirdMarks = prompt("Enter third subject marks")
document.write("<h1>Subjects Name</h1>")
document.write(`Subject Name : ${subj1}<br>`);
document.write(`Subject Name : ${subj2}<br>`);
document.write(`Subject Name : ${subj3}<br>`);
document.write("<h1>Subjects Marks</h1>")
document.write(`First Subject Marks : ${firstMarks}<br>`);
document.write(`Second Subject Marks : ${secondMarks}<br>`);
document.write(`Third Subject Marks : ${thirdMarks}<br>`);
let resultOne = (firstMarks / total_marks) * 100
let resultTwo = (secondMarks / total_marks) * 100
let resultThree = (thirdMarks / total_marks) * 100
document.write("<h1>Subject Result</h1>")
document.write(`First Subject Result : ${resultOne}<br>`);
document.write(`Second Subject Result : ${resultTwo}<br>`);
document.write(`Third Subject Result : ${resultThree}<br>`);
