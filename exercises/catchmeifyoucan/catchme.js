// function sum(x, y){
//     if(typeof x !== 'number'){ 
//         throw new Error("Incorrect data types")
//     } else if(typeof y !== 'number'){ 
//         throw new Error("incorrect data type")
//     }
//     //check data types first and throw error
//     return x + y;
//   }

//   try { 
//       sum(1,"b")
//   }
//   catch(err){ 
//     console.log(err)
//   }

  var user = {username: "sam", password: "123abc"};
  function login(username, password){
      if(username === user.username && password === user.password){ 
        console.log( "Login successful")
      } else { 
        throw new Error("Incorrect credentials, Please try again")
      }
     
    //check credentials
  }


  try{ 
      console.log(login("sam", "123abc"))
  }
  catch(err){ 
      console.log(err)
  }

  try{ 
      login("saxc", "213abc")
  }
  catch (err){ 
      console.log(err)
  }