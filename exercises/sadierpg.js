const readline = require("readline-sync")
//Global variables//
const choices = ["walk"]
const playerChoices = ["Run Away", "Attack" , "Check health"];
let gameOver = false;
const player = {
    name: "",
    health: 100,
    items: [],
    attack: 20,
}
const enemies = [{
    type: "Fedora",
    health: 73,
    words: "You're toast, m'lady!",
    attack: "Flies throught the air, lands on your head in public!",
    enemyAttack: 20,
    itemDrop: "Pin from hot topic"
},
{
    type: "Doodle Bob",
    health: 34,
    words: "Meee Hoyy Mee mee noi!! You doodle! Me Spongebob!",
    enemyAttack: 7,
    attack: "Runs at you with a giant pencil trying and stabs you with it!",
    itemDrop: "eraser",
},
{
    type: "Juggalo",
    health: 57,
    words: "Ninja! Lets's go see ICP and drink Faygo!",
    enemyAttack:10,
    attack: "Forces you to go see an ICP concert",
    itemDrop: "tacky necklace"
}]
///game functions///
function gameComplete(){
    if(player.items.includes(enemies[1].itemDrop) && player.items.includes(enemies[0].itemDrop) && player.items.includes(enemies[2].itemDrop)){
        console.log("Congratulations! You have all of the items!")
        const keepPlaying = readline.keyInYN("Would you like to keep going?")
        if(keepPlaying){
            walk()
        } else {
            console.log("Let's Go!!")
            process.exit()
        }
    }
}
function walk(){
    const randomNum = generateRandomChance(3)
    if (randomNum === 0) {
        console.log("\n\t\t--You get in a fight!--")
        generateEnemy()
    } else {
        console.log("\n\t\tYou dodged an enemy!")
    }
}
function generateEnemy() {
    console.log('You have approached an enemy!!')
    const attackOption = generateRandomChance(3)
    if (attackOption === 0 || attackOption === 2) {
        console.log("\n\tIt's a " + enemies[attackOption].type + " with " + enemies[attackOption].health + " HP. He says " + enemies[attackOption].words)
    } else if (attackOption === 0) {
        console.log("\n\tIt's a " + enemies[attackOption].type + " with " + enemies[attackOption].health + " HP. He says " + enemies[attackOption].words)
    }
    playerAttacking(attackOption)
}
// const runChance = generateRandomChance(3)
//         if(runChance === 100){
//             console.log("\tbut the " + enemies[attackOption1].type + " " + enemies[attackOption1].attack)
//             console.log("\n\t--GAME OVER--")
//             process.exit()
//         }else if(runChance === 0){
//             console.log("\tYou got away")
//         }
//          else {
//         process.exit()
//             }
// function playerAttack(){
//     const attackOption1 = generateRandomChance(3)
//     let move = readline.keyInSelect(playerChoices,"\tIt's your move!")
//     if(move === 0){
//         console.log("\n\tAttack the enemy!")
//         playerAttack(attackOption1)
//         (enemies[attackOption1].health > 0)
//             player.health = player.health - enemies[attackOption1].enemyAttack
//             console.log("the enemy attacked for" + " " + enemies[attackOption1].enemyAttack)
//         }else if (move===1){
//                 runChance()
//         }else if(move === 2){
//                 console.log(player.health)
//         }else{
//             console.log("\nHell Ya! You beat the " + enemies[attackOption1].type + "! That is 42 HP for ya!")
//             player.health = player.health + 42
//             enemies[attackOption1].health = enemies[attackOption1].health
//         }
//         const itemChance = generateRandomChance(3)
//         if(enemies[attackOption1].type){
//             player.items.push(enemies[attackOption1].itemDrop)
//             console.log("You picked up the " + enemies[attackOption1].type + "\'s " + enemies[attackOption1].itemDrop)
//             }
//             gameComplete()
// }
function playerAttacking (attackOption){
//     const fightMoves = ["Fight", "Run Away", "Check Health"]
//     let playerAction = readline.keyInSelect(fightMoves, "\tWould you like to run or attack? Remember, if you run then you only have a 50% chance of escaping!: ")
    const attackPower = generateRandomChance(100)
    // let enemyHealth = Math.floor(Math.random() * enemies[attackOption].health)
    
        while(player.health >= 0, enemies[attackOption].health >= 0){
            let playerAction = readline.keyInSelect(playerChoices, "\tWould you like to run or attack? Remember, if you run then you only have a 50% chance of escaping!: ")
            if(playerAction === 1){
            enemies[attackOption].health = enemies[attackOption].health - attackPower
            console.log("\tYou damage the " + enemies[attackOption].type + " by " + attackPower + " HP. His health is reduced to " + (enemies[attackOption].health) + "!")
                player.health = player.health - enemies[attackOption].enemyAttack
                console.log(`${enemies[attackOption].type} hits you for ${enemies[attackOption].enemyAttack}`)
                if(enemies[attackOption].health <= 0 ){
                    player.items.push(enemies[attackOption].itemDrop)
                    console.log("You picked up the " + enemies[attackOption].type + "\'s " + enemies[attackOption].itemDrop)
                    }
            
        } else if (playerAction === 2){
            console.log(player.health)
        } else {
            let escapeChance = Math.floor(Math.random() * 2)
            if(escapeChance % 2 === 0){
                console.log("You Escaped!")
                walk()
            } else  {
                console.log("you did not escape")
            }
        }
    }
    }

// function gameComplete(attackOption){
//     gameComplete = generateRandomChance(3)
//     player.health = player.health - gameComplete
//     console.log("\nThe " + enemies[attackOption].type + " Drop kicks you a billion times " + gameComplete + "Attack points.")
//     if(player.items.length === 3){
//         console.log("--GAME OVER--")
//         console.log("The " + enemies[attackOption].type + " " + enemies[attackOption].attack)
//         process.exit()
//     } else {
//         userMove(attackOption)
//     }
// }
function generateRandomChance(chance) {
    return Math.floor(Math.random() * chance)
}
//// Game Loop ////
console.log("\n~ ~ Welcome to the colossal adventure! You are going to be facing 3 enemies. Defeat and collect an item from each of them and you win the game! ~ ~")
player.name = readline.question("\nWhat is your name?: ")
console.log("\t\t\tHello" + " " + player.name + "!" + "Let the games begin!")
while(!gameOver) {
    const userChoice = readline.keyInSelect(choices, "\tWhat would you like to do?: ")
    if(userChoice === 0){
        walk()
    }
    if(userChoice === -1){
        console.log("You out!")
        process.exit()
    }
    //playerMove()
    gameComplete()
}