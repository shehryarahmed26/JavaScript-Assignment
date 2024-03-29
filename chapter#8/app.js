// =====================  CHAPTER NO 08     ====================================//
// Question 1

// Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. 
// (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).

//      =================  ANSWER   ===============

var input = prompt("Enter a character (number or string):");

var asciiCode = input.charCodeAt(0);

if (asciiCode >= 48 && asciiCode <= 57) {
    alert("The input '" + input + "' is a number.");
} else if (asciiCode >= 65 && asciiCode <= 90) {
    alert("The input '" + input + "' is an uppercase letter.");
} else if (asciiCode >= 97 && asciiCode <= 122) {
    alert("The input '" + input + "' is a lowercase letter.");
} else {
    alert("The input '" + input + "' is not a number, uppercase letter, or lowercase letter.");
}


// Question 2

// Write a JavaScript program that accept two integers and display the larger.
//  Also show if the two integers are equal

//      =================  ANSWER   ===============

var firstInteger = parseInt(prompt("Enter the first integer:"));

var secondInteger = parseInt(prompt("Enter the second integer:"));

if (firstInteger > secondInteger) {
    alert("The larger integer is: " + firstInteger);
} else if (secondInteger > firstInteger) {
    alert("The larger integer is: " + secondInteger);
} else {
    alert("Both integers are equal.");
}



// Question 3

// Write a program that takes input a number from user & state whether the number is positive, negative or zero. 

//      =================  ANSWER   ===============


var number = parseFloat(prompt("Enter a number:"));

if (number > 0) {
    alert("The number " + number + " is positive.");
} else if (number < 0) {
    alert("The number " + number + " is negative.");
} else {
    alert("The number is zero.");
}


// Question 4

// Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise 

//      =================  ANSWER   ===============


var character = prompt("Enter a character (string of length 1):");

character = character.toLowerCase();

if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
    alert("The character '" + character + "' is a vowel.");
    console.log(true);
} else {
    alert("The character '" + character + "' is not a vowel.");
    console.log(false);
}



// Question 5

// Write a program that
// a.Store correct password in a JS variable.
//     b.Asks user to enter his / her password
// c.Validate the two passwords:
// i.Check if user has entered password.
//    If not, then give message “ Please enter your password”
// ii.Check if both passwords are same. 
//  If they are same, show message “Correct! The password you entered matches the original password”.
// Show “Incorrect password” otherwise.

//      =================  ANSWER   ===============

var correctPassword = "password123";

var userPassword = prompt("Enter your password:");

if (!userPassword) {
    alert("Please enter your password.");
} else {
    if (userPassword === correctPassword) {
        alert("Correct! The password you entered matches the original password.");
    } else {
        alert("Incorrect password.");
    }
}


// Question 6

// This if/else statement does not work. Try to fix it: var greeting; var hour = 13; if (hour < 18) { greeting = "Good day"; else greeting = "Good evening"; } 

//      =================  ANSWER   ===============

var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}



// Question 7

// Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements 

//      =================  ANSWER   ===============

// Prompt the user to enter the time in 24-hour clock format
var time = parseInt(prompt("Enter the time in 24-hour clock format (e.g., 1900 for 7pm):"));

if (time >= 0 && time < 1200) {
    alert("Good morning!");
} else if (time >= 1200 && time < 1700) {
    alert("Good afternoon!");
} else if (time >= 1700 && time < 2100) {
    alert("Good evening!");
} else if (time >= 2100 && time <= 2359) {
    alert("Good night!");
} else {
    alert("Invalid input. Please enter a time in 24-hour clock format.");
}


