/*******************************************************************************
 *                     WEB222 â€“ Assignment 2
 * I declare that this assignment is my own work in accordance with Seneca 
 * Academic Policy.  No part of this assignment has been copied manually or 
 * electronically from any other source (including web sites) or distributed to 
 * other students.
 * 
 * Name: Sue Ming Chun Student ID: 032343154 Date: June 3 2018
 *
 ******************************************************************************/


// an array of course objects
var courses = [
    { code: 'APC100', name: 'Applied Professional Communications', hours: 3, url: 'http://www.senecacollege.ca/' },
    { code: 'IPC144', name: 'Introduction to Programming Using C', hours: 4, url: 'https://scs.senecac.on.ca/~ipc144/' },
    { code: 'ULI101', name: 'Introduction to Unix/Linux and the Internet', hours: 4, url: 'https://cs.senecac.on.ca/~fac/uli101/live/' },
    { code: 'IOS110', name: 'Introduction to Operating Systems Using Windows', hours: 4, url: 'https://cs.senecac.on.ca/~fac/ios110' },
    { code: 'EAC150', name: 'College English', hours: 3, url: null }
];

// prototype object for creating student objects
var student = { 
    name: "", 
    dob: new Date(),
    sid: "",
    program: "", 
    gpa: 4.0,
    toString: function () {
        return 'Student info for ' + this.name + ': born on ' + this.dob.toLocaleDateString() +
               ', student id ' + this.sid + ', progrem ' + this.program + ', current GPA ' + this.gpa; 
    }
};

/************************************************************
 * Start your Part B code here. Do not change the code above.
 ************************************************************/
// task 1

var last = courses.pop();
var output1 = [];

console.log("*** Task 1 *** \n\n");
console.log("Course " + last.code + " was deleted from the array (courses) \n");
console.log("Adding new course objects into the array (courses)\n\n");
console.log("Course objects in the array (courses): ")

courses.push(
    { code: 'IBC233', name: 'iSeries Business Computing', hours: 4, url: 'https://scs.senecac.on.ca/~ibc233/'},
    { code: 'OOP244', name: 'Introduction to Object Oriented Programming', hours: 4, url: 'https://scs.senecac.on.ca/~oop244/'},
    { code: 'WEB222', name: 'Internet I - Internet Fundamentals', hours: 4, url: 'https://scs.senecac.on.ca/~web222/'},
    { code: 'DBS201', name: 'Introduction to Database Design and SQL', hours: 4, url: 'https://scs.senecac.on.ca/~dbs201/'}
);

for (var i = 0; i < courses.length; i++) {
    output1[i] = "\"" + courses[i].code + ", " + courses[i].name + ", " + courses[i].hours + " hours/week, " + "website: " + courses[i].url + "\"";
    console.log(output1[i]);
};

// task 2

var students = [];

var jane = {
    name: "Jane Doe",
    dob: new Date('1992-09-05'),
    sid: "1111111111",
    program: "CNS",
    gpa: 3.5,
    toString: function () {
        return 'Student info for ' + this.name + ': born on ' + this.dob.toLocaleDateString() +
               ', student id ' + this.sid + ', progrem ' + this.program + ', current GPA ' + this.gpa; 
    }
}

var betty = {
    name: "Betty Smith",
    dob: new Date('1996-12-10'),
    sid: "222222222",
    program: "PMC",
    gpa: 3.0,
    toString: function () {
        return 'Student info for ' + this.name + ': born on ' + this.dob.toLocaleDateString() +
               ', student id ' + this.sid + ', progrem ' + this.program + ', current GPA ' + this.gpa; 
    }
}

var jessie = {
    name: "Jessie Brown",
    dob: new Date('1995-04-02'),
    sid: "333333333",
    program: "CTY",
    gpa: 4.0,
    toString: function () {
        return 'Student info for ' + this.name + ': born on ' + this.dob.toLocaleDateString() +
               ', student id ' + this.sid + ', progrem ' + this.program + ', current GPA ' + this.gpa; 
    }
}

var mary = {
    name: "Mary philips",
    dob: new Date('1997-01-25'),
    sid: "444444444",
    program: "ECT",
    gpa: 2.5,
    toString: function () {
        return 'Student info for ' + this.name + ': born on ' + this.dob.toLocaleDateString() +
               ', student id ' + this.sid + ', progrem ' + this.program + ', current GPA ' + this.gpa; 
    }
}

students.push(jane, betty, jessie, mary);

console.log("\n\n*** Task 2 *** \n\n");

console.log("Student objects in the array (students): ");

function display(a2) {
    var output2 = [];
    var i = 0;
    a2.forEach(function(element) {
        output2[i] = i + ": " + element.toString();
        console.log(output2[i]);
        i++;
    });
}
display(students);
