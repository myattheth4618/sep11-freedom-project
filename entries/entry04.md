# Entry 4
##### 3/21/2022

## about
In this blog entry, I will be talking about the data and the codes that will go hand in hand. I will also be talking about the MVP and the expectations I have for the final product on my freedom project, a bar chart with water usage levels in the US/World. Based on the data I can collect, I will make a final decision if the chart will only be about the US demographics or global.

## data and codes and major challenge
First, I researched the water drinking levels/demographics in the US by age and even more factors and it was a challenge to find such data because data I found were either old or not the detailed data collection I expected to work with. So, I accepted some flexibility with my data as I have a timeframe to work on this project. I could not spend a lot of time trying to look for the exact data I expected to find.

Finally, I switched lanes from water DRINKING to water USAGE per person in the United States.I found this [website](https://www.aquasana.com/info/average-water-usage-in-the-united-states-pd.html) which seems to accurately represent individuals and their usage of water each day. It also closely examines the other factors that causes more "water usage". It has really perfect amount and sub-topics to include in my chart and with the help of a few more websites I will find, I hope that my graph will look really good.

I will start inserting data and have started learning and understanding the function that will allow the user to explore sub-topics when clicked on the main category that it falls under. Until I manage to learn it, I will stick to the bare minimum (backbone) of the website functionality and start inserting the main data and assign different colors to different categories to help differentiate.

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

This is what the graph contains so far. The amounts are in gallon measures and it currently is the color black. here is a screenshot of what it looks like currently:

![image](https://user-images.githubusercontent.com/73483036/159402305-cd1a81b0-0550-4bd1-92af-d063faff3ffd.png)

I am hoping to further perfect the visual aspect of the product while continuing the research for the data to insert in the bar chart. I am also studying more to paint each bar different colors to improve the presentation of the graph itself. I know that it will be quite a job to customize each and every bar I have but it will be worth it.

I also wish to implement this [resource](https://water.phila.gov/pool/files/home-water-use-ig5.pdf) somewhere in the website since it is a good breakdown of water consumption.

## EDP
I am held back by some challenges that require me to brainstorm over again for the possible best solution. I am still in stages 3 and 4 of the Engineering Design Process. I am collecting the data and thinking about how to combine these codes and the actual data and how to make it work at the minimum before I add more to it.

## SKILLS
I've learned problem decomposition and further embracing failure. I embraced the failure to collect expected data but I continued through it and broke down the problem to get to the best solution I can currently think of. I grew in examining failures and problems to use them as help to making my project be the best it can be.

[Previous](entry03.md) | [Next](entry05.md)

[Home](../README.md)
