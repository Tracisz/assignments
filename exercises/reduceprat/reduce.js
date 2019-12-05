function total(arr) {
    let result = arr.reduce(function(final, sum){ 
        final += sum
        return final
    }) 
    return result
 }
 
 console.log(total([1,2,3]));

 function stringConcat(arr) {
   let longString = arr.reduce(function(final, lString){ 
       final += lString.toString()
       return final
   }, [])
   return longString
 }
 
 console.log(stringConcat([1,2,3])); // "123"


 function totalVotes(arr) {
    let voted = arr.reduce(function(final, voter){ 
        if(voter.voted){ 
            final++
            
        }
        return final
    }, 0)  
    return voted
 }
 
 var voters = [
     {name:'Bob' , age: 30, voted: true},
     {name:'Jake' , age: 32, voted: true},
     {name:'Kate' , age: 25, voted: false},
     {name:'Sam' , age: 20, voted: false},
     {name:'Phil' , age: 21, voted: true},
     {name:'Ed' , age:55, voted:true},
     {name:'Tami' , age: 54, voted:true},
     {name: 'Mary', age: 31, voted: false},
     {name: 'Becky', age: 43, voted: false},
     {name: 'Joey', age: 41, voted: true},
     {name: 'Jeff', age: 30, voted: true},
     {name: 'Zack', age: 19, voted: false}
 ];
 console.log(totalVotes(voters)); // 7

 function shoppingSpree(arr) {
   let totalCost = arr.reduce(function(final, cost){ 
       final += cost.price
       return final
   },0)
   return totalCost
 }
 
 var wishlist = [
     { title: "Tesla Model S", price: 90000 },
     { title: "4 carat diamond ring", price: 45000 },
     { title: "Fancy hacky Sack", price: 5 },
     { title: "Gold fidgit spinner", price: 2000 },
     { title: "A second Tesla Model S", price: 90000 }
 ];
 
 console.log(shoppingSpree(wishlist)); // 227005

 function flatten(arr) {
    let flattened = arr.reduce(function(final, item){ 
        final  = final.concat(item)
        return final
    },[])  
    return flattened
 }
 
 var arrays = [
     ["1", "2", "3"],
     [true],
     [4, 5, 6]
 ];
 
 console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

 
 var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
   let voterResult = arr.reduce(function(final, voterInfo){ 
       if(voterInfo.age > 18 && voterInfo.age < 25 && voterInfo.voted === true){ 
           final.age_18_25++ 
        
       } else if(voterInfo.age > 25 && voterInfo.age < 36 && voterInfo.voted === true){ 
           final.age_26_35++
          
        } else if(voterInfo.age > 36 && voterInfo.age < 55 && voterInfo.voted === true) { 
            final.age_36_55++
           }
           return final
       
    

   }, {age_18_25: 0, age_26_35: 0, age_36_55:0})
   return voterResult
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ youngVotes: 1,
  youth: 4,
  midVotes: 3,
  mids: 4,
  oldVotes: 3,
  olds: 4 
}
*/
