let number = 100

for(let i = 0; i < number; i++){ 
    if(i % 2 === 0){ 
        console.log(i  + " is even")
    } else { 
        console.log(i + " is odd")
    }
}

let removeWord = (string, sentance) => sentance.replace(string, ""); 



console.log(removeWord("apple", "Hello I ate an apple today"))