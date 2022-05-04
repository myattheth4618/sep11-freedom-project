const WATER_DATA = [
  { id: 'd1', value: 18.5, region: 'Toilet' },
  { id: 'd2', value: 15, region: 'Washing Machine' },
  { id: 'd3', value: 11.5, region: 'Shower' },
  { id: 'd4', value: 10.9, region: 'Faucet' },
  { id: 'd5', value: 2.5, region: 'Drinking' },
  { id: 'd6', value: 1, region: 'Dishwasher' },
];

// const WATER_DATA = [
//   { id: 'd1', value: 10, region: 'Elders' },
//   { id: 'd2', value: 11, region: 'Middle Ages' },
//   { id: 'd3', value: 12, region: 'Children' },
//   { id: 'd4', value: 6, region: 'Teens' },
// ];


const MARGINS = {top:20, bottom:10}
const CHART_WIDTH = 600;
const CHART_HEIGHT = 400 - MARGINS.top - MARGINS.bottom;

const x= d3.scaleBand().rangeRound([0,CHART_WIDTH]).padding(0.1); //creates band scale, equally size items along x axis, figures out relative scales and how much space there should be between each of the items, does the math
const y= d3.scaleLinear().range([CHART_HEIGHT, 0]); //creates linear scale, the maximum value comes first because d3 starts from top left
 
const chartContainer = d3
  .select('svg')
  .attr('width', CHART_WIDTH) //defining chart area
  .attr('height', CHART_HEIGHT + MARGINS.top + MARGINS.bottom) //defining chart area
  
x.domain(WATER_DATA.map((d) => d.region)) //specify how many items and which data should be scaled, gives all the data to create items and scales accordingly
y.domain([0,d3.max(WATER_DATA, d => d.value) + 3]) //takes all data provided and creates a max number for the graph, '+3' is for some space at the top of the chart
  
const chart = chartContainer.append('g') //creates group and stores in constant

chart
  .append('g')
  .call(d3.axisBottom(x).tickSizeOuter(0))
  .attr('transform', `translate(0, ${CHART_HEIGHT})`) //brings the axis down, under the chart
  .attr('color', '#000000') // call calls functions in js
  
  //.axisTop(labels above axis) & .axisBottom(labels under axis) determines where the labels are shown and not where they are relative to the chart

chart
  .selectAll('.bar')
  .data(WATER_DATA)
  .enter()
  .append('rect')
  .classed('bar', true) //rect = regular element to create rectangles, adds bar class
  .attr('width', x.bandwidth()) //bandwidth makes all the widths of the items equal
  .attr('height',(data) => CHART_HEIGHT - y(data.value))
  .attr('x', data => x(data.region))
  .attr('y', data => y(data.value))
  
chart
  .selectAll('.label')
  .data(WATER_DATA)
  .enter()
  .append('text')
  .text((data) => data.value)
  .attr('x', data => x(data.region) + x.bandwidth() / 2) //instructs to start from middle
  .attr('y', data => y(data.value) - 20) //deduct because it starts from the top left
  .attr('text-anchor', 'middle')
  .classed('label', true) //('class', true or false)
  
  
  
  
  
  
// const xScale = d3
//   .scaleBand()
//   .domain(WATER_DATA.map((dataPoint) => dataPoint.region))
//   .rangeRound([0, 250])
//   .padding(0.1);
// const yScale = d3.scaleLinear().domain([0, 15]).range([200, 0]);

// const container = d3.select('svg').classed('container', true);

// const bars = container
//   .selectAll('.bar')
//   .data(WATER_DATA)
//   .enter()
//   .append('rect')
//   .classed('bar', true)
//   .attr('width', xScale.bandwidth())
//   .attr('height', (data) => 200 - yScale(data.value))
//   .attr('x', data => xScale(data.region))
//   .attr('y', data => yScale(data.value));

// setTimeout(() => {
//   bars.data(WATER_DATA.slice(0, 2)).exit().remove();
// }, 2000);