// from data.js
var tableData = data;


// YOUR CODE HERE!

// Use D3 to select the table body
var tbody = d3.select("tbody");
function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      var row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        var cell = row.append("td");
        cell.text(val);
      });
    });
  }


// Keep Track of all filters
var filters = {};

function updateFilters() {

  // Save the element, value, and id of the filter that was changed
  var changedElement = d3.select(this).select("input");
  var elementValue = changedElement.property("value");
  var filterId = changedElement.attr("id");

  // If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object
  if (elementValue) {
    filters[filterId] = elementValue;
  }
  else {
    delete filters[filterId];
  }

  // Call function to apply all filters and rebuild the table
  filterTable();

}


function filterTable() {

    // Set the filteredData to the tableData
    let filteredData = tableData;
  
    // Loop through all of the filters and keep any data that
    // matches the filter values
    Object.entries(filters).forEach(([key, value]) => {
      filteredData = filteredData.filter(row => row[key] === value);
    });
  
    // Finally, rebuild the table using the filtered Data
    buildTable(filteredData);
  }
  
  // Attach an event to listen for changes to each filter
  d3.selectAll(".filter").on("change", updateFilters);
  
  // Build the table when the page loads
  buildTable(tableData);


// // Use D3 to select the table
// var table = d3.select("table");
// //remove any children from the table to 
// tbody.html("");
// // Use D3 to set the table class to `table table-striped`
// table.attr("class", "table table-striped");
// // Use d3 to append 1 cell per UFO sighting value 
// tableData.forEach(function(ufoSighting){
//     console.log(ufoSighting);
//     var row =tbody.append("tr");

//     Object.entries(ufoSighting).forEach(([key,value]) => {
//         var cell = row.append("td");
//         cell.text(value);
//     });
// });
// // Select the button
// var button = d3.select("#filter-btn");
// // Keep Track of all filters
// var filters = {};

// button.on("click", function() {

 
// var inputElement = d3.select("#input");
// var inputValue = inputElement.property("value");
// var filteredData = tableData.filter(ufoSighting => ufoSighting.datetime === inputValue ||
//     ufoSighting.city === inputValue ||
//     ufoSighting.state === inputValue ||
//     ufoSighting.country === inputValue ||
//     ufoSighting.shape === inputValue);
// console.log(filteredData);
// // Use D3 to select the table body
// var tbody = d3.select("tbody");
// // Use D3 to select the table
// var table = d3.select("table");
// //remove any children from the table to 
// tbody.html("");
// // Use D3 to set the table class to `table table-striped`
// table.attr("class", "table table-striped");

// filteredData.forEach(function(ufoSighting){
//     console.log(ufoSighting);
//     var row =tbody.append("tr");

//     Object.entries(ufoSighting).forEach(([key,value]) => {
//         var cell = row.append("td");
//         cell.text(value);
//     });
// });
// });

