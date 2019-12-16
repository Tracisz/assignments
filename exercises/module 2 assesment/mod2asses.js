function doubleNumbers(arr){
   doubleNum = arr.map((arr) => { return arr * 2})
   return doubleNum
  }

  
  console.log(doubleNumbers([2, 5, 100]));

  let stringItUp = arr  =>  stringArr = arr.map((arr) => arr.toString())
  
  console.log(stringItUp([2, 5, 100]));



  let tripleNum = arr => tripleArr = arr.map((arr) => arr*3)

  console.log(tripleNum([1,2,3,4,5]))

  let quadrupleNum = arr => quadArr = arr.map(arr => arr*4)


console.log(quadrupleNum([1,2,3,4,5]))


let makeIntoString = arr => arr.map(arr => arr.toString())

console.log(makeIntoString([1,2,3,4,5,5,6,7,8]))



let newArr = arr => arr.map(arr => arr * 2)

console.log(newArr([1,2,3,4,5,6,7,8,9,10]))

const people = [{
    name: "Angelina Jolie",
    age: 80,
    hobbies: ['skiing', 'running', 'jumping']
},{
    name: "Eric Jones",
    age: 2,
    hobbies: ['skiing', 'galloping', 'jumping']
},{
    name: "Paris Hilton",
    age: 5,
    hobbies: ['skiing', 'stalking', 'jumping']
},{
    name: "Kayne West",
    age: 16,
    hobbies: ['skiing', 'farting', 'jumping']
},{
    name: "Bob Ziroll",
    age: 100,
    hobbies: ['skiing', 'nose picking', 'jumping']
}
]; 


let greeting = arr => arr.sort((a,b) => a.age - b.age).map(person => console.log(`my name is ${person.name}, I am ${person.age} years old, I enjoy ${person.hobbies[0]} and ${person.hobbies[1]}`))

greeting(people)