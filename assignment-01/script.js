// Alerts
// Question 01
// Write a script to greet your website visitor using JS alert box.
alert("Greetings! Thanks for visiting my site.");

// Question 02
// Write a script to display following message on your web page:
alert("Error! Please enter a valid password");

// Question 03
// Write a script to display following message on your web page: (Hint : Use line break)
alert("Welcome to JS Land \n Happy Coding...");

// Question 04
// Write a script to display following messages in sequence:
alert("Welcome to JS Land...");
alert("Happy Coding \n Preven this page from creating additional dialogs.")

// Question 05
// Generate the following message through browser’s developer console:
console.log("Hello I can run JS through web browsers console");

// Question 06
// Make use of alerts in your new/existing HTML & CSS project.
// I try in my previous projects

// Question 07
// Practice placement of <script></script> element in following sections of your project in exercise 6:
// a. Head
// b. Body (before your page’s HTML)
// c. Body (inside your page’s HTML)
// d. Body (after your page’s HTML)

// Ans = Best Approach and Best Practice make script tag after html content because first the content is loaded then script tag execute

// Variables For Strings
// Question 01
// Declare a variable called username.
let userName;

// Question 02
// Declare a variable called myName & assign to it a string that represents your Full Name.
let myName = "Hafiz Hamza"

// Question 03
// Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.
let message = "Hello World"
alert(message);

// Question 04
// Write a script to save student’s bio data in JS variables and show the data in alert boxes.
let name = "Usman"
let age = 25
let course = "Certified Mobile Application Development"
alert(name);
alert(age);
alert(course);

// Question 05
// Write a script to display the following alert using one JS variable:
let food = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(food);

// Question 06
// Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com).Show the blow mentioned message in an alert box.(Hint: use string concatenation)
let email ="hamza@gmail.com"
alert("My Email address is"+" "+ email);

// Question 08
// Write a script to display this in browser through JS
document.write("Yah! I can write HTML Content through JS<br>");

// Question 07
// Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:
let book = "A smarter way to learn JavaScript"
alert(`I am trying to learn from the book ${book}`);

// Question 09
// Store following string in a variable and show in alert and browser through JS
let str = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
alert(str);
console.log(str);

// Variables For Numbers
// Queston 01
// Declare a variable called age & assign to it your age. Show your age in an alert box.
let aged = 14
alert(aged);

// Question 02
// Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.
let visitorTimes = "10"
alert(`You hav visited this site ${visitorTimes} times`);

// Question 03
// Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
// Declare a variable for birth year
let birthYear = 2001;
document.write(`My Birth Year is ${birthYear}<br>`);

// Question 04
// A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:
// a. Visitors name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
let visitorName = "Huzaifa"
let productName = "T-Shirt"
let Quantity = 5
document.write(`${visitorName} ordered ${Quantity} ${productName} on Chaseup Clothing Store`);