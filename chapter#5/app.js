
// =====================  CHAPTER NO 05     ====================================//

// Question 1

// Write a program that take two numbers & add them in a new variable. Show the result in your browser.

//      =================  ANSWER   ===============



var num1 = 5;
var num2 = 7;

var sum = num1 + num2;

document.write("The sum of " + num1 + " and " + num2 + " is: " + sum);

// Question 2

// Repeat task1 for subtraction, multiplication, division & modulus.


//      =================  ANSWER   ===============



var num1 = 5;
var num2 = 7;

var subtractionResult = num1 - num2;

var multiplicationResult = num1 * num2;


var divisionResult = num1 / num2;


var modulusResult = num1 % num2;

document.write("The division of " + num1 + " and " + num2 + " is: " + sum);
document.write("The multiplication of " + num1 + " and " + num2 + " is: " + sum);
document.write("The modulus of " + num1 + " and " + num2 + " is: " + sum);


// Question 3

// Do the following using JS Mathematic Expressions
// a.Declare a variable.
//   b.Show the value of variable in your browser like “Value after variable declaration is: ??”.
// c.Initialize the variable with some number.
//   d.Show the value of variable in your browser like “Initial value: 5”.
// e.Increment the variable.
//   f.Show the value of variable in your browser like “Value after increment is: 6”.
// g.Add 7 to the variable.
//   h.Show the value of variable in your browser like “Valueafter addition is: 13”.
// i.Decrement the variable.
//   j.Show the value of variable in your browser like “Value after decrement is: 12”.
// k.Show the remainder after dividing the variable’s value by 3.
// l.Output : “The remainder is: 0”.


//      =================  ANSWER   ===============



var myVariable;
document.write("Value after variable declaration is: " + myVariable);
myVariable = 5;
document.write("Initial value: " + myVariable);
myVariable++;
document.write("Value after increment is: " + myVariable);
document.write("Value after addition is: " + myVariable);
document.write("Value after decrement is: " + myVariable);
var remainder = myVariable % 3;
document.write("The remainder is: " + remainder);

// Question 4

// Cost of one movie ticket is 600 PKR. 
// Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie.

//      =================  ANSWER   ===============


var ticketPrice = 600;

var numberOfTickets = 5;

var totalCost = ticketPrice * numberOfTickets;

document.write("Cost of one movie ticket is: " + ticketPrice + " PKR");
document.write("<Movie Ticket Cost");
document.write("Number of tickets to buy: " + numberOfTickets);
document.write("Total cost for " + numberOfTickets + " tickets is: " + totalCost + " PKR");

// Question 5

// Write a script to display multiplication table of any number in your browser. 

//      =================  ANSWER   ===============


var number = 6;

document.write("Multiplication Table of " + number);

for (var i = 1; i <= 10; i++) {
  document.write(number + " x " + i + " = " + (number * i));
};

// Question 6

// The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
//  a.  Store a Celsius temperature into a variable.
//   b. Convert it to Fahrenheit & output “NNoC is NNoF”.
//    c. Now store a Fahrenheit temperature into a variable.
//     d. Convert it to Celsius & output “NNoF is NNoC”. 


//      =================  ANSWER   ===============


var ctemp = 30;

var ftemp = (ctemp * 9 / 5) + 32;
document.write("<p>" + ctemp + "C is " + ftemp + "F</p>");
var ftemp = 86;
var ctemp = (ftemp - 32) * 5 / 9;
document.write("<p>" + ftemp + "F is " + ctemp + "C</p>");

// Question 7

// Write a program to implement checkout process of a shopping cart system for an e-commerce website. 
// Store the following in variables 
// Price of item 1
//  b. Price of item 2
//   c. Ordered quantity of item 1
//    d. Ordered Quantity of item 2
//     e. Shipping charges 
// Compute the total cost & show the receipt in your browser.

//      =================  ANSWER   ===============


var pitem1 = 25;
var pitem2 = 35;
var qitem1 = 3;
var qitem2 = 2;
var charges = 10;
var totalCost = (pitem1 * qitem1) + (pitem2 * qitem2) + charges;
document.write("<Receipt</h2>");
document.write("Price of item 1: $" + pitem1);
document.write("Price of item 2: $" + pitem2);
document.write("Ordered quantity of item 1: " + qitem1);
document.write("Ordered quantity of item 2: " + qitem2);
document.write("Shipping charges: $" + charges);
document.write("Total cost: $" + totalCost);

//  Question 8

// Store total marks & marks obtained by a student in 2 variables. 
// Compute the percentage & show the result in your browser 

//      =================  ANSWER   ===============


var total = 500;
var obtaine = 430;
var percentage = (obtaine / total) * 100;


document.write("Percentage Calculation");
document.write("Total marks: " + total);
document.write("Marks obtained: " + obtaine);
document.write("Percentage: " + percentage);

//  Question 9

// Assume we have 10 US dollars & 25 Saudi Riyals. 
// Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. 
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee) 

//      =================  ANSWER   ===============



var dollar = 10;
var riyal = 25;


var exchangeUSD = 104.80;
var exchangeSAR = 28;


var rupees = (dollar * exchangeUSD) + (riyal * exchangeSAR);


document.write("Currency Conversion</h2>");
document.write("Total US Dollars: " + dollar);
document.write("Total Saudi Riyals: " + riyal);
document.write("Total Pakistani Rupees: " + rupees);

// Question 10

// Write a program to initialize a variable with some number and do arithmetic in following sequence:
//  a. Add 5
//  b. Multiply by 10 
//  c. Divide the result by 2 Perform all calculations in a single expression 


//      =================  ANSWER   ===============



var number = 10;


var result = (((number + 5) * 10) / 2);

document.write("Arithmetic Operations");
document.write("Initial number: " + number);
document.write("Result after arithmetic operations: " + result);


// Question  11

// The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
//  b. Store their birth year in a variable.
//   c. Calculate their 2 possible ages based on the stored values. 
//   Output them to the screen like so: “They are either NN or NN years old”


//      =================  ANSWER   ===============


var currentYear = new Date().getFullYear();

var birthYear = 2004;

var age = currentYear - birthYear;


document.write("Age Calculator");
document.write("Current Year: " + currentYear);
document.write("Birth Year: " + birthYear);
document.write("Age: You are " + age + " years old.");


//  Question  12

// The Geometrizer: Calculate properties of a circle.
//  a. Store a radius into a variable. 
// b. Calculate the circumference based on the radius, and output “The circumference is NN”. 
// (Hint : Circumference of a circle = 2 π r , π = 3.142) Calculate the area based on the radius, and output “The area is NN”.
//  (Hint : Area of a circle = π r2, π = 3.142) 


//      =================  ANSWER   ===============



var radius = 5;


var circumference = 2 * Math.PI * radius;


var area = Math.PI * Math.pow(radius, 2);

// Display the results
document.write("Circle Properties Calculator");
document.write("Radius: " + radius);
document.write("The circumference is " + circumference.toFixed(2));
document.write("The area is " + area.toFixed(2));


//  Question  13

// The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
//  a. Store your favorite snack into a variable
//  b. Store your current age into a variable.
//  c. Store a maximum age into a variable. 
//  d. Store an estimated amount per day (as a number). 
//  e. Calculate how many would you eat total for the rest of your life.
//   Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”. 

//      =================  ANSWER   ===============


var favoriteSnack = "chocolate bars";

var currentAge = 30;

var maxAge = 80;
var amountPerDay = 2;

var yearsRemaining = maxAge - currentAge;
var totalSnacksNeeded = yearsRemaining * 365 * amountPerDay;

document.write("Lifetime Supply Calculator");
document.write("Your favorite snack: " + favoriteSnack);
document.write("Your current age: " + currentAge);
document.write("Your maximum age: " + maxAge);
document.write("Amount of snack per day: " + amountPerDay);
document.write("You will need " + totalSnacksNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge);


// =====================  CHAPTER NO 05 END     ====================================//
