
var tbody = d3.select("tbody");
var search = d3.selectAll(".form-control")
var tableData = data;
tableData.forEach((tableData) => {
  var row = tbody.append("tr");
  Object.entries(tableData).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});
function handleChange() {
  var tableData = data;
  d3.select("tbody").selectAll("tr").remove();
  var inputElement = d3.select("#datetime");
  var date = inputElement.property("value");
  console.log(date)
  if (date !== "") {
    var tableData = tableData.filter(ufo => ufo.datetime === date);
  }
  var inputElement = d3.select("#city");
  var city = inputElement.property("value").toLowerCase();
  if (city !== "") {
    var tableData = tableData.filter(ufo => ufo.city === city);
  }
  var inputElement = d3.select("#state");
  var state = inputElement.property("value").toLowerCase();
  if (state !== "") {
    var tableData = tableData.filter(ufo => ufo.state === state);
  }
  var inputElement = d3.select("#country");
  var country = inputElement.property("value").toLowerCase();
  if (country !== "") {
    var tableData = tableData.filter(ufo => ufo.country === country);
  }
  var inputElement = d3.select("#shape");
  var shape = inputElement.property("value").toLowerCase();
  if (shape !== "") {
    var tableData = tableData.filter(ufo => ufo.shape === shape);
  }
  tableData.forEach((tableData) => {
      var row = tbody.append("tr");
      Object.entries(tableData).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
}

  search.on("change", handleChange);


