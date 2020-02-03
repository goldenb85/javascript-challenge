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
var filteredData=[];
button.on("click", function() {

  // Select the input element and get the raw HTML node
  // Get the value property of the input element
//   var enter_date= d3.select("#datetime").property("value");
//   var enter_city= d3.select("#city").property("value");
//   var enter_state= d3.select("#state").property("value");
//   var enter_country= d3.select("#country").property("value");
//   var enter_shape= d3.select("#shape").property("value");

  //Set up conditions for each input element
//   if (enter_date!==""){
//     var filteredData = tableData.filter(ufoSighting => (ufoSighting.datetime ===enter_date) 
//     )};
//   if (enter_city!==""){
//     var filteredData = tableData.filter(ufoSighting => (ufoSighting.city ===enter_city) 
//     )};
//   if (enter_state!==""){
//     var filteredData = tableData.filter(ufoSighting => (ufoSighting.state ===enter_state) 
//     )};
//   if (enter_country!==""){
//     var filteredData = tableData.filter(ufoSighting => (ufoSighting.country ===enter_country) 
//     )};
//   if (enter_shape!==""){
//     var filteredData = tableData.filter(ufoSighting => (ufoSighting.shape ===enter_shape) 
//     )};  
var inputElement = d3.select("#input");
var inputValue = inputElement.property("value");
var filteredData = tableData.filter(ufoSighting => ufoSighting.datetime === inputValue ||
    ufoSighting.city === inputValue ||
    ufoSighting.state === inputValue ||
    ufoSighting.country === inputValue ||
    ufoSighting.shape === inputValue);
console.log(filteredData);
// Use D3 to select the table body
var tbody = d3.select("tbody");
// Use D3 to select the table
var table = d3.select("table");
//remove any children from the table to 
tbody.html("");
// Use D3 to set the table class to `table table-striped`
table.attr("class", "table table-striped");

filteredData.forEach(function(ufoSighting){
    console.log(ufoSighting);
    var row =tbody.append("tr");

    Object.entries(ufoSighting).forEach(([key,value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});
});

