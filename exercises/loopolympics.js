//  for (i = 0; i <= 9; i++){ 
//      console.log(i)
//  }

//  for(var i = 9; i >= 0; i--){ 
//      console.log(i)
//  }

//  var fruit = ["banana", "orange", "apple", "kiwi"]

//  for (var i = 0; i < fruit.length; i++){ 
//      console.log(fruit[i])
//  }


// var emptyArray = []
// for(var i = 0; i < 9; i++){ 
//     emptyArray.push(i)
//     console.log(emptyArray[i])
// }

// for (var i = 0; i < 101; i++){ 
//     if( i % 2 === 0){ 
//         console.log(i)
//     } 
// }

// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// var emptyArray = []

// for (var i = 0; i < fruit.length; i++){ 
//     if(i % 2 === 0){ 
//         emptyArray.push(fruit[i])
//         console.log(emptyArray[i / 2])
//     }
   
    
//     }

var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ] 
//   for (var i = 0; i < peopleArray.length; i++){ 
//       console.log(peopleArray[i].name)
//   }
var nameArray = []
var occupationArray = []
for (var i = 0; i < peopleArray.length; i++){ 
    if(i % 2 === 0){
        nameArray.push(peopleArray[i].name)
        console.log(nameArray[i / 2])
        
    } else if (i % 2 === 1){ 
        occupationArray.push(peopleArray[i].occupation)
        console.log(occupationArray[i - i])
    }
   
}
