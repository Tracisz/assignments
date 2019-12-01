//find the biggest number in the array with out Math.max() 

function largest(arr){ 
    let largestNumber = [0]
    for(i = 0; i < arr.length; i++){ 
        if(arr[i] > largestNumber)
        largestNumber = arr[i]
    }
    return largestNumber
}
console.log(largest([26,100,12,16,14,90]))

let newArr = [] 
function lettersWithStrings(arr, str){ 
    for(let i = 0; i < arr.length; i++){ 
        let arrSpread = [...arr[i]]
        for(let j = 0; j < arrSpread.length; j++){ 
            if(str === arrSpread[j])
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!"))


function isDivisble(num1, num2 ){ 
    if (num1 % num2 === 0 ){ 
        return(num1 + " is divisible by " + num2)
    } else { 
       return num1 + " is not divisble by " + num2 
    }
}

console.log(isDivisble(35,2))