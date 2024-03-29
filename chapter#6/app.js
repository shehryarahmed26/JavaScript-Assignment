


// =====================  CHAPTER NO 06     ====================================//


//  Question  1

//     Write a program to take a number in a variable,
//  do the required arithmetic to display the following result in your browser: 


//      =================  ANSWER   ===============

var a = 10;

document.write("the value of a is " + a);
document.write("the value of ++a is " + ++a);
document.write("now the value of a is " + a);

document.write("the value of a is " + a++);
a = a++;
document.write("now the value of a is " + a++);
a = --a;
document.write("the value of a is " + --a);
document.write(" now the value of a is " + a);
document.write("the value of a is " + a--);
a = a--;
document.write("the value of a is " + a--);

// Question  2
//     What will be the output in variables a, b & result after execution of the following script:
//  var a = 2, b = 1;
//   var result = --a - --b + ++b + b--;
//    Explain the output at each stage: 
//      --a;
//      --a - --b;
//      --a - --b + ++b;
//      --a - --b + ++b + b--; 



//      =================  ANSWER   ===============


var a = 2, b = 1;
var result = --a - --b + ++b + b--;

document.write("a is " + a + "<br>");
document.write("b is " + b + "<br>");
document.write("result = " + result + "<br>");

document.write("a  =" + --a + "<br>");
document.write(--a - --b + "<br>");
document.write(--a - --b + ++b + "<br>");
document.write(--a - --b + ++b + b-- + "<br>");

// Question  3

// Write a program that takes input a name from user & greet the user. 


//      =================  ANSWER   ===============


var username = (prompt("enter your name"));

alert("welcome " + username);


// Question  4

// Write a program to take input a number from user & display it’s multiplication table on your browser.
//  If user does not enter a new number, 
//  multiplication table of 5 should be displayed by default.


//      =================  ANSWER   ===============


var userInput = prompt("Enter a number (default is 5):");

var number = parseInt(userInput);

if (isNaN(number) || number <= 0) {
     number = 5;
     document.write("<p>No valid input provided. Using default number: 5</p>");
}

document.write("<h3>Table for " + number + "</h3>");
for (var i = 1; i <= 10; i++) {
     document.write(number + " × " + i + " = " + (number * i) + "<br>");
}

// Question  5

// a) Take three subjects name from user and store them in 3 different variables. 
// b) Total marks for each subject is 100, store it in another variable. 
// c) Take obtained marks for first subject from user and stored it in different variable. 
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
//  e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)


//      =================  ANSWER   ===============


var subject1 = prompt("Enter name of first subject:");
var subject2 = prompt("Enter name of second subject:");
var subject3 = prompt("Enter name of third subject:");

var totalMarks = 100;

var obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));

var obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
var obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage = (totalObtainedMarks / (3 * totalMarks)) * 100;

document.write("<table border='1'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
document.write("</table>");
document.write("<p>Total Marks Obtained: " + totalObtainedMarks + "</p>");
document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");


////   =====================  CHAPTER NO 06 END    ==================================== ///

