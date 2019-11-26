const readline = require("readline-sync")
console.log("You awaken in a strange room, it is dark and the air is dank. You think you might be in a dungeon of some sort but you cannot remember how you got there. You climb to your feet and observe the room around you. There is a door straight ahead of you, and a hole in the wall next to it.")
var userHasKey = false 
while(!userHasKey){ 
    var choices = ["open the door", "find the key", "put hand in hole"]
    var firstAction = readline.keyInSelect(choices, "How do you proceed")
    var usersAction = choices[firstAction]

    if(usersAction == "put hand in hole"){ 
        console.log(usersAction)
        console.log("You place your hand in the hole, the stone around the hole tightens and you cannot remove your hand. You begin to panic and pull your arm back in futile effort. The stone is close around your hand crushing it, you writhe in pain. A sharp needle pierces the skin on your knuckles in the wall, and you feel your veins catch on fire. You slump down as your consciousness slips from your body. You have died.")
        break
        
    } else if (usersAction == "open the door"){ 
        console.log(usersAction)
        console.log("You pull on the door but it is locked, You see a keyhole above the door handle. You think to yourself, 'there must be a key in this room somewhere'. That is when you spot a key on the table on the othet side of the room.")
    } else if(usersAction === undefined){ 
        break
    } else { 
        console.log(usersAction)
        console.log("You walk over to the table and grab the key, a quick inspection of the key tells you that it is the same shape and size of the keyhole on the door.")
        userHasKey = true 
    }
}


while (userHasKey){ 
    var choices = ["open the door", "find the key", "put hand in hole"]
    
    var firstAction = readline.keyInSelect(choices, "How do you procede")
    var usersAction = choices[firstAction]

    if( usersAction == "put hand in hole"){ 
        console.log(usersAction)
        console.log("You place your hand in the hole, the stone around the hole tightens and you cannot remove your hand. You begin to panic and pull your arm back in futile effort. The stone is closed around your hand crushing it, you writhe in pain. A sharp needle pierces the skin on your knuckles in the wall, and you feel your veins catch fire. You slump down as your consciousness slips from your body. You have died.") 
        break
    } else if(usersAction == "open the door"){ 
        console.log(usersAction)
        console.log("You use the key to open the door and you are greated by a blinding light. The dank smell that was in the room is no longer assaulting your senses and you can now smell a fresh breeze. You walk out into an open field. Free at last.")
        break
    } else if(usersAction === undefined){ 
    break  
    } else { 
        console.log(usersAction)
        console.log("You already have the key")
        usersAction = 0
    }
}