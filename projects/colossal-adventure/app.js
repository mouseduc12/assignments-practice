var readlineSync = require("readline-sync");
var sound = require("play-sound")(opts = {});

var change;
function changeWeapon(){
    change = sound.play("./sound-effect/metal-clash.wav", function(err){
        if(err && !err.killed) throw err;
    })
}

var gods 
function meetTheGods(){
    gods = sound.play("./sound-effect/Meet the gods(HD) (mp3cut.net) (1).mp3", function(err){
        if(err && !err.killed) throw err
    });
}

var retreat 
function retreatAction(){
    retreat = sound.play("./sound-effect/42 - retreated from combat.mp3", function(err){
        if(err && !err.killed) throw err
    });
}

var goodTime 
function goodTheme(){
    goodTime = sound.play("./sound-effect/31 - good theme (mp3cut.net).mp3", function(err){
        if(err && !err.killed) throw err
    });
}

var jump;
function jumping(){
    jump = sound.play("./sound-effect/Jump Sound Effect (mp3cut.net).mp3", function(err){
        if(err && !err.killed) throw err
    });
}

var clashing
function swordClashing(){
    clashing = sound.play("./sound-effect/Swords Clashing-SoundBible.com-912903192.mp3", function(err){
        if(err && !err.killed) throw err
    });
}

var meetEnemy;
function encounterEnemy(){
    meetEnemy = sound.play("./sound-effect/Heroes of Might & Magic III Complete Edition - All Sound Effects (HD) (mp3cut.net) (1).mp3", function(err){
        if(err && !err.killed) throw err
    });
}

var combat;
function playCombatTheme(){
    combat = sound.play("./sound-effect/07 - combat theme 3.MP3.mp3", function(err){
        if(err && !err.killed) throw err
    });
}

var castle;
function castleTheme(){
    castle = sound.play("./sound-effect/02 - castle towns.mp3", function(err){
        if(err && !err.killed) throw err
    });
}

var winScenario;
function winScenarioCase(){
    winScenario = sound.play("./sound-effect/47 - win scenario.mp3", function(err){
        if(err && !err.killed) throw err
    });
}

var win;
function winCombat(){
    win = sound.play("./sound-effect/40 - win combat.mp3", function(err){
        if(err && !err.killed) throw err
    });
}

var lose;
function lostTheme(){
    lose = sound.play("./sound-effect/41 - defeated in combat.mp3", function(err){
        if(err && !err.killed) throw err
    });
}

var loop;
function loopingTheme(){
    loop = sound.play("./sound-effect/44 - looping leprechaun theme.mp3", function(err){
        if(err && !err.killed) throw err
    });
}


function Enemy(enemyName, hp, attackPoint ,treasure, droppedExperience, droppedHealth){
    this.enemyName = enemyName;
    this.hp = hp;
    this.attackPoint = attackPoint;
    this.droppedExperience = droppedExperience;
    this.treasure = treasure;
    this.droppedHealth = droppedHealth;
    this.attack = function(){
        return Math.floor(Math.random() * 10) + this.attackPoint;
    }
}

var chaosHydra = new Enemy("Chaos Hydra", 300, 22, "Dragon Sword", 500, 100);
var blackDragon = new Enemy("Black Dragon", 270, 25, "Hybird Sword", 500, 100);
var titan = new Enemy("God Titan", 350, 26, "Lightning Sword", 500, 100);
var behemoth = new Enemy("Behemoth", 330, 24, "White Claws", 500, 100);

var farmer = new Enemy("Farmer", 20, 5, "nothing", 50, 5);
var orc = new Enemy("Orc", 30, 10, "Silver Sword", 50, 5);
var guard = new Enemy("Guard", 25, 9, "nothing", 30, 5);
var goblin  = new Enemy("Goblin", 25, 6, "nothing", 20, 5);

var cavalier = new Enemy("Cavalier", 70, 17, "Lance", 60, 15);
var monk = new Enemy("Evil Monk", 60 , 15, "Mighty Fist",50, 15);
var medusa = new Enemy("Medusa", 75, 14, "nothing", 55, 15);
var vampire = new Enemy("Vampire", 80, 17, "nothing",50, 15);

var godEnemies = [chaosHydra, blackDragon, titan, behemoth]
var weakEnemies = [farmer, orc, guard, goblin]
var mediumEnemies = [cavalier, monk, medusa, vampire] 

function Hero(heroName, hp , equipment, level, experience){
    this.heroName = heroName;
    this.hp = hp;
    this.attackPoint = 10
    this.equipment = equipment;
    this.level = level;
    this.experience = experience
    this.attack = function(){
        return Math.floor(Math.random() * 10) + this.attackPoint;
    }
}

console.log("Following the disappearance of King Roland Ironfist of Enroth prior to Might and Magic VI: The Mandate of Heaven, his wife, Queen Catherine, is left to rule therealm. In the meantime, her father, King Gryphonheart of Erathia, is assassinated. Without their beloved King, the kingdom of Erathia falls to the dark forces of Nighon and Eeofol. Queen Catherine returns home to Antagarich seeking to rally the people of her homeland and lead them against the evil that has ravaged their nation.")
console.log('Welcome to the dead-end road, chosen one!')
var name = readlineSync.question("Please enter your name: ");  
console.log("Hello hero, " + name + ". It's time to conquer those demons and bring peace to the world!");
castleTheme()
var player = new Hero(name, 100 , "fist", 0, 0)
var equipment = ["woodsword"]
var monsterIndex = 0;
// Player meeting the enemy or just getting rest 
function walking(){  
    var currentEnemy; 
    var meetEnenemyOrNot = Math.floor(Math.random() * 4);
    var heroOptions = ["Retreat", "Attack"];
    var currentEnemyAttacking;
    // If player meet them will they attack or run
    if(meetEnenemyOrNot % 2 === 0){
        if(castle){
            castle.kill()
        }
        if(player.level < 5){
            if(goodTime){
                goodTime.kill()
            }
            if(retreat){
                retreat.kill()
            }
            monsterIndex = randomWeakEnemy;
            currentEnemy = weakEnemies[monsterIndex];
            encounterEnemy()
            console.log(`${currentEnemy.enemyName} tried to ambush you but you turned back and saw it.`);
            var runOrAttack = readlineSync.keyInSelect(heroOptions, "What would you do?");
            if(runOrAttack === 0){
                retreatAction()
                if(castle){
                    castle.kill()
                }
                currentEnemyAttacking = currentEnemy.attack()
                if(getHitOrNot % 2 === 0) { 
                    console.log("You hid behind the tree, waited until the " + currentEnemy.enemyName + " passed by and moved on, What a sneaker!");
                } else {
                    player.hp -= currentEnemyAttacking;
                    console.log(`${currentEnemy.enemyName} heard your breathing and attacked you, you still managed to escape but you took ${currentEnemyAttacking} damage, now you have ${player.hp}`)
                }
            } else{
                console.log("Attack!")
                attackEachOther(currentEnemy)
            }
        } else if(player.level >= 5 && player.level <= 12){
            if(goodTime){
                goodTime.kill()
            }
            if(retreat){
                retreat.kill()
            }
            monsterIndex = randomMediumEnemy
            currentEnemy = mediumEnemies[monsterIndex];
            encounterEnemy()
            console.log(`${currentEnemy.enemyName} tried to ambush you but you turned back and saw it.`);
            var runOrAttack = readlineSync.keyInSelect(heroOptions, "What would you do?");
            if(runOrAttack === 0){
                retreatAction()
                if(castle){
                    castle.kill()
                }
                currentEnemyAttacking = currentEnemy.attack()
                //Player will get hit or escape successfully after chose to run
                if(getHitOrNot % 2 === 0) { 
                    console.log("You hid behind the tree, waited until the enemy passed and moved on, What a sneaker!");
                } else {
                    player.hp -= currentEnemyAttacking
                    console.log(`${currentEnemy.enemyName} heard your breathing and attacked you, you still managed to escape but you took ${currentEnemyAttacking} damage, now you have ${player.hp} health point`)
                }
            } else{
                console.log("Attack!")
                attackEachOther(currentEnemy)
            }
        } else {
            if(goodTime){
                goodTime.kill()
            }
            if(retreat){
                retreat.kill()
            }
            monsterIndex = randomGodEnemy
            currentEnemy = godEnemies[monsterIndex];
            meetTheGods()
            console.log(`You've come across the hills of God and you saw ${currentEnemy.enemyName} standing there guarding his empire.`);
            var runOrAttack = readlineSync.keyInSelect(heroOptions, "What would you do?");
            if(runOrAttack === 0){
                retreatAction()
                if(castle){
                    castle.kill()
                }
                currentEnemyAttacking = currentEnemy.attack()
                if(getHitOrNot % 2 === 0) { 
                    console.log("You hid behind the tree, waited until the enemy passed and moved on, What a sneaker!");
                } else {
                    player.hp -= currentEnemy.attack();
                    console.log(`${currentEnemy.enemyName} heard your breathing and attacked you, you still managed to escape but you took ${currentEnemyAttacking} damage, now you have ${player.hp}`)
                }
            } else{
                console.log("Attack!")
                attackEachOther(currentEnemy)
            }
        }
        //Player getting rest because he/she hasn't encountered any enemy
    } else {
        if(castle){
            castle.kill()
        }
        if(goodTime){
            goodTime.kill();
        }
        goodTheme()
        if(player.hp < 85){
            console.log("Walking for hours and you haven't seen anything so you sit next to the tree to eat and sleep")
            player.hp += healthHeal;
            console.log(`After a long rest, your hp increases ${healthHeal} now you have ${player.hp}`);
        } else{ 
            console.log("You sit and rest, because you still feel full so you save your food for the next battle")
        } 
    }
}

function attackEachOther(currentEnemy){
    playCombatTheme()
    while(currentEnemy.hp > 0 && player.hp > 0 ){
        var playerAttacking = player.attack()
        var enemyAttacking = currentEnemy.attack();
        var dodgeChance = Math.floor(Math.random() * 2)
        var attackStrategies = ["Attack", "Dodge"]
        var attackOptions = readlineSync.keyInSelect(attackStrategies, "How do you want to attack?")
        if(attackOptions === 0){
            swordClashing();
            currentEnemy.hp -= playerAttacking
            console.log(`You attacked ${currentEnemy.enemyName} with ${playerAttacking} points, now ${currentEnemy.enemyName} has ${currentEnemy.hp} points left`);
            if(currentEnemy.hp <= 0){
                 if(combat){
                     combat.kill()
                 }
                 if(clashing){
                     clashing.kill()
                 }
                winCombat()
                console.log("Congrat hero, you just conquer the devil")
                if(currentEnemy.treasure){
                    if(currentEnemy.treasure === "nothing"){
                        console.log(`There is no treasure on ${currentEnemy.enemyName}, sad`)
                    } else {
                        if(win){
                            win.kill();
                        }
                        equipment.push(currentEnemy.treasure);
                            console.log(`You found a ${currentEnemy.treasure} from ${currentEnemy.enemyName}`)
                            loopingTheme()
                    }
                } else {
                    console.log("Nothing is here");
                }

                if(currentEnemy.droppedHealth){
                    player.hp += currentEnemy.droppedHealth
                    console.log(`${currentEnemy.enemyName} has food stored in the bag, you ate it and it increased ${currentEnemy.droppedHealth} on your health, now you have ${player.hp} `)
                } else {
                    console.log("Nothing is here either");
                }

                if(currentEnemy.droppedExperience){
                    player.experience += currentEnemy.droppedExperience
                    console.log(`You gain ${currentEnemy.droppedExperience} experiences from ${currentEnemy.enemyName}`)
                } else {
                    console.log("Nothing is here either")
                }
                if(currentEnemy === weakEnemies[monsterIndex]){
                    weakEnemies.splice(monsterIndex, 1);
                } else if(currentEnemy === mediumEnemies[monsterIndex]){
                    mediumEnemies.splice(monsterIndex, 1);
                } else {
                    godEnemies.splice(monsterIndex, 1);
                }

            } else {
                player.hp -= enemyAttacking
                console.log(`${currentEnemy.enemyName} returned back with a powerful attack and It took ${enemyAttacking} of your health, now you have ${player.hp} points left`)    
            }
        } else if(attackOptions === 1){
            jumping();
            if(dodgeChance % 2 === 0){
                currentEnemy.hp -= playerAttacking
                console.log("You dodged the attack and struck back with " + playerAttacking + " points, now " + currentEnemy.enemyName + " has " + currentEnemy.hp + " hp")
                if(currentEnemy.hp <= 0){
                    if(combat){
                        combat.kill()
                    }
                    console.log("Congrat hero, you just conquer the devil");
                    winCombat(); 
                if(currentEnemy.treasure){
                        if(currentEnemy.treasure === "nothing"){
                            console.log(`There is no treasure on ${currentEnemy.enemyName}, sad`)
                        } else {
                            if(win){
                                win.kill();
                            }
                            equipment.push(currentEnemy.treasure);
                            console.log(`You found a ${currentEnemy.treasure} from ${currentEnemy.enemyName}`)
                            loopingTheme()
                        }
                    }
                    if(currentEnemy.droppedHealth){
                        player.hp += currentEnemy.droppedHealth
                        console.log(`${currentEnemy.enemyName} has food stored on the bag, you ate it and it increased ${currentEnemy.droppedHealth} on your health, now you have ${player.hp} `)
                    } else {
                        console.log("Nothing is here either");
                    }

                    if(currentEnemy.droppedExperience){
                        player.experience += currentEnemy.droppedExperience
                        console.log(`You gain ${currentEnemy.droppedExperience} experiences from ${currentEnemy.enemyName}`)
                    } else {
                        console.log("Nothing is here either")
                    }
                    if(currentEnemy === weakEnemies[monsterIndex]){
                        weakEnemies.splice(monsterIndex, 1);
                    } else if(currentEnemy === mediumEnemies[monsterIndex]){
                        mediumEnemies.splice(monsterIndex, 1);
                    } else {
                        godEnemies.splice(monsterIndex, 1);
                    }    
                }  
            } else {
                player.hp -= enemyAttacking;
                console.log(`You tried to dodge the attack but ${currentEnemy.enemyName} will you mind and know your movements`)
                console.log(`You took ${enemyAttacking}, you have ${player.hp} health left, go on hero!`)
            }
        }
    }
}   
while(player.hp > 0 || godEnemies.length === 0){
    var getHitOrNot = Math.floor(Math.random() * 2) 
    var healthHeal = Math.floor(Math.random() * 10) + 5;
    var randomGodEnemy = Math.floor(Math.random() * godEnemies.length);
    var randomMediumEnemy = Math.floor(Math.random() * mediumEnemies.length);
    var randomWeakEnemy = Math.floor(Math.random() * weakEnemies.length);
    var levelBoundry = 25
    var options = ["Walk", "Check your inventory", "Check your strength"]
    var index = readlineSync.keyInSelect(options, "What do you want to do, master?");
    if(player.experience >= levelBoundry){
        player.level += 1
        player.attackPoint += 2
        levelBoundry += 30
        console.log(`Level up, your attack points just increase 2, dear master, now you have ${player.attackPoint}`);
    } 
    if(index === 0 ){
        walking();
    } else if (index === 1){
        var openEquips = readlineSync.keyInSelect(equipment, "What weapon do you want to use?")
        if(equipment[openEquips] === "woodsword"){
                changeWeapon()
                player.equipment = "woodsword"
                player.attackPoint += 5
                console.log(`You just equip yourself a Wood Sword now your attackpoint increases to ${player.attackPoint}`)
                equipment.splice(openEquips, 1, "")
        } else if(equipment[openEquips] === "Lance"){
                changeWeapon()  
                player.equipment = "Lance"
                player.attackPoint += 17
                console.log(`You just equip yourself a Lance now your attackpoint increases to ${player.attackPoint}`)
                equipment.splice(openEquips, 1, "");
        } else if(equipment[openEquips] === "Silver Sword"){
                changeWeapon()
                player.equipment = "silversword"
                player.attackPoint += 10
                console.log(`You just equip yourself a Silver Sword now your attackpoint increases to ${player.attackPoint}`)
                equipment.splice(openEquips, 1, "")
        } else if(equipment[openEquips] === "Mighty Fist"){
                changeWeapon()
                player.equipment = "Mighty Fist"
                player.attackPoint += 20
                console.log(`You just equip yourself a Mighty Fist now your attackpoint increases to ${player.attackPoint}`)
                equipment.splice(openEquips, 1, "")
        } else if(equipment[openEquips] === "Dragon Sword"){
                changeWeapon()
                player.equipment = "Dragon Sword"
                player.attackPoint += 51
                console.log(`You just equip yourself a Dragon Sword now your attackpoint increases to ${player.attackPoint}`)
                equipment.splice(openEquips, 1, "")
        } else if(equipment[openEquips] === "Hybird Sword"){
                changeWeapon()
                player.equipment = "Hybird Sword"
                player.attackPoint += 40             
                console.log(`You just equip yourself a Hybrid Sword now your attackpoint increases to ${player.attackPoint}`)
                equipment.splice(openEquips, 1, "")
        } 
        else if(equipment[openEquips] === "Lightning Sword"){
                changeWeapon()
                player.equipment = "Lightning Sword"
                player.attackPoint += 45
                console.log(`You just equip yourself a Lightning Sword now your attackpoint increases to ${player.attackPoint}`)
                equipment.splice(openEquips, 1, "")
        }
        else if(equipment[openEquips] === "White Claws"){
                changeWeapon()
                player.equipment = "White Claws"
                player.attackPoint += 49    
                console.log(`You just equip yourself a White Claws now your attackpoint increases to ${player.attackPoint}`) 
                equipment.splice(openEquips, 1, "")
        }   
    } else if(index === 2){
        console.log(` PlayerName: ${name}\n Health: ${player.hp}\n Attack Point: ${player.attackPoint}\n Equipment: ${player.equipment} \n Level: ${player.level}\n Experience: ${player.experience}`)
    } else if(index === -1){
        console.log("Shame on you COWARD!!")
        break;
    } 
    if(player.hp <= 0){
        if(loop){
            loop.kill()
        }
        if(combat){
            combat.kill()
        }
        lostTheme();
        console.log(`The hero ${player.heroName} just sastified himself to against the GODS and failed miserably but his name will be remembering for his braveness!`)
        return player.hp = 0
    } else if(godEnemies.length === 0){
        if(loop){
            loop.kill()
        }
        if(combat){
            combat.kill();
        }
        winScenarioCase();
        console.log("Congratulation you just reunite the world agian, cheer!!!");
        console.log(`The legendary ${player.heroName} just surpassed the gods and his name will be in the stone of memorization for over decades!`)
        return godEnemies.length = 0;
    }
}

