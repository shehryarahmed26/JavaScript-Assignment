// =====================  CHAPTER NO 10   ====================================//

// Question 1

// Declare and initialize an empty multidimensional array.
// (Array of arrays)

//      =================  ANSWER   ===============
var multiArray = [];

multiArray.push([]);
multiArray.push([]);
multiArray[0].push(1, 2, 3);
multiArray[1].push("a", "b", "c");

console.log(multiArray);

// Question 2
// Declare and initialize a multidimensional array
// representing the following matrix:
// 0123 1012 2101

//      =================  ANSWER   ===============

var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

console.log(matrix);

// Question 3

// . Write a program to print numeric counting from 1 to 10.
//      =================  ANSWER   ===============
for (var i = 1; i <= 10; i++) {
    console.log(i);
}

// Question 4

// Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

//      =================  ANSWER   ===============

var tableNumber = parseInt(prompt("Enter the number for the multiplication table:"));
var tableLength = parseInt(prompt("Enter the length of the multiplication table:"));

console.log("Multiplication Table for", tableNumber, ":");
for (var i = 1; i <= tableLength; i++) {
    console.log(tableNumber, "x", i, "=", tableNumber * i);
}

// Question 5
// Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]


//      =================  ANSWER   ===============
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

console.log("Items of the array:");
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Question 6

// . Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

//      =================  ANSWER   ===============

document.write("<b>a. Counting:</b> ");
for (var i = 1; i <= 15; i++) {
    document.write(i);
    if (i < 15) {
        document.write(", ");
    }
}

document.write("<br><b>b. Reverse counting:</b> ");
for (var i = 10; i >= 1; i--) {
    document.write(i);
    if (i > 1) {
        document.write(", ");
    }
}

document.write("<br><b>c. Even:</b> ");
for (var i = 0; i <= 20; i += 2) {
    document.write(i);
    if (i < 20) {
        document.write(", ");
    }
}

document.write("<br><b>d. Odd:</b> ");
for (var i = 1; i <= 19; i += 2) {
    document.write(i);
    if (i < 19) {
        document.write(", ");
    }
}

document.write("<br><b>e. Series:</b> ");
for (var i = 2; i <= 20; i += 2) {
    document.write(i + "k");
    if (i < 20) {
        document.write(", ");
    }
}

// Question 7

// You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:


//      =================  ANSWER   ===============
var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var userInput = prompt("Enter an item to search:");

userInput = userInput.toLowerCase();

var found = false;

for (var i = 0; i < A.length; i++) {
    var currentItem = A[i].toLowerCase();
    if (currentItem === userInput) {
        found = true;
        break;
    }
}

if (found) {
    alert("Yes, '" + userInput + "' is found in the list.");
} else {
    alert("No, '" + userInput + "' is not found in the list.");
}

// Question 8
// Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

//      =================  ANSWER   ===============
var A = [24, 53, 78, 91, 12];

var largestNumber = A[0]; 

for (var i = 1; i < A.length; i++) {
    if (A[i] > largestNumber) {
        largestNumber = A[i]; 
    }
}

console.log("The largest number in the array is:", largestNumber);

// Question 9

// Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

//      =================  ANSWER   ===============
var A = [24, 53, 78, 91, 12];

var smallestNumber = A[0];

for (var i = 1; i < A.length; i++) {
    if (A[i] < smallestNumber) {
        smallestNumber = A[i];
    }
}

console.log("The smallest number in the array is:", smallestNumber);

// Question 10

// Write a program to print multiples of 5 ranging 1 to
// 100.

//      =================  ANSWER   ===============
console.log("Multiples of 5 ranging from 1 to 100:");
for (var i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}


