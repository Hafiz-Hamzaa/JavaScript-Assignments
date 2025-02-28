// ARRAYS & LOOP
// Question 01 & 02
// Declare and initialize an empty multidimensional array. (Array of arrays)
// Declare and initialize a multidimensional array representing the following matrix:
let arr = [
    [0 , 1 , 2 , 3],
    [1 , 0 , 1 , 2],
    [2 , 1 , 0 , 1]
]

// Question 03
// Write a program to print numeric counting from 1 to 10.
let num = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]
for(let i = 0; i < num.length; i++) {
    console.log(num[i]);
}

// Question 04
// Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.
let tableNumber = +prompt("Enter a number to show its multiplication table")
let numberLength = +prompt("Enter length multiplication table")
for(let i = 1; i <= numberLength; i++) {
    console.log(`${tableNumber} X ${i} = ${tableNumber * i}`);
}

// Question 05
// Write a program to print items of the following array using for loop:
let fruits = ["apple" , "mango" , "banana" , "pear" , "orange"]
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Question 06
// Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
let counting =  [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15]
for(let i = 0; i < counting.length; i++) {
    document.write(`Counting :${counting[i]} <br>`)
}

let reverse = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
reverse.reverse();
for (let i = 0; i < reverse.length; i++) {
    document.write(`Reverse :${reverse[i]}<br>`);
}

let even = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20]
for(let i = 0; i < even.length; i++) {
    if(even[i] % 2 === 0) {
        console.log(`${even[i]}`)
    }
}

let odd = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20]
for(let i = 0; i < odd.length; i++) {
    if(odd[i] % 2 !== 0) {
        console.log(`${odd[i]}`)
    }
}

for(let i = 1; i <= 10; i++) {
    console.log(`${2 * i}k`)
}


// Question 07
// Write a program to identify the largest number in the given array.
let larNum = [24 , 53 , 78 , 91 , 12 , 120]
let largest = Math.max(...larNum)
console.log(`Largets Number = ${largest}`);

// Question 08
// Write a program to identify the smallest number in the given array.
let smaNum = [24 , 53 , 78 , 91 , 12 , 120]
let small = Math.min(...smaNum)
console.log(`Smallest Number = ${small}`);

// Question 09
// Write a program to print multiples of 5 ranging 1 to 100.
// let table_Number = +prompt("Enter a number to show its multiplication table")
// let number_Length = +prompt("Enter length multiplication table")
// for(let i = 1; i <= number_Length; i++) {
//     console.log(`${table_Number} X ${i} = ${table_Number * i}`);
// }

// OR
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}

// Question 10
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
let food = ["cake" , "cookies" , "patties" , "bread" , "candies"]
let user = prompt("Enter a food name")
let flag = false
for(let i = 0; i < food.length; i++) {
    if(food[i] === user) {
        flag = true
        console.log(`${food[i]} is available`);
    }
}
if(flag === false) {
    console.log("Soory this food is not available")
}