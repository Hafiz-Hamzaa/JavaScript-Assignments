// Arrays
// Question 01
// Declare an empty array using JS literal notation to store student names in future.
let studentNames = []

// Question 02
// Declare an empty array using JS object notation to store student names in future.
let student_names = new Array();

// Question 03
// Declare and initialize a strings array.
let arr = ["apple" , "mango" , "banana"]

// Question 04
// Declare and initialize a numbers array.
let Arr = [12 , 78.9 , 90]

// Question 05
// Declare and initialize a boolean array.
let boolArr = [true , false]

// Question 06
// Declare and initialize a mixed array.
let mixArr = ["car" , 20 , true , null]

// // Question 07
// Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD).
let education = ["SSC" , "HSC" , "BCS" , "BS" , "BCOM" , "MS" , "M.Phil" , "PHD"]
document.write("<h1>Qualifications : </h1>")
document.write(`1-${education[0]}<br>`);
document.write(`2-${education[1]}<br>`);
document.write(`3-${education[2]}<br>`);
document.write(`4-${education[3]}<br>`);
document.write(`5-${education[4]}<br>`);
document.write(`6-${education[5]}<br>`);
document.write(`7-${education[6]}<br>`);
document.write(`8-${education[7]}<br><br>`);

// Question 08
// Write a program to store 3 student names in an array.Take another array to store score of these three students.Assume that total marks are 500 for each student, display the scores & percentages of students like:
let studentName = ["Hamza" , "Umer" , "Hassan"]
let score = [320 , 230 , 480]
let percentage1 = (score[0] / 500) * 100
let percentage2 = (score[1] / 500) * 100
let percentage3 = (score[2] / 500) * 100
document.write(`Score of ${studentName[0]} is : ${score[0]} . Percentage : ${percentage1}%<br>`)
document.write(`Score of ${studentName[1]} is : ${score[1]} . Percentage : ${percentage2}%<br>`)
document.write(`Score of ${studentName[2]} is : ${score[2]} . Percentage : ${percentage3}%<br><br>`)

//  Question 09
// Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
let scoreStudents = [320 , 230 , 480 , 120 ]
console.log(scoreStudents.sort());

//  Question 10
// Write a program to initialize an array with city names.Copy 3 array elements from cities array to selectedCities array.
let cityNames = ["Karachi" , "Lahore" , "Islamabad" , "Quetta" , "Peshawar"]
console.log(cityNames.slice(1,4)); // Lahore , Islamabad , Quetta

// Question 11
// Write a program to create a single string from the below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)
let arrStr = ["This", "is", "my", "cat"];
console.log(`Array : ${arrStr}`);
let singleString = arrStr.join(" ");  // Join all elements into a single string without any separator
console.log(`String : ${singleString}`);

// Question 12
// Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)
let deviceNames = ["keyboard", "mouse", "printer", "monitor"];
console.log("Initial Array:", deviceNames);
// shift() method har baar array ka pehla element remove karta hai, jo FIFO (First In First Out) behavior dikhata hai.
console.log("Out:", deviceNames.shift());
console.log("Out:", deviceNames.shift());
console.log("Out:", deviceNames.shift());
console.log("Out:", deviceNames.shift());

// Question 13
// Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In- First Out)
let deviceName = ["keyboard", "mouse", "printer", "monitor"];
console.log("Initial Array:", deviceName);
// LIFO behavior using pop() to remove and display elements in reverse order.pop remove krkai return bh krta hai
console.log("Out:", deviceName.pop());  
console.log("Out:", deviceName.pop()); 
console.log("Out:", deviceName.pop());  
console.log("Out:", deviceName.pop());

// Question 14
// Write a program to store phone manufacturers (Apple,Samsung, Motorola, Nokia, Sony & Haier) in an array.Display the following dropdown/select menu in your browser using document.write() method:
let phones = ["Apple" , "Samsung" , "Motrola" , "Sony" , "Nokia"]
document.write(`<select>
    <option>${phones[0]}</option>
    <option>${phones[1]}</option>
    <option>${phones[2]}</option>
    <option>${phones[3]}</option>
    <option>${phones[4]}</option>
    </select><br><br>`)

// Question 15
// Initialize an array with color names. Display the array elements in your browser.
let colors = ["red", "pink", "purple"];
document.write(`Original Array: ${colors}<br>`);

// (a) Add color at the beginning
let newColor = prompt("What color do you want to add at the beginning of the array?");
colors.unshift(newColor);
document.write(`Updated Array (Add to Beginning): ${colors}<br>`);

// (b) Add color at the end
newColor = prompt("What color do you want to add at the end of the array?");
colors.push(newColor);
document.write(`Updated Array (Add to End): ${colors}<br>`);

// (c) Add two colors at the beginning
let color1 = prompt("Enter the first color to add at the beginning:");
let color2 = prompt("Enter the second color to add at the beginning:");
colors.unshift(color1, color2);
document.write(`Updated Array (Add Two Colors to Beginning): ${colors}<br>`);

// (d) Delete the first color
colors.shift();
document.write(`Updated Array (Delete First Color): ${colors}<br>`);

// (e) Delete the last color
colors.pop();
document.write(`Updated Array (Delete Last Color): ${colors}<br>`);

  // Ask user for index and color name
let index = prompt("At which index do you want to add a color?");
let newColors = prompt("Enter the color name you want to add:");

  // Add the color at the specified index
colors.splice(index, 0, newColors);
document.write(`Updated Array: ${colors}<br>`);

 // Ask user for index and number of colors to delete
index = prompt("At which index do you want to delete color(s)?");
let count = prompt("How many colors do you want to delete?");

 // Delete the specified number of colors from the array
colors.splice(index, count);
document.write(`Updated Array: ${colors}<br>`);