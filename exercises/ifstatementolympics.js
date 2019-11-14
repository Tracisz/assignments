if (5 > 3){ 
    console.log("it is greater than")
} else { 
    console.log("it is not greater than")
}
var cat = "cat"
if (cat.length === 3){ 
    console.log("is the length")
} else { 
    console.log("is not the length")
}

if ("cat" === "dog") { 
    console.log("they are the same")
} else { 
    console.log("They are not the same")
}

var person = {
    name: "Bobby",
    age: 12
  }

  if (person.age >= 18){ 
      console.log(person.name + " is old enough")
  } else { 
      console.log(person.name + " is not old enough")
  }
  if (person.name[0] === "B"){
      console.log(person.name + " can enter the movie theater")
   } else { 
       console.log(person.name + " cannot enter the movie theater ")
   }

   if (person.name[0] === "B" && person.age >=18){ 
       console.log(person.name + " can enter the theater")
   } else { 
       console.log(person.name + " cannot enter the theater")
   }
   if (1 === "1"){ 
       console.log("strict")
   } else if (1 == "1"){ 
       console.log("loose")
   } else { 
       console.log ("not equal at all")
   }

   if(1 <=2 && 2 === 4){ 
    console.log("yes")
   } else { 
       console.log("no")
   }
   if (typeof "dog" == "string"){ 
       console.log("dog is a string")
   } else { 
       console.log("dog is not a string")
   }
   if (typeof true == "boolean"){ 
       console.log("true is a boolean")
   } else { 
       console.log("true is not a boolean")
   }
   if (typeof num !== "undefined"){ 
       console.log("num is defined")
   }else{ 
       console.log("num is undefined")
   }

   if("t" > [8]){ 
       console.log("s is greater than 12")
   } else { 
       console.log("s is not greater than 12")
   }

   var myNum = 15
   myNum % 2 === 0 ? console.log("Even Number") : console.log("Odd Number");


   