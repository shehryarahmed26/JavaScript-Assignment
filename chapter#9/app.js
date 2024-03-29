// =====================  CHAPTER NO 09    ====================================//

// Question 1

// Declare an empty array using JS literal notation to store
// student names in future.

//      =================  ANSWER   ===============

var studentNames = [];


// Question 2

// Declare an empty array using JS object notation to store
// student names in future.

//      =================  ANSWER   ===============

var studentNames = {
    names: []
};


// Question 3
//  Declare and initialize a strings array.

//      =================  ANSWER   ===============

var fruits = ["apple", "banana", "orange", "mango"];

console.log(fruits);


// Question 4

// Declare and initialize a numbers array.

//      =================  ANSWER   ===============

var numbers = [10, 20, 30, 40, 50];

console.log(numbers);

// Question 5 

// Declare and initialize a boolean array

//      =================  ANSWER   ===============

var booleanArray = [true, false, true, false];

console.log(booleanArray);

// Question 6

// Declare and initialize a mixed array.

//      =================  ANSWER   ===============

var mixedArray = ["apple", 10, true, { name: "John", age: 30 }];

console.log(mixedArray);

// Question 7

// Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:


//      =================  ANSWER   ===============

var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("<h2>Educational Qualifications in Pakistan:</h2>");
document.write("<ul>");
for (var i = 0; i < qualifications.length; i++) {
    document.write("<li>" + qualifications[i] + "</li>");
}
document.write("</ul>");

// Question 8

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:


//      =================  ANSWER   ===============

var studentNames = ["John", "Emily", "Michael"];

var scores = [380, 420, 450];

var percentages = [];
for (var i = 0; i < scores.length; i++) {
    percentages[i] = (scores[i] / 500) * 100;
}

for (var i = 0; i < studentNames.length; i++) {
    document.write("<h2>Student: " + studentNames[i] + "</h2>");
    document.write("<p>Score: " + scores[i] + "</p>");
    document.write("<p>Percentage: " + percentages[i] + "%</p>");
    document.write("<br>");
}

// Question 9

// Initialize an array with color names.
//  Display the array elements in your browser.
// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array.
//  Display the updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Thenremove the same number of color(s) from user-defined position/index. Display the updated array in your browser.

//      =================  ANSWER   ===============

var colors = ["red", "green", "blue"];

document.write("<h2>Initial Array:</h2>");
document.write("<p>" + colors.join(", ") + "</p>");

var colorToAddAtStart = prompt("Enter the color you want to add to the beginning:");
colors.unshift(colorToAddAtStart);

document.write("<h2>Array after adding color at the beginning:</h2>");
document.write("<p>" + colors.join(", ") + "</p>");

var colorToAddAtEnd = prompt("Enter the color you want to add to the end:");
colors.push(colorToAddAtEnd);

document.write("<h2>Array after adding color at the end:</h2>");
document.write("<p>" + colors.join(", ") + "</p>");

colors.unshift("yellow", "orange");

document.write("<h2>Array after adding two more colors at the beginning:</h2>");
document.write("<p>" + colors.join(", ") + "</p>");

colors.shift();

document.write("<h2>Array after deleting the first color:</h2>");
document.write("<p>" + colors.join(", ") + "</p>");

colors.pop();

document.write("<h2>Array after deleting the last color:</h2>");
document.write("<p>" + colors.join(", ") + "</p>");

var indexToAddColor = parseInt(prompt("Enter the index at which you want to add a color:"));
var colorToAdd = prompt("Enter the color you want to add:");
colors.splice(indexToAddColor, 0, colorToAdd);

document.write("<h2>Array after adding color at the desired position:</h2>");
document.write("<p>" + colors.join(", ") + "</p>");

var indexToDelete = parseInt(prompt("Enter the index from which you want to delete color(s):"));
var numberOfColorsToDelete = parseInt(prompt("Enter the number of colors you want to delete:"));
colors.splice(indexToDelete, numberOfColorsToDelete);

document.write("<h2>Array after deleting color(s) from the desired position:</h2>");
document.write("<p>" + colors.join(", ") + "</p>");

// Question 10

// Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.
//      =================  ANSWER   ===============
var studentScores = [85, 72, 93, 65, 78];

document.write("<h2>Original Array:</h2>");
document.write("<p>" + studentScores.join(", ") + "</p>");

studentScores.sort(function(a, b) {
    return a - b;
});

document.write("<h2>Sorted Array (Ascending Order):</h2>");
document.write("<p>" + studentScores.join(", ") + "</p>");

// Question 11

// Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array
//      =================  ANSWER   ===============

var cities = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta"];

document.write("<h2>Original Cities Array:</h2>");
document.write("<p>" + cities.join(", ") + "</p>");

var selectedCities = [];

selectedCities.push(cities[0], cities[1], cities[2]);

document.write("<h2>Selected Cities Array:</h2>");
document.write("<p>" + selectedCities.join(", ") + "</p>");

// Question 12
// Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)
//      =================  ANSWER   ===============

var arr = ["This", "is", "my", "cat"];

var singleString = arr.join(" ");

console.log(singleString); // Output: "This is my cat"


// Question 13
// Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

//      =================  ANSWER   ===============
var fifoQueue = [];

fifoQueue.push("Value 1");
fifoQueue.push("Value 2");
fifoQueue.push("Value 3");

var firstValue = fifoQueue.shift(); 
var secondValue = fifoQueue.shift(); 
var thirdValue = fifoQueue.shift(); 

console.log("First value retrieved:", firstValue);
console.log("Second value retrieved:", secondValue);
console.log("Third value retrieved:", thirdValue);

// Question 14

// Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)
//      =================  ANSWER   ===============

var lifoStack = [];

lifoStack.push("Value 1");
lifoStack.push("Value 2");
lifoStack.push("Value 3");

var thirdValue = lifoStack.pop(); // Removes and returns "Value 3"
var secondValue = lifoStack.pop(); // Removes and returns "Value 2"
var firstValue = lifoStack.pop(); // Removes and returns "Value 1"

console.log("First value retrieved:", firstValue);
console.log("Second value retrieved:", secondValue);
console.log("Third value retrieved:", thirdValue);

// Question 15

// Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:

//      =================  ANSWER   ===============

var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<select>");
for (var i = 0; i < manufacturers.length; i++) {
    document.write("<option value='" + manufacturers[i] + "'>" + manufacturers[i] + "</option>");
}
document.write("</select>");



