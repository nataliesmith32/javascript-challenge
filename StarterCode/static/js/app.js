// from data.js
var tableData = data;

var tbody = d3.select("tbody");

//loop through data and print the page
function buildTable(data) {
    tbody.html("");
    data.forEach((UFO_data) => {
        var row = tbody.append("tr");
        Object.entries(UFO_data).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    })
}

// update the table with data/time input
function handleClick(){
    d3.event.preventDefault();

    let date = d3.select("#datetime").property("value");
    let filterData = tableData;

    if(date) {
        filterData = filterData.filter((row) => row.datetime === date);
    }
    buildTable(filterData);
}

d3.selectAll("#filter-btn").on('click', handleClick);

buildTable(tableData);



// // Complete the event handler function for the form
// function runEnter() {
//     var button = d3.select("#filter-btn");
//     var form = d3.select("#form");

//     button.on("click", runEnter);
//     form.on("submit",runEnter);

//   // Prevent the page from refreshing
//     d3.event.preventDefault();
  
//   //define the user input
//     var inputElement = d3.select("#datetime");
//     var inputValue = inputElement.property("value");

//   if(inputElement) {
//     filteredData = tableData.filter((row) => row.datetime === inputValue); 
//     button.on("click", runEnter);
//     buildTable(filteredData);
//   }

// }

