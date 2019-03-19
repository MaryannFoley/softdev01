var data = [4, 8, 15, 16, 23, 42];
var chart = d3.select(".chart");
var graph = function(){
  var bar = chart.selectAll("div");
  var barUpdate = bar.data(data);
  var barEnter = barUpdate.enter().append("div");
  barEnter.style("width", function(d) {
  return d * 10 + "px"; });
  barEnter.text(function(d) { return d; });}

var scale=
  d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, 420]);

var h = function(){
d3.select(".chart")
  .selectAll("div")
    .data(data)
  .enter().append("div")
    .style("width", function(d) { console.log(d3);console.log(d);return scale(d) + "px"; })
    .text(function(d) { return d; });}
