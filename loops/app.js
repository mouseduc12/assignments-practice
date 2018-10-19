/*for(var i = 0; i <= 100; i++){
    if(i % 2 === 0){
        console.log('even');
    } else {
        console.log('odd');
    }
}

var eventsAtWork = ["work", "pretend to work", "party", "work", "meeting", "party", "daily grind", "work", "party"]
for(let i = 0; i < eventsAtWork.length; i++){
    if(eventsAtWork[i] === "party"){
        console.log("hooray");
    }
}

var booleans = [true, true, false, true, false, false, false]
let count = 0
for(let i = 0; i < booleans.length; i++){
    if(booleans[i] === true){
        count += 1
    }
}
console.log(count);

var users = [
    {
      name: "Sophie",
      age: 12
    },
    {
      name: "Larry",
      age: 32
    },
    {
      name: "Cathy",
      age: 40
    }
  ]

for(let i = 0; i < users.length; i++){
    users[i].isAdmin = true;
}

console.log(users)*/

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
let count = 0
for(let each of officeItems){
    if(each === "computer"){
        count += 1;
    }
}
console.log(count);
/*
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 

for(let each of peopleWhoWantToSeeMadMaxFuryRoad){
    if(each.age >= 18){
        if(each.gender === "male"){
            console.log(`${each.name} is old enough. HE'S good to see Mad Max Fury Road`)      
        } else {
            console.log(`${each.name} is old enough. SHE'S good to see Mad Max Fury Road`)
        }
    } else {
        console.log(each.gender === "male" ? `${each.name} is not old enough to see Mad Max Fury Road, don't let HIM in.` : `${each.name} is not old enough to see Mad Max Fury Road, don't let HER in.` )
    }
}

function toggleOnOrOFf(arr){
    let count = 0 
    for(let i = 0; i < arr.length; i++){
        count += arr[i]
    }
     return count % 2 === 0 ? "the light is off" : "the light is on";
}
var arr = [1,2,3,4,5,5]
console.log(toggleOnOrOFf(arr));
*/
/* 1 
for(let i = 0; i < 10; i++){
    console.log(i);
}

for(let i = 9; i > 0; i--){
    console.log(i);
}

var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
for(let each of fruit){
    console.log(each);
}
*/
/* 2
let newArr = [];
for(let i = 0; i < 10; i++){
    newArr.push(i);
}
console.log(newArr);

let decArr = []
for(let i = 10; i > 0; i--){
    decArr.push(i)
}
console.log(decArr);

var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
var newFruitArr = [];
for(let eachFruit of fruit){
    newFruitArr.push(eachFruit);
}
console.log(newFruitArr);
*/
/*
var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

 for(let i = 0; i < peopleArray.length; i++){
     console.log(peopleArray[i].name);
 } 
 
 let nameArr = [];
 let occupationArr = [];
 for(let each of peopleArray){
    nameArr.push(each.name)
    occupationArr.push(each.occupation);
 }
console.log(nameArr);
console.log(occupationArr);
*/
let newArr = [];
for(let i = 0; i < 3; i++){
    newArr[i] = []
    for(let y = 0; y < 3; y++){
        newArr[i].push(0);
    }
}
console.log(newArr)

let storeArr = []
for(let i = 0; i < 3; i++){
    storeArr[i] = [];
    for(let y = 0; y < 3; y++){
        storeArr[i].push(y);
    }
}
console.log(storeArr);

let secondStoreArr = []
for(let i = 0; i < 3; i++){
    secondStoreArr[i] = [];
    for(let y = 0; y < 3; y++){
        secondStoreArr[i].push(i)
    }
}
console.log(secondStoreArr);

