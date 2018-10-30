var interact = require('readline-sync');
// STRING MANIPULATION EXERCISE!
/*var firstName = interact.question("What is your name?")

if(firstName){
    console.log(`Hello ${firstName.toLocaleUpperCase()}, welcome!`)
    console.log(`Your first name has ${firstName.length} characters, nice!`);
}

var lastName = interact.question("May I have your last name too?")
if(lastName){
    console.log(`Thank you, ${firstName + " " + lastName}`);
}

var game = interact.question("Here is the game we're going to play, give me a string of 20 characters or more and I will slice half for you!")
if(game){
    game.length > 20 ? console.log(game.slice(game.length / 2)) : console.log("It need to be more!")
}

var anotherGame = interact.question("Hey you know what, give me another string more than 20 characters");
var number = interact.question("Let's see, Ah tell me a number and I will slice that string at the numer you wish");

if(anotherGame){
    if(anotherGame.length > 20){
        console.log(`The setence is: ${anotherGame.slice(number)}`)
    } else {
        console.log("I need more information, please");
    }
}*/

// CALCULATOR EXERCISE!
function addCalculator(num1 , num2){
    console.log(`The result is: ${Number(num1) + Number(num2)}`);
}

function subtractCalculator(num1 , num2){
    console.log(`The resule is: ${num1 - num2}`);
}

function divideCalculator(num1 , num2){
    console.log(`The result is: ${num1 / num2}`);
}

function multiplyCalculator(num1 , num2){
    console.log(`The resule is: ${num1 * num2}`);
}

var firstNum = interact.question("Enter your first Number: ");
var secondNum = interact.question("Enter your second Number: ");
var operation = interact.question("What operators Do you want to you? Please type add, sub, mul or div: ")

if(operation === "add"){
    addCalculator(firstNum, secondNum);
} else if(operation === "sub"){
    subtractCalculator(firstNum, secondNum)
} else if(operation === "mul"){
    multiplyCalculator(firstNum, secondNum)
} else if(operation === "div"){
    divideCalculator(firstNum, secondNum)
} else {
    console.log("We don't have that operator!")
}
   
