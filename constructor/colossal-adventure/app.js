var readlineSync = require("readline-sync");


function Enemy(enemyName, hp, equipment){
    this.enemyName = enemyName;
    this.hp = hp;
    this.equipment = equipment;
} 
function Hero(heroName, hp, equipment){
    this.heroName = heroName;
    this.hp = 100;
    this.equipment = equipment;
}

var wildEnemies = ["Crocodile", "Demon", "Colossal Robot", "Thanos", "Giant Kid","Free to go","Free to go","Free to go"]
var random = Math.floor(Math.random() * wildEnemies.length);
var isDead = false;
var hasWon = false;

console.log('Hello solider, welcome to the dead-end road!')
var name = readlineSync.question("Please enter your name: ");  
console.log("Hello " + name);
var newHero = new Hero(name, "wood-sword")

var pressedKey = readlineSync.keyIn("Hit W to move", "w").toLowerCase();

while(!isDead && !hasWon)
    if(pressedKey === "w"){ 
        
}