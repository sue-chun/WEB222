/*********************************************************************************
* WEB222 – Assignment 01
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of
* this assignment has been copied manually or electronically from any other source (including web sites)
* or distributed to other students.
*
* Name: Sue Ming Chun Student ID: 032343154 Date: Monday, May 14, 2018
*
********************************************************************************/

/********** Task 1 **********/

function task1() {
  var student_name = "Sue Ming Chun";
  var courses = 4;
  var program = "CPD";
  var job = true;  
  var job_output = "";

  if (job = true) 
    job_output = "have";
  else 
    job_output = "don't have";
  
  var sentence = "My name is " + student_name + " and I'm in " + program + ". I'm taking " + courses + " courses in this semester and I " + job_output + " a part-time job now."
  return sentence;
}
console.log(task1());

/********** End of Task 1 **********/

/********** Task 2 **********/

function task2() {
  var current_year = 2018;
  var age = prompt("Please enter your age");
  var year_born = console.log("You were born in the year of " + (current_year - age) + ".");
  
  var study = prompt("Enter the number of years you expect to study in the college:");
  var graduate = console.log("You will graduate from Seneca college in the year of " + (current_year+parseInt(study)) + ".");
}
task2();

/********** End of Task 2 **********/

/********** Task 3 **********/

function task3() {
  var celsius_input = 10;
  var fahrenheit_conversion = console.log(celsius_input + "°C is " + (celsius_input * (9/5) + 32) + "°F.");
  
  var fahrenheit_input = 10;
  var celsius_conversion = console.log(fahrenheit_input + "°F is " + ((fahrenheit_input - 32) * (5/9)) + "°C.");
  return 0;
}
task3();

/********** End of Task 3 **********/

/********** Task 4 **********/

function task4() {
  for(var i=0; i <=10; i++){
    if (i % 2 != 0) {
      console.log(i + " is odd");
    }
  
    if (i % 2 == 0) {
      console.log(i + " is even");
    }
  }
}
task4();

/********** End of Task 4 **********/

/********** Task 5 **********/

function largerNum(a,b) {
  if (a>b) 
    return a;
  else
    return b;
}

var c = function greaterNum(a,b) {
    if (a>b) {
    return a;
    }
  else {
    return b;
  }
}

// first call
var larger = largerNum(5,2);
var greater = c(12,2);

if (larger > greater)
console.log("The larger number of " + larger + " and " + greater + " is " + larger + ".");
else
console.log("The larger number of " + larger + " and " + greater + " is " + greater + ".");

// second call
var larger = largerNum(4,2);
var greater = c(6,2);

if (larger > greater)
console.log("The larger number of " + larger + " and " + greater + " is " + larger + ".");
else
console.log("The larger number of " + larger + " and " + greater + " is " + greater + ".");

/********** End of Task 5 **********/

/********** Task 6 **********/

function Evaluator() {
  var a = 0;
  for (var i=0; i < arguments.length; i++) {
    a += arguments[i];
    }
  a /= i
  if (a >= 50)
    return true;
  else
    return false;
}

// call #1
console.log("Average greater than or equal to 50: " + Evaluator(56, 33, 67, 84, 92));

// call #2
console.log("Average greater than or equal to 50: " + Evaluator(7, 13, 17, 34, 2, 6, 3, 15));

// call #3
console.log("Average greater than or equal to 50: " + Evaluator(100, 15, 38));

/********** End of Task 6 **********/

/********** Task 7 **********/

var d = function Grader(a) {
  if (a <= 100 && a >= 90) 
    var grade = "A+"

  else if (a <= 89 && a >= 80) 
    var grade = "A"

  else if (a <= 79 && a >= 75)
    var grade = "B+"
    
  else if (a <= 74 && a >= 70)
    var grade = "B"
    
  else if (a <= 69 && a >= 65)
    var grade = "C+"
    
  else if (a <= 64 && a >= 60)
    var grade = "C"
    
  else if (a <= 59 && a >= 55)
    var grade = "D+"
    
  else if (a <= 54 && a >= 50)
    var grade = "D"
    
  else 
    var grade = "F"
  
  return grade;
}

// call #1
console.log("Your grade is: " + d(85));

// call #2
console.log("Your grade is: " + d(60));

// call #3
console.log("Your grade is: " + d(35));

/********** End of Task 7 **********/

/********** Task 8 **********/

function showMultiples (num, numMultiples) {
  for (i=1; i<=numMultiples; i++) {
    var str = num + " x " + i + " = " + (num*i);
    console.log(str);
  }
}

// call #1
showMultiples(5, 4);

// call #2
showMultiples(3, 3);

// call #3
showMultiples(6, 5);

/********** End of Task 8 **********/

