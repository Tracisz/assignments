const strings = ["cat", "dog", "cat", "cow"]
function duplicates(arr, str) { 
    let count = 0
    for(let i = 0; i < arr.length; i++){ 
        if(arr[i] === str){ 
            count++
        } 
    }
    return(count)
}
console.log(duplicates(strings, "cat"))

function countDuplicates(arr, str){ 
    let count = 0;
    arr.filter((item) => { 
        if(item === str){ 
            return true
        }
    })
    return arr.length
}

console.log(countDuplicates(strings, "cow"))


// function toArray(obj){ 
//    const keys = Object.entries(obj)
//    return(keys)
// }

// console.log(toArray({a: 1, b: 2,}))


// function countSylables(str){ 
//    return console.log(str.split("-").length)
// }

// countSylables("beau-ti-ful")

// function countWords(str) {
// 	return str.splice(' ').length
// }

// function monthName(num) {
//     const months = ["jan", "feb", "march", " april", "may", "june", "july", "august", " september", "october", "novemeber", "decemeber"]
//     return months[num + 1]
// }

// function Go(num) {
//     let string = "-"
// 	for(let i = 0; i < num; i++){ 
//         string += "-"
//     }
//     return string
// }

// console.log(Go(5))

