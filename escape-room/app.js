var readLineSync = require('readline-sync');
var hasWon = false;
var isDead = false;
var trueValue = ["Found it", "Not Found it"];
var foundTheKey = false;
//console.log(trueValue[indexOfFoundKey]);
//console.log(typeof trueValue[indexOfFoundKey]);


while(!hasWon && !isDead){
    var indexOfFoundKey = Math.floor(Math.random() * trueValue.length);
    var options = ["Put hand in the hole", "Find the key", "Open the door"]
    var index = readLineSync.keyInSelect(options, "What would you do?")
    console.log(options[index]);   
    switch(options[index]){
        case "Open the door":
            if(foundTheKey === true){
                console.log("You WON! Woohoo")
                return hasWon = true;
            } else {
                console.log("Go find the key first")
                break;
            }

        case "Find the key":
            console.log(trueValue[indexOfFoundKey]);
            if(trueValue[indexOfFoundKey] === "Found it"){
                console.log("You found it, now open the door and RUN!!!");
                foundTheKey = true;
                break;
            } else {
                console.log("You digged for over an hour and you found nothing, Sad!")
                break;
            }

        case "Put hand in the hole":
            console.log("The hole has the button that triggers the bomb, now you're dead!")   
            return isDead = true;
            
        default:
            console.log("Are you surrendering? Shame on you!")
            return isDead = true;
        }
    
}