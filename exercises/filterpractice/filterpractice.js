function fiveAndGreaterOnly(arr) {
    let result = arr.filter(function(num){ 
        if(num > 5 ){ 
            return true
        }
    })
    return result
  }
 
  console.log(fiveAndGreaterOnly([3, 6, 8, 2]));

  function evensOnly(arr) {
    let evenNum = arr.filter(function(num){ 
        if(num % 2 === 0){ 
            return true
        }
    })
    return evenNum
  }
  // test
  console.log(evensOnly([3, 6, 8, 2]));


  function fiveCharactersOrFewerOnly(arr) {
    let longWords = arr.filter(function(length){ 
        if(length.length >= 5){ 
            return true
        }
    })
    return longWords
  }
  // test
  console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]

  function peopleWhoBelongToTheIlluminati(arr){
    let members = arr.filter(function(isMember){
        if(isMember.member === true){ 
            return true
        }
    })
    return members
  }
  // test
  console.log(peopleWhoBelongToTheIlluminati([
      { name: "Angelina Jolie", member: true },
      { name: "Eric Jones", member: false },
      { name: "Paris Hilton", member: true },
      { name: "Kayne West", member: false },
      { name: "Bob Ziroll", member: true }
  ]));
  // =>
  //[ { name: 'Angelina Jolie', member: true },
  //  { name: 'Paris Hilton', member: true },
  //  { name: 'Bob Ziroll', member: true } ]
  
  function ofAge(arr){
    let oldEnough = arr.filter(function(age){ 
        if(age.age >= 18){ 
            return true
        }
    }) 
    return oldEnough
  }
  // test
  console.log(ofAge([
      { name: "Angelina Jolie", age: 80 },
      { name: "Eric Jones", age: 2 },
      { name: "Paris Hilton", age: 5 },
      { name: "Kayne West", age: 16 },
      { name: "Bob Ziroll", age: 100 }
  ])); 
  // => 
  //[ { name: 'Angelina Jolie', age: 80 },
  //  { name: 'Bob Ziroll', age: 100 } ]