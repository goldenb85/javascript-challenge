// from data.js
var tableData = data;


// YOUR CODE HERE!

// Use D3 to select the table body
var tbody = d3.select("tbody");
// Use D3 to select the table
var table = d3.select("table");
//remove any children from the table to 
tbody.html("");
// Use D3 to set the table class to `table table-striped`
table.attr("class", "table table-striped");
// Use d3 to append 1 cell per UFO sighting value 
tableData.forEach(function(ufoSighting){
    console.log(ufoSighting);
    var row =tbody.append("tr");

    Object.entries(ufoSighting).forEach(([key,value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});
// Select the button
var button = d3.select("#filter-btn");
button.on("click", function() {
//date
  // Select the input element and get the raw HTML node
  var input_date = d3.select("#datetime");
  // Get the value property of the input element
  var enter_date= input_date.property("value");
  console.log(enter_date);
//city
  // Select the input element and get the raw HTML node
  var input_city = d3.select("#city");
  // Get the value property of the input element
  var enter_city= input_city.property("value");
  console.log(enter_city);
//state
  // Select the input element and get the raw HTML node
  var input_state = d3.select("#state");
  // Get the value property of the input element
  var enter_state= input_state.property("value");
  console.log(enter_state);
// country
  // Select the input element and get the raw HTML node
  var input_country = d3.select("#country");
  // Get the value property of the input element
  var enter_country= input_country.property("value");
  console.log(enter_country);
// shape
  // Select the input element and get the raw HTML node
  var input_shape = d3.select("#shape");
  // Get the value property of the input element
  var enter_shape= input_shape.property("value");
  console.log(enter_shape) ;
  var filteredData = tableData.filter(ufoSighting => (ufoSighting.datetime ===enter_date) ||
                                                    (ufoSighting.city ===enter_city) ||
                                                    (ufoSighting.state ===enter_state) ||
                                                    (ufoSighting.country ===enter_country) ||
                                                    (ufoSighting.shape ===enter_shape));
  console.log(filteredData);

// Use D3 to select the table body
var tbody = d3.select("tbody");
// Use D3 to select the table
var table = d3.select("table");
//remove any children from the table to 
tbody.html("");
// Use D3 to set the table class to `table table-striped`
table.attr("class", "table table-striped");
// Use d3 to append 1 cell per UFO sighting value 
if (inputValue!=="") {filteredData.forEach(function(ufoSighting){
    console.log(ufoSighting);
    var row =tbody.append("tr");

    Object.entries(ufoSighting).forEach(([key,value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});
}
else {
    tableData.forEach(function(ufoSighting){
        console.log(ufoSighting);
        var row =tbody.append("tr");
    
        Object.entries(ufoSighting).forEach(([key,value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}
});

