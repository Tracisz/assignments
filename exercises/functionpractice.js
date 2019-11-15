// function sum(a,b){ 
//     return a+b
// }

// function largest(a,b,c){ 
//     return Math.max(a,b,c)
// }

// var largest = largest(10,4,7)

// console.log(largest)


// function evenOdd(num) { 
//     if (num % 2 === 0){ 
//         return num + " is even"
//     } else { 
//         return num + " is odd"
//     }
// }

// console.log(evenOdd(12))

// function stringLength(string){ 
//     if (string.length <= 20) { 
//         return string+string
//     } else { 
//         var halfString = string 
//         return halfString.substr(0, string.length / 2 )

//             }
//         }
 
// console.log(stringLength("skjd"))

function fibonacci(n){ 
    var p = 0, c = 1, f = 1 
    if (n === 0){ 
        return 0;
    } else {
        for(var i = 2; i <= n; i++){ 
            f = p + c
            p = c
            c = f
           console.log(f)
            
    }
    return f;
    }
}
console.log(fibonacci(8))

function stringFrequency(string){ 

}