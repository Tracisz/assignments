function collectAnimals(...arr) {  
    return arr
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus", "horse", "rabit")) 
// ["dog", "cat", "mouse", "jackolope", "platypus"]

combineFruit = (fruit, sweets, vegetables) =>  {
    const fruitObj = {
        fruit1: fruit[0],
        fruit2: fruit[1]
} 
    const sweetsObj = { 
        sweet1: sweets[0],
        sweet2: sweets[1], 
    }
    const vegetablesObj = { 
        vegetables1: vegetables[0], 
        vegetables2: vegetables[1],
    }
    console.log(fruitObj, sweetsObj, vegetablesObj)
}


combineFruit(["apple", "pear"],["cake", "pie"],["carrit"])


const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
};
              
function parseSentence(){
   const {location , duration} = vacation 
    return `We're going to have a good time in ${location} for ${duration}`
}
console.log(parseSentence())

// returnFirst = items => {const firstItem = items[0]
//     return firstItem}

// console.log(returnFirst())

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    let firstFav = arr[0]
    let secondFav = arr[1]
    let thirdFav = arr[2]
    /*your code here*/
    return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`;
}

console.log(returnFavorites(favoriteActivities))