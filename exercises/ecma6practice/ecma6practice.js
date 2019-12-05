let name = "John"
let age = 101

function runForLoop(pets) {
   
    const petObjects = []
    for (var i = 0; i < pets.length; i++) {
        const pet = { 
            type: pets[i]
         }
        if (pets[i] === "cat") {
             name = "fluffy"
        } else {
             name = "spot"
        }  
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
        
    }
    name = "John"
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])

const carrots = ["bright orange", "ripe", "rotten"]

 mapVegetables = arr => { arr.map(carrot => {({type: "carrot", name: carrot, })})}

 const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

filterForFriendly = (arr) => { arr.filter(person => { person.friendly })}
    
doMathSum = (a, b) => {return a + b}

produceProduct = (a, b) => {return a * b}

printString = (fName, lName, age) => { fName = "Jane", lName = "Doe", age = 45, console.log(`Hi ${fName} ${lName}, how does it feel to be ${age} years old?`)}
 printString()


 const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
filterForDogs = arr => {arr.filter(animal => { animal.type === "dog" ?  true : false})}

holidayGreeting = (location, name) => {location = "Bahamas", name = "Janice", console.log(`Hello ${name}! \nWelcome to the ${location}. \nI hope you enjoy your stay, please ask the president of the ${location} for anything`)}

holidayGreeting()