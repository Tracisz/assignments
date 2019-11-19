var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop() 

// console.log(vegetables)

fruit.shift()

// console.log(fruit)

var indexOrange = fruit.indexOf("orange")

// console.log(indexOrange)

fruit.push(indexOrange)

// console.log(fruit)

var vegArrLength = vegetables.length 

vegetables.push(vegArrLength)

// console.log(vegetables)

var food = fruit.concat(vegetables) 

console.log(food)

food.splice(4, 2)

food.reverse() 

console.log(food.join(', '))