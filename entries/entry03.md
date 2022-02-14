# Entry 3
##### 2/13/2022

In this entry, I will be talking about my progress in learning my tool for my freedom project: d3.js. I will talk through my process of trying to create a visual graph but a small sample one as I learn.

I found used the same tutorial I linked in my previous entry which is this extremely helpful youtube [video](https://youtu.be/aHJCt2adSWA) because I like the way of teaching it offers: a slow and understandable explanation I can follow. It had some starter code which made my learning way more smoother than starting the whole thing from scratch as I am a beginner. On that note, I cloned a repo with some starter code to help me on this journey.

First thing I learned from this video is that these terms used in d3.js are way more familiar to me now that we have done some DOM lessons in class. It was a big help to understanding the concept and the format of `.xxxx()`. I used a lot of components and functions while following along this such as `.attr()`, `.append()`, `.classed()`, etc.. I will explain some of these that I definitely need for my final project.

I started off with assigning `const`s for the width and height of the chart.
```js
const CHART_WIDTH = 600;
const CHART_HEIGHT = 400;
```
This will help create an area for the charts to appear in with the measures to base off on for the rest of the project. It offers data for futhur calculations d3 will make to scale and create the bars in the big chart. As I do this with the video, I inserted:
```js
const chartContainer = d3
  .select('svg')
  .attr('width', CHART_WIDTH)
  .attr('height', CHART_HEIGHT);
```
I digested it and learned that this set of code defines the overall area of where the bars will apear when the codes come in later for the inside of the chart and assigns it to a `const` for later usage. I also found out that this block of code is equivalent to this one single line of code and that it is just broken down for it to be easier to read for humans.
```js
const chartContainer = d3.select('svg').attr('width', CHART_WIDTH).attr('height', CHART_HEIGHT);
```
This way makes it a bit complicated and tricky to read through and find each of the functions added. The next step requires more parts and it is to create rectangles to make the bars appear in the area for the chart that I made earlier.
```js
const chart = chartContainer.append('g')

chart
  .selectAll('.bar')
  .data(DUMMY_DATA)
  .enter()
  .append('rect')
  .classed('bar', true)
  .attr('width', x.bandwidth()) 
  .attr('height',(data) => CHART_HEIGHT - y(data.value))
  .attr('x', data => x(data.region))
  .attr('y', data => y(data.value));
```
It selected all the things with the `bar` class and appended rectangles inside and also added the `bar` class to them. There are also multiple `.attr()`s like the width of the bars, the height and the data to put in the graph. Line 34 instructs d3 to calculate and determine the width of each bar. This set of codes also helps insert relevant visual representation for the data given.


[Previous](entry02.md) | [Next](entry04.md)

[Home](../README.md)
