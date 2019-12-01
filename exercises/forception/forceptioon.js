var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

let newArr = []

for(let i = 0; i < people.length; i++){ 
    newArr.push(people[i])
    for (let j = 0; j < alphabet.length; j++){ 
        newArr.push(alphabet[j])  
    }
}

console.log(newArr)