
var tbody = d3.select("tbody");
var search = d3.select(".btn");
var tableData = data;
tableData.forEach((tableData) => {
  var row = tbody.append("tr");
  Object.entries(tableData).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});



function handleClick() {
    d3.selectAll("tr").remove();
    var inputElement = d3.select("#datetime");
    var date = inputElement.property("value");
    if(date === ""){
      tableData.forEach((tableData) => {
        var row = tbody.append("tr");
        Object.entries(tableData).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
    }else{
      var filteredData = tableData.filter(ufo => ufo.datetime === date);
      filteredData.forEach((filteredData) => {
        var row = tbody.append("tr");
        Object.entries(filteredData).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
  }
}
  
  search.on("click", handleClick);


