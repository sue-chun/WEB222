// Data for the "HTML Lists" Page

var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos" ];

var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];

window.onload = function () {
    var territories = document.querySelector("#territories");
    for (var i = 0; i < fruits.length; i++) {
        territories.innerHTML += "<p>" + (i+1) + ". " + fruits[i] + "</p>";
    }
    
    var provinces = document.querySelector("#provinces");
    var sentence = "<p><ul>";

    for (var j = 0; j < directory.length; j++) {
        if ((directory[j].type).localeCompare("file") == 0) {
            sentence += "<li>" + directory[j].name +  "</li>";
        }
        else {
            sentence += "<li>" + directory[j].name + "<ul>"
            for (var k = 0; k < (directory[j].files).length; k++) {
                sentence += "<li>" + directory[j].files[k].name + "</li>";
            }
            sentence += "</ul></li>" ;
        }
    }
    sentence += "</ul></p>";
    provinces.innerHTML = sentence;
};
