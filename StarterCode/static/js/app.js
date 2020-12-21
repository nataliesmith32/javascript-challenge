// from data.js
var tableData = data;

var tbody = d3.select("tbody");

//loop through data and print the initial table --- needed to be defined inside a function!
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

