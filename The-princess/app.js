const readlineSync = require("readline-sync");
const character = ["Mario", "Luigi"]

class Player{
    constructor(totalCoins, status, hasStar){
        this.name; 
        this.totalCoins = totalCoins,
        this.status = status,
        this.hasStar = hasStar
    }
    setName(){
        const options = readlineSync.keyInSelect(character, "What characters do you want?")
        this.name = character[options]
        console.log(` Welcome ${this.name}`);
    }
    gotHit(){
        if(this.status === "Powered Up"){
            this.status = "Big"
        } else if(this.status === "Big"){
            this.status = "Small"
        } else if(this.status === "Small"){
            this.status = "Dead"
        }
    }
    
    gotPowered(){
        if(this.status === "Small"){
            this.status = "Big"
        } else if(this.status === "Big"){
            this.status = "Powered Up"
        } else if(this.status === "Powered Up"){
            this.hasStar++;
            console.log(" Congratulation, you got a star")
        }
    }

    addCoin(){
        this.totalCoins++
    }
}

let player = new Player(0, "Powered Up", 0);
player.setName()

function randomAction(){
    let randomAction =  Math.floor(Math.random() * 3)
    if(randomAction === 0){
        player.gotHit()
        console.log(` Name: ${player.name}\n Status: ${player.status}\n Total Coins: ${player.totalCoins}`)
    } else if(randomAction === 1){
        player.gotPowered()
        console.log(` Name: ${player.name}\n Status: ${player.status}\n Total Coins: ${player.totalCoins}`)
    } else if(randomAction === 2){
        player.addCoin()
        console.log(` Name: ${player.name}\n Status: ${player.status}\n Total Coins: ${player.totalCoins}`)
    }
    if(player.status === "Dead"){
        console.log(` You have ${player.hasStar} stars and ${player.totalCoins} coins, Congratulation!`);
        clearInterval(setIntervalId);
    }
}

var setIntervalId = setInterval(randomAction, 1500)