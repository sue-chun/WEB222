// Sue Ming Chun
// 032343154
// July 10th 2018

var filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)
var filterAgeMin = 0; // sets the filter age min to 0 (for no minimum age filter)
var filterAgeMax = Number.MAX_VALUE; // sets the filter age max to the largest number possible (for no maximum age filter)

window.onload = loadTableWithFilters;

function filterAll () {
  filterType = "";
  filterAgeMin = 0;
  filterAgeMax = Number.MAX_VALUE;
  loadTableWithFilters();
}

function filterDog () {
  filterType = "dog";
  loadTableWithFilters();
}

function filterCat () {
  filterType = "cat";
  loadTableWithFilters();
}

function filterBird () {
  filterType = "bird";
  loadTableWithFilters();
}

function filter_zero_1 () {
  filterType = "";
  filterAgeMin = 0;
  filterAgeMax = 1;
  loadTableWithFilters();
}

function filter_1_less_4 () {
  filterType = "";
  filterAgeMin = 1;
  filterAgeMax = 4;
  loadTableWithFilters();
}

function filter_4_plus () {
  filterType = "";
  filterAgeMin = 4;
  filterAgeMax = Number.MAX_VALUE;
  loadTableWithFilters();
}

function loadTableWithFilters() {
  var selector = [filterAll, filterDog, filterCat, filterBird, filter_zero_1, filter_1_less_4, filter_4_plus];
  var create_tr = [];
  var create_td1 = [];
  var create_img = [];
  var create_td2 = [];
  var create_h4 = [];
  var h4_text = [];
  var create_p = [];
  var p_text = [];
  var create_span = [];
  var span_text = [];

  document.getElementById("main-table-body").innerHTML = "";
  
  for (var j = 0; j < selector.length; j++) {
    document.querySelectorAll("a")[j].onclick = selector[j];
  }
  
  
  for (var i = 0; i < petData.length; i++) {
    create_tr[i] = document.createElement("tr");
    create_td1[i] = document.createElement("td");

    create_img[i] = document.createElement("img");
    create_img[i].setAttribute("src", petData[i].image.src);
    create_img[i].setAttribute("alt", petData[i].image.alt);
    create_img[i].setAttribute("width", petData[i].image.width);
    create_img[i].setAttribute("height", petData[i].image.height);

    create_td2[i] = document.createElement("td");    
    create_h4[i] = document.createElement("h4");
    h4_text[i]= document.createTextNode(petData[i].name);
    create_h4[i].appendChild(h4_text[i]);

    create_p[i] = document.createElement("p");
    p_text[i] = document.createTextNode(petData[i].description);
    create_p[i].innerHTML = petData[i].description;
    
    create_span[i] = document.createElement("span");
    span_text[i] = document.createTextNode("Age: " + petData[i].age +  " years old.");
    create_span[i].appendChild(span_text[i]);

    create_td1[i].appendChild(create_img[i]);

    create_td2[i].appendChild(create_h4[i]);
    create_td2[i].appendChild(create_p[i]);
    create_td2[i].appendChild(create_span[i]);

    create_tr[i].appendChild(create_td1[i]);
    create_tr[i].appendChild(create_td2[i]);
     
    if (petData[i].type == filterType) {
          document.getElementById("main-table-body").appendChild(create_tr[i]);
    }
    else if (filterType == "" && petData[i].age >= filterAgeMin && petData[i].age < filterAgeMax) {
          document.getElementById("main-table-body").appendChild(create_tr[i]);      
    }      

    else if (filterType == "" && filterAgeMin == 0 && filterAgeMax == Number.MAX_VALUE) {
          document.getElementById("main-table-body").appendChild(create_tr[i]);
    }
    
 
  }
}

