var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");
data.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
 // Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value)
    });
  });

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#datetime");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {
 //Prevent the page from refreshing
 d3.event.preventDefault();

// Select the input element and get the raw HTML node
var inputElement = d3.select("#datetime");

// Get the value property of the input element
var inputValue = inputElement.property("value");

console.log(inputValue);

var filteredData = tableData.filter(data => data.datetime === inputValue);

console.log(filteredData);

// remove original data
var tbody = d3.select("tbody");
tbody.html("")

//append filtered results
filteredData.forEach((filteredData) => {
  var row = tbody.append("tr");
  Object.entries(filteredData).forEach(([key, value]) => {
  var cell = row.append("td");
  cell.text(value);
  });
});

};

// on click function
button.on('click', dateFilter);

// write filtered data to webpage
d3.select("form").on('submit', dateFilter);