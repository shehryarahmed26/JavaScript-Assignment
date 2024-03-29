


//       // =====================  CHAPTER NO 04      ====================================//

// // Question 1

// Declare 3 variables in one statement. 

//      =================  ANSWER   ===============


// var one = 10, two = 20, three = 30;

// // Question 2

// Declare 5 legal & 5 illegal variable names.

//      =================  ANSWER   ===============


// // Legal variable names:

 document.write("<h2>"+ "legal variable names" + "</h2>");
 document.write("<li>"+ "myVar" + "</li>");
 document.write("<li>"+"number1" + "</li>");
 document.write("<li>"+"_data" + "</li>");
 document.write("<li>"+"$price" + "</li>");
 document.write("<li>"+"camelCaseVariable" + "</li>");

// // Illegal variable names:
document.write("<h2>"+ "illegal variable names" + "</h2>");
document.write("<li>"+ "2ndVariable" + "</li>");
document.write("<li>"+"my-variable" + "</li>");
document.write("<li>"+"my variable" + "</li>");
document.write("<li>"+"var" + "</li>");
document.write("<li>"+"let" + "</li>");


// // Question 3

// Display this in your browser
//  a)  A heading stating “Rules for naming JS variables” 
//  b)  Variable names can only contain ______, ______, ______ and ______. For example $my_1stVariable 
//  c) Variables must begin with a ______, ______ or _____. For example $name, _name or name
//   d) Variable names are case _________ e) Variable names should not be JS _________   


//      =================  ANSWER   ===============


var rule1 = "letters";
var rule2 = "numbers";
var rule3 = "underscores";
var rule4 = "dollar signs";

document.write("<h2>"+ "Rules for naming JS variables"+ "</h2>");
document.write("Variable names can only contain " + rule1 + ", " + rule2 + ", " + rule3 + " and " + rule4 + ".<br>");
document.write("For example $my_1stVariable<br>");

document.write("Variables must begin with a ");
document.write("letter, " + rule4 + ", or " + rule3 + ".<br>");
document.write( "For example $name, _name or name<br>");

document.write("Variable names are case sensitive.<br>");
document.write( "Variable names should not be JS keywords.");


    // =====================  CHAPTER NO 04 END     ====================================//