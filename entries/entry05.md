# Entry 5
##### 4/26/2022

## plan
In this blog entry, I will be writing about the changes I fixed and the final step to complete the MVP of my freedom prject on the average water consumption in American homes. I did make some small changes as I try to wrap my codes up and create it so it is a minimum viable product for my idea.

## mini changes
The change I made from the almost MVP since my last entry was that I put the usage bars in order from the greatest to the least amount of gallons used for each purpose. Before the change, the charts looked unorganized to me as the amounts are all over the place. With this change, viewers can see more easily which is the most used and least used water sources in US homes. I did not make such major changes while I reviewed it but I think these changes were really visually and functionally helpful. 
```js
const WATER_DATA = [
  { id: 'd1', value: 18.5, region: 'Toilet' },
  { id: 'd2', value: 15, region: 'Washing Machine' },
  { id: 'd3', value: 11.5, region: 'Shower' },
  { id: 'd4', value: 10.9, region: 'Faucet' },
  { id: 'd5', value: 2.5, region: 'Drinking' },
  { id: 'd6', value: 1, region: 'Dishwasher' },
];
```
This code was the modified version of the 'old' set of codes. There are a couple differences the old and new version have. 1. The id names & 2. The order of the sources and usages. The code looked was primarily like this:
```js
const WATER_DATA = [
  { id: 'd2', value: 2.5, region: 'Drinking' },
  { id: 'd3', value: 18.5, region: 'Toilet' },
  { id: 'd4', value: 15, region: 'Washing Machine' },
  { id: 'd4', value: 11.6, region: 'Shower' },
  { id: 'd4', value: 10.9, region: 'Faucet' },
  { id: 'd4', value: 1, region: 'Dishwasher' },
];
```
I also added an h1 header for the context of the graph. (AVERAGE WATER USAGE IN THE US (gal))

The list was a little out of order which made the graph look like this:
![image](https://user-images.githubusercontent.com/73483036/165441440-6765a1e5-a8a5-4c78-8aed-a14d9637882e.png)

After the change, it became this: 
![image](https://user-images.githubusercontent.com/73483036/165441567-2f1020b7-e37e-44a9-8a8f-5dc4c3496a5a.png)
  
It is definitely more helpful visually. The id name change was necessary because with individual id's I can customize each and every one of the charts. If this error was not fixed, it will pose difficulty when I try to add more decorative attributes to the graph as I go.

## EDP
In the Engineering Design Process, I think I am almost between 6 & 7 because I am at the place where I created my MVP and am testing multiple aspects of my project. I am seeking to fix any errors and settle on the most promising template for my graph.

## SKILLS
I developed the skills of attention to detail and consideration because in my blog I mentioned that I payed attention to the organization of the bar graph for me and the audience/viewer. Thus, I know that I learned these skills and I am very glad I did because I know it might not be the biggest changes I made but it will be a part of the project people are going to see and I want it to be at the best of my abilities.


[Previous](entry04.md) | [Next](entry06.md)

[Home](../README.md)
