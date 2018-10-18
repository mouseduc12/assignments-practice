if(5 > 3){
    console.log(5)
} 

var cat = "I am cat";
if(cat.length >= 3){
    console.log(true);
}

if("cat" === "dog"){
    console.log(true);
} else {
    console.log(false);
}

var person = {
    name: "Bobby",
    age: 12
}

if(person.name[0] === "B"){
    console.log(person.name + " is allowed to go to the movie");
} 

if(person.name[0] === "B" && person.age >= 18){
    console.log(person.name + " is allowed to go to the movie");
}


if(1 === 1){
    console.log("strict")
} else if(1 == "1"){
    console.log("loose")
} else {
    console.log("not equal at all")
}

if(1 <= 2 && 2 === 4){
    console.log("YES");
}

console.log(typeof "dog" === "string" ? true : false);
console.log(typeof "true" === "boolean" ? true : false);

console.log("s" > 13 ? true : false);
console.log("a" < 15 ? true : false);

var myNum = 10
console.log(myNum % 2 === 0 ? "even" : "odd")
