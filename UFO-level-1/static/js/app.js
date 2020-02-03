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
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  console.log(inputValue);
  console.log(tableData);
  var filteredData = tableData.filter(ufoSighting => (ufoSighting.datetime ===inputValue));
  console.log(filteredData);

// Use D3 to select the table body
var tbody = d3.select("tbody");
// Use D3 to select the table
var table = d3.select("table");
//remove any children from the table to 
tbody.html("");
// Use D3 to set the table class to `table table-striped`
table.attr("class", "table table-striped");


if (inputValue!=="") {
// Use d3 to append 1 cell per UFO sighting value 
filteredData.forEach(function(ufoSighting){
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

