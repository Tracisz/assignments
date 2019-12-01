var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));

function ROT13(input, shift){ 
    // create array of all letters 
    // accept users string
    // loop through string to find the first index
    // compare index to the alphabet and shift letters 
    // if it reaches end find the new index I.E shift right 11 starting at w, starts at a with 7 remaining
    //change index of string to new value

    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

    let coded = []

    for(i = 0; i < input.length; i++){ 
        let newInput = input.split("")
        let postionInAlphabet = alphabet.indexOf(newInput[i]) + shift
        if (postionInAlphabet > 25){ 
            postionInAlphabet = postionInAlphabet - 25
        }
        coded.push(alphabet[postionInAlphabet])
        
        //For each letter, add the shift
        //If that letter is now > 25, then subtract 25
        


        // let codedMessage = alphabet.push(postionInAlphabet)
        // console.log(codedMessage)
        
    }
    
    return coded.join('')
}

console.log(ROT13(input, shift))
