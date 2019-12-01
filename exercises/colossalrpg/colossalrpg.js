let readline = require('readline-sync');
let greeting = "You are exploring dark ruins with nothing to light the air but the torch in your hand. Your mission is to find the lost girl from the town over. There have been many disapearences lately, and you have been hired to find the cause and end it."
let playerName = readline.question("Traveler what is your name? ")
console.log(greeting)


let items = [
    swordOfLight = { 
        name:"Sword of Light",
        ability: function(){ 
            playerStats.attack = playerStats.attack + 8
        }
    }, 
    cape = { 
        name:"Cape of Deflection",
        ability: function(){ 
            playerStats.health = playerStats.health + 10
        }
    },
    coins = { 
        name:"A sack of coins"
    }

]


const playerStats = { 
    name: playerName,
    health: 20,
    attack: "1-6",
    inventory: { 
        item1: { 
            name:"potion",
            ability: function(){ 
                this.health = health + 20 
            }
        }
    }
}
let enemies = [ 
goblin = { 
    name:"Goblin",
    health: 6,
    attack: Math.floor(Math.random() * 5),
    enemyId: 1
},

rat = { 
    name: "Giant Rat",
    health: 6,
    attack: Math.floor(Math.random() * 5),
    enemyId: 2
},

skeleton = { 
    name: "Skeleton Warrior",
    health: 10,
    attack: Math.floor(Math.random() * 5), 
    enemyId: 3
},
]

 let gameOver = false 


console.log("As you are walking through the ruins, you feel the ground beneath you shift and a hole opens underneath your feet. You flail your arms and try to grab the side of the hole so you don't fall in but you were not quick enough. You fall into a deep dark abyss and feel the ground meet you. It is hard stone and you lose consciousness. When you awaken you look around to see that you are in a dungeon. The hole above your head is too high to climb out of so you must press on. You grab your torch and continue deeper into the dungeon")

while(!gameOver){ 
    if(enemies[0].health <= 0 && enemies[1].health <= 0 && enemies[2].health <= 0){ 
        console.log("You have defeated all of the enemies in the dungeon. You hear a girl yell out to you for help and procede to her location. You find her unharmed, and bring her back to her parents in the village. Everyone in the village is very thankful for your help. Congratulations you have completed your quest!")
        gameOver = true
        break
    }
   
    playerAction()
    if(playerStats.health <= 0){ 
        console.log("You have died!")
        gameOver = true
        
    }
    
}
 
  
function walking() {
    console.log("You walk forward")

    let encouterChance = Math.floor(Math.random(1) * 2)
    if(encouterChance % 2 === 0 ){ 
        console.log("as you walk through the small corridor you encounter an enemy blocking your path!")
        let enemyId = Math.floor(Math.random() * 3)
        let enemyInEncounter = enemies[enemyId]
        let encouterChoices = ["attack", "run"]
        console.log("Before you stands a " + enemyInEncounter.name)
        let playerEncounterChoice = readline.keyInSelect(encouterChoices, "How do you procede?")
        if(playerEncounterChoice === 1) {  
            let escapeSuccess = Math.floor(Math.random(1) * 2)
            if(escapeSuccess % 2 === 0 ){ 
                console.log("You have dodged the enemy escaping the fight")
                } else { 
                console.log("You attempt to pass the enemy before you, but the enemy was prepared for such a maneuver")
                console.log("The enemy slashes at you hitting you for " + enemyInEncounter.attack)
                playerStats.health = playerStats.health - enemyInEncounter.attack
                console.log("You have " + playerStats.health + " health remaining")
                while(enemyInEncounter.health > 0 && playerStats.health > 0){ 
                    playerStats.attack = Math.floor(Math.random() * 6)
                    let inBattleChoices = ["attack", "run"]
                    let playerEncounterChoice = readline.keyInSelect(inBattleChoices, "How do you procede?")
                        if(playerEncounterChoice === 1){ 
                            let escapeSuccess = Math.floor(Math.random(1) * 2)
                            if(escapeSuccess % 2 === 0 ){ 
                                console.log("You have dodged the enemy escaping the fight")
                                enemyInEncounter.health = 0
                                } else { 
                                       console.log("You attempt to pass the enemy before you, but the enemy was prepared for such a maneuver")
                                       console.log("The enemy slashes at you hitting you for " + enemyInEncounter.attack)
                                       playerStats.health = playerStats.health - enemyInEncounter.attack
                                       console.log("You have " + playerStats.health + " health remaining")
                                    }
                            } else { 
                                console.log("You decide to attack it, swinging your sword you do " + playerStats.attack + " damage!")
                                enemyInEncounter.health = enemyInEncounter.health - playerStats.attack
                                console.log(enemyInEncounter.name + " has " + enemyInEncounter.health + " health remaining")
                                if(enemyInEncounter.health > 0){ 
                                    console.log("The " + enemyInEncounter.name + " Slashes back dealing " + enemyInEncounter.attack + " damage")
                                    playerStats.health = playerStats.health - enemyInEncounter.attack
                                    console.log(playerStats.name + " has " + playerStats.health + " health remaining")
                                    
                                } else { 
                                    let healthGained = Math.floor(Math.random() * 10)
                                    let itemOnBody = Math.floor(Math.random(1)*3)
                                console.log(playerStats.name + " searched the body and found " + items[itemOnBody].name) 
                                console.log(playerStats.name + " gained " + healthGained + " health back")
                                let newItem = items[itemOnBody]
                                playerStats.health = playerStats.health + healthGained
                                playerStats.inventory.item =  newItem
                   
                        }
                    }
                }
            }
        } else { 
            if(enemyInEncounter.health < 0){ 
                console.log(enemyInEncounter.name + " is already dead")
            }
            while(enemyInEncounter.health > 0 && playerStats.health > 0){ 
                playerStats.attack = Math.floor(Math.random() * 6)
                let inBattleChoices = ["attack", "run"]
                let playerEncounterChoice = readline.keyInSelect(inBattleChoices, "How do you procede?")
                    if(playerEncounterChoice === 1){ 
                        let escapeSuccess = Math.floor(Math.random(1) * 2)
                        if(escapeSuccess % 2 === 0 ){ 
                            console.log("You have dodged the enemy escaping the fight")
                            enemyInEncounter.health = 0
                            } else { 
                                   console.log("You attempt to pass the enemy before you, but the enemy was prepared for such a maneuver")
                                   console.log("The enemy slashes at you hitting you for " + enemyInEncounter.attack)
                                   playerStats.health = playerStats.health - enemyInEncounter.attack
                                   console.log("You have " + playerStats.health + " health remaining")
                                }
                        } else { 
                            console.log("You decide to attack it, swinging your sword you do " + playerStats.attack + " damage!")
                            enemyInEncounter.health = enemyInEncounter.health - playerStats.attack
                            console.log(enemyInEncounter.name + " has " + enemyInEncounter.health + " health remaining")
                            if(enemyInEncounter.health > 0){ 
                                console.log("The " + enemyInEncounter.name + " Slashes back dealing " + enemyInEncounter.attack + " damage")
                                playerStats.health = playerStats.health - enemyInEncounter.attack
                                console.log(playerStats.name + " has " + playerStats.health + " health remaining")
                                
                            } else { 
                                let itemOnBody = Math.floor(Math.random(1)*3)
                                let healthGained = Math.floor(Math.random() * 10)
                                console.log(playerStats.name + " searched the body and found " + items[itemOnBody].name) 
                                console.log(playerStats.name + " gained " + healthGained + " health back")
                                playerStats.health = playerStats.health + healthGained
                                let newItem = items[itemOnBody]
                                playerStats.inventory.item =  newItem
               
                    }
                }
            }
        }
    }
}

function playerAction(){ 
    let playerChoice = readline.question("Press W to walk forward \nPress S to check your status\nPress I to check inventory\n")
    if(playerChoice === "w" || playerChoice === "W"){ 
        walking()
    } else if(playerChoice === "s" || playerChoice === "S") { 
        checkStatus()
    } else if(playerChoice === "i" || playerChoice === "I"){ 
        checkInventory()
} else { 
    console.log("Invalid input please try again")
    }
}

function checkStatus(){
    console.log(playerStats)
}

function checkInventory(){ 
console.log(playerStats.inventory)
}

function allEnemiesDefeated(){ 
    if(enemies[0].health <= 0 && enemies[1].health <= 0 && enemies[2].health <= 0){ 
        console.log("You have defeated all of the enemies in the dungeon. You hear a girl yell out to you for help and procede to her location. You find her unharmed, and bring her back to her parents in the village. Everyone in the village is very thankful for your help. Congratulations you have completed your quest!")
        gameOver = true
    }
   
}
// function inCombat(){ 
//     while(enemyInEncounter.health > 0 && playerStats.health > 0){ 
//         playerStats.attack = Math.floor(Math.random() * 6)
//         let inBattleChoices = ["attack", "run"]
//         let playerEncounterChoice = readline.keyInSelect(inBattleChoices, "How do you procede?")
//             if(playerEncounterChoice === 2){ 
//                 let escapeSuccess = Math.floor(Math.random(1) * 2)
//                 if(escapeSuccess % 2 === 0 ){ 
//                     console.log("You have dodged the enemy escaping the fight")
//                     } else { 
//                            console.log("You attempt to pass the enemy before you, but the enemy was prepared for such a maneuver")
//                            console.log("The enemy slashes at you hitting you for " + enemyInEncounter.attack.value)
//                            playerStats.health = playerStats.health - ennemyInEncounter.attack
//                            console.log("You have " + playerStats.health + " health remaining")
//                         }
//                 } else { 
//                     console.log("You decide to attack it, swinging your sword you do " + playerStats.attack + " damage!")
//                     enemyInEncounter.health = enemyInEncounter.health - playerStats.attack
//                     console.log(enemyInEncounter.name + " has " + enemyInEncounter.health + " health remaining")
//                     if(enemyInEncounter.health > 0){ 
//                         console.log("The " + enemyInEncounter.name + " Slashes back dealing " + enemyInEncounter.attack + " damage")
//                         playerStats.health = playerStats.health - enemyInEncounter.attack
//                         console.log(playerStats.name + " has " + playerStats.health + " health remaining")
                        
//                     } else { 
//                         let itemOnBody = Math.floor(Math.random(1)*3)
//                     console.log(playerStats.name + " searched the body and found " + items[itemOnBody].name) 
//                     let newItem = items[itemOnBody]
//                     playerStats.inventory.item =  newItem
//                 }
//             }
//         }
//     }

