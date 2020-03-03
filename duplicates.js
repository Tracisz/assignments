// const strings = ["cat", "dog", "cat", "cow"]
// function duplicates(arr, str) { 
//     let count = 0
//     for(let i = 0; i < arr.length; i++){ 
//         if(arr[i] === str){ 
//             count++
//         } 
//     }
//     return(count)
// }
// console.log(duplicates(strings, "cat"))

// function countDuplicates(arr, str){ 
//     let count = 0;
//     arr.filter((item) => { 
//         if(item === str){ 
//             return true
//         }
//     })
//     return arr.length
// }

// console.log(countDuplicates(strings, "cow"))


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

// function stupidAddition(a, b) {
//     if(typeof(a) === "string" && typeof(b) === "string") { 
//         console.log("is a string")
//         let aInt = parseInt(a)
//         let bInt = parseInt(b)
//         console.log(aInt, bInt)
//         return aInt + bInt
//     } else if(typeof(a) === "string" & typeof(b) === "number") {
//         return null
//     } else if(typeof(a) === "number" & typeof(b) === "string"){ 
//         return null
//     } else { 
//         console.log("is not a string")
//         let aString = a.toString()
//         let bString = b.toString()
//         return aString.concat(bString)
//     }
// }

// console.log(stupidAddition("1", "2"))

// function findSmallestNum(arr) {
// 	return Math.min(...arr)
// }

// function firstLast(arr) {
//     const arrFirst = arr[0]
//     const arrLast = arr[arr.length-1]
//     const newArr = [arrFirst, arrLast]
// 	return newArr
// }

// function nameShuffle(str) {
//     const reversed = str.split(' ').reverse().join(' ')
// 	return reversed
// }

// console.log(nameShuffle("Travis Racisz"))

// function noOdds(arr) {
// 	return arr.filter(item => item % 2 === 0)
// }

// console.log(noOdds([43, 65, 23, 89, 53, 9, 6]))

// function multiplyByLength(arr) {
// 	return arr.map(item => item * arr.length)
// }

// console.log(multiplyByLength([2, 6, 4, 9]))

// function addEnding(arr, ending) {
// 	return arr.map(item => item.concat(ending))
// }

// function canCapture([yourRook, opponentsRook]) {
//     const playerRookPosition = yourRook[0].toString().split("")
//     const opponentsRookPosition = opponentsRook[0].toString().split("")
//     if(playerRookPosition[0] === opponentsRookPosition[0]){ 
//         console.log(playerRookPosition[0])
//         console.log(opponentsRookPosition[0])
//         return true
//     } else if(playerRookPosition[1] === opponentsRookPosition[1]){
//         console.log(playerRookPosition[1])
//         console.log(opponentsRookPosition[1])
//         return true
//     }
// }

// console.log(canCapture(['A1', 'B2']))

// function findMissing(arr){ 
//     let missingNum
//     arr.sort((a,b) => a - b)
//     console.log(arr)
//     for(let i = 0; i < arr.length; i++){ 
//         if(arr[i + 1] - arr[i] !== 1){
//             missingNum = arr[i] + 1
//             return missingNum
//         } 
//     }

// }

// console.log(findMissing([10, 14, 12, 11, 16, 18, 17, 13]))


function antiCaps(string){ 
   let newArr = string.split("")
   let sortedArr = []
    console.log(newArr)
    for(let i = 0; i < string.length; i++){ 
        if(newArr[i] === newArr[i].toUpperCase()){ 
            let lowerCaseLetter = newArr[i].toLowerCase()
            sortedArr.push(lowerCaseLetter)
        } else if(newArr[i] === newArr[i].toLowerCase()){ 
            let upperCaseLetter = newArr[i].toUpperCase()
            sortedArr.push(upperCaseLetter)
        }
    }
    return sortedArr.join('')
}

console.log(antiCaps("HeLlo"))

