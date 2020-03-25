

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


// function antiCaps(string){ 
//    let newArr = string.split("")
//    let sortedArr = []
//     console.log(newArr)
//     for(let i = 0; i < string.length; i++){ 
//         if(newArr[i] === newArr[i].toUpperCase()){ 
//             let lowerCaseLetter = newArr[i].toLowerCase()
//             sortedArr.push(lowerCaseLetter)
//         } else if(newArr[i] === newArr[i].toLowerCase()){ 
//             let upperCaseLetter = newArr[i].toUpperCase()
//             sortedArr.push(upperCaseLetter)
//         }
//     }
//     return sortedArr.join('')
// }

// console.log(antiCaps("HeLlo"))

// function palindromeFinder(string){ 
//     let regex = /[\W_]/g;
//     let lowerCaseString = string.toLowerCase().replace(regex, "")

//     let reverseString = string.split("").reverse().join("")

//     return lowerCaseString === reverseString
// }

// console.log(palindromeFinder("racecar"))

// function duplicateWords(str){ 
//     const distinct = (value, index, self) => { 
//         return self.indexOf(value) !== index; 
//     }
//     const duplicates = (value, index, self) => { 
//         return self.indexOf(value) === index;
//     }
//     const strArr = str.split(" ")
//     const distinctWords = strArr.filter(distinct)
//     const duplicateWords = distinctWords.filter(duplicates)
    
//     return duplicateWords
// }
    

// console.log(duplicateWords("Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."))

// function sevenBoom(arr){ 
//     let regex = /7/
//     const isTrue = regex.test(arr)
//     if(isTrue){ 
//         return("Boom")
//     } else { 
//         return("there is no 7 in this string")
//     }

//     }


//     console.log(sevenBoom([1,2,3,4,5,67]))

// function reverse(str) {
//     const reversed = str.split("").reverse().join("")
//     return reversed
// }

// console.log(reverse("hello world"))

// function getAbsSum(arr) {
//     let newArr = []
//     for(let i =0; i < arr.length; i++){ 
//         newArr.push(Math.abs(arr[i]))
//     }
//     const reduced = newArr.reduce((total, num) => { 
//         return total + num
//     })
//     return reduced
// }

// console.log(getAbsSum([1,-2,3,4,5]))


function trackMoons(num){ 
    let = dataArr = []
    let moons = [3, 4, 4, 4, 4, 4, 5, 4]
    let moonCount = 0
    let moonNames = ["Waxing cresent", "New Moon", " Waning Cresent", "Third Quarter", "Waning Gibbous", "Full Moon", "Waxing Gibbous", "First Quarter"]
    let julianDate = -4
    for( let i = 0; i < num; i++){
        if(moonCount === 8){ 
            moonCount = 0
        }
        julianDate += moons[moonCount]
        dataArr.push(`Day ${julianDate} is a ${moonNames[moonCount]}`)
        moonCount++
    
        
    }
    
    return dataArr
    
}
console.log(trackMoons(36600))

function convertArrayOfObjectsToCSV(args) {
    var result, ctr, keys, columnDelimiter, lineDelimiter, data;

    data = args.data || null;
    if (data == null || !data.length) {
        return null;
    }

    columnDelimiter = args.columnDelimiter || '';
    lineDelimiter = args.lineDelimiter || '\n';

    keys = Object.keys(data[0]);

    result = '';
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    data.forEach(function(item) {
    ctr = 0;
    keys.forEach(function(key) {
    if (ctr > 0) result += columnDelimiter;

        result += item[key];
        ctr++;
        });
        result += lineDelimiter;
        });

    return result;
}
function downloadCSV(args) {
    var data, filename, link;
    var csv = convertArrayOfObjectsToCSV({
    data: dataArr
    });
    if (csv == null) return;
    
    filename = args.filename || 'export.csv';
    
    if (!csv.match(/^data:text\/csv/i)) {
    csv = 'data:text/csv;charset=utf-8,' + csv;
    }
    data = encodeURI(csv);
    
    link = document.createElement('a');
    link.setAttribute('href', data);
    link.setAttribute('download', filename);
    link.click();
    
    }

convertArrayOfObjectsToCSV(dataArr)
downloadCSV(dataArr)


// function oddishOrEvenish(num) {
//     const combinedNum =	num.toString().split("")
//     console.log(combinedNum)
   
//         const asNumber1 = parseInt(combinedNum[0])
//         const asNumber2 = parseInt(combinedNum[1])
//         const asNumber3 = parseInt(combinedNum[2])
//         const combined = asNumber1 + asNumber2 + asNumber3
    
//     if(combined % 2 === 0){ 
//         return "Evenish"
//     } else { 
//         return "Oddish"
//     }
// }

// console.log(oddishOrEvenish(694))

// function oddishOrEvenish(num) {
//     const combinedNum = (""+num).split('').reduce((a,b) => a + parseInt(b), 0)
//     return combinedNum % 2 === 0 ? 'Evenish' : 'Oddish'
// }