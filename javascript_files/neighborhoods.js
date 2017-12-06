import * as d3 from 'd3';
import * as topojson from 'topojson';
// import d3Geo from 'd3-geo';

// d3.json("NeighborhoodsTopoJSON.json", function (error, nhood) {
//   if (error) return console.error(error);
//   console.log(nhood);
// });

d3.json("NeighborhoodsTopoJSON.json", function (error, nhood) {
  if (error) return console.error(error);

  // console.log(nhood);

  console.log(nhood.objects["geo_export_60f2fa80-7afa-4824-a575-a01c3d2c6d59"].geometries);
  console.log(d3.geoPath());


  svg.append("path")
    .datum(topojson.feature(nhood, nhood.objects["geo_export_60f2fa80-7afa-4824-a575-a01c3d2c6d59"].geometries))
    .attr("d", d3.geoPath().projection(d3.geoMercator()));
});

var width = 960,
  height = 1160;

var svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height);