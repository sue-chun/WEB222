/*******************************************************************************
 *                     WEB222 – Assignment 2
 * I declare that this assignment is my own work in accordance with Seneca 
 * Academic Policy.  No part of this assignment has been copied manually or 
 * electronically from any other source (including web sites) or distributed to 
 * other students.
 * 
 * Name: Sue Ming Chun Student ID: 032343154 Date: June 3 2018
 *
 ******************************************************************************/



// used console.log when calling each Step to ensure outputs are correct 

/********** Step 1 **********/

var e1, e2, e3, e4, e5, e6, e7, str;

/********** End of Step 1 **********/

/********** Step 2 **********/

var e1 = prompt("Enter first name: ", "Sue");

function capFirstLetter(c2) {
  var a2 = c2[0].toUpperCase();
  var b2 = c2.substr(1);
  var d2 = b2.toLowerCase();
  
  var Ustring = a2 + d2;
  return Ustring;
}
e1 = capFirstLetter(e1);
// console.log(e1);

/*
Professor's Step 2 Answer from Lab Class:
function capFirstLetter(str) {
  return str.substr(0,1).toUpperCase() + str.substr(1).toLowerCase();
}

e1 = prompt("Enter first name: ", "john");
e1 = capFirstLetter(e1);
*/

/********** End of Step 2 **********/

/********** Step 3 **********/

var e2 = parseInt(prompt("Enter the year of your birth day: ", "1992"));

var c3 = function getAge(a3) {
  var b3 = (new Date()).getFullYear();
  var d3 = b3 - a3 
  return d3;
}

e2 = c3(e2);
// console.log(e2);

/********** End of Step 3 **********/

/********** Step 4 **********/

var e3 = prompt("Enter the college you are attending: ", "seneca college");

function split(a4) {
  var array1 = a4.split(' ');
  var n4 = array1.length;
  var output4 = "";
  
  for (var i = 0; i < n4; i++) {
    output4 = output4 + capFirstLetter(array1[i]) + " ";
  }
  return output4;
}

split(e3);
e3 = split(e3);
// console.log(e3);

/********** End of Step 4 **********/

/********** Step 5 **********/

e4 = prompt("Enter your 5 favourite sports: ", "hockey,football,basketball,tennis,golf");
e5 = prompt("Enter an extra favourite sport: ", "formula 1");

function sports(a5, b5) {
  a5 = a5.replace('football', 'soccer');
  var array5 = a5.split(',');
  e4 = array5;
  e4.push(e5);
  return 0;
}

sports(e4, e5);

/********** End of Step 5 **********/

/********** Step 6 **********/

function step6(a6) {
  var n6 = a6.length;
  var output6 = "";
  a6 = a6.sort();
  for (var i = 0; i < n6; i++) {
    output6 += a6[i].toUpperCase() + "\n";  
  }
  return output6;
}
// console.log(step6(e4));
step6(e4);

/********** End of Step 6 **********/

/********** Step 7 **********/

e6 = new Date();

function zero(b7) {
  if (b7 < 10) {
    b7 = "0" + b7
  }
  return b7;
}

function getDateString(a7) {
  var myDay = zero(a7.getDate());
  var myMonth = zero(a7.getMonth() + 1);
  var myYear = a7.getFullYear();
  var output = myYear + "-" + myMonth + "-" + myDay
  return output;
}

e7 = getDateString(e6);
// console.log(e7);

/********** End of Step 7 **********/

/********** Step 8 **********/

e4 = step6(e4);

function addTab(a8) {
  var end = a8.lastIndexOf('\n');
  console.log(end);
  var preout = a8.substring(0,end).replace(/\n/g, '\n \t');
  var output8 = preout + a8.substring(end);
  return output8;
}
addTab(e4);
e4 = addTab(e4);
// console.log(e4);

var str = 
    "User info: \n\n" +
    "name (e1): " + e1 + "\n" +
    "age (e2): " + e2 + "\n" +
    "school (e3): " + e3 + "\n" +
    "favourite sports (e4): \n \t" + e4 +
    "current date (e7): " + e7

console.log(str);

/********** End of Step 8 **********/
