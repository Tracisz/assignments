class Player { 
    constructor(name, totalCoins, status, hasStar){ 
        this.name = name 
        this.totalCoins = totalCoins
        this.status = status 
        this.hasStar = hasStar
    }
    setName = namePicked => { 
        this.name = namePicked
    }
    gotHit = () => { 
        if(this.status == "Powered Up"){ 
           this.status = "Big"
        } else if(this.status == "Big"){ 
           this.status = "Small"
        } else { 
           this.status = "Dead"
           clearInterval(myVar)
        }
    }
    gotPowerUp = () => { 
        if(this.status == "Small"){ 
           this.staus = "Big"
        } else if(this.status == "Big"){ 
           this.status = "Powered Up"
        } else { 
           this.hasStar = true
        }
    }
    gameActive = () => { 
        
        if(this.status === "Dead"){ 
            return false
        } else { 
            return true
        }
    }
    addCoin = () => { 
        this.totalCoins++
    }
    print = () => { 
        console.log(`Name: ${this.name} \nStatus: ${this.status}\nTotal Coins: ${this.totalCoins}\nStar Property: ${this.hasStar} 
            `)
    }
    randomNum = () => { 
        let randomNum = Math.floor(Math.random()*3)
        console.log(randomNum)
        this.print()
        console.log(this.gameActive())
        if(randomNum === 0){ 
            this.gotHit()
        } else if(randomNum === 1){ 
            this.gotPowerUp()
        } else if( randomNum === 2) { 
            this.addCoin()
        } else if(!this.gameActive()) {
            console.log('game over')
            return 'done'
        } else {
            console.log("We got Undefined!")
            
            
        }
    }
   
}
debugger
let newPlayer = new Player("Mario", 0, "Big", false)
let myVar 
    if(newPlayer.gameActive){ 
        myVar = setInterval(newPlayer.randomNum, 1000)
        console.log(3333, myVar)
    } else { 
        console.log('cleared interval')
        clearInterval(myVar)
    }

