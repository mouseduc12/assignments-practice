//TDD Testing driven development: How a program should function

//BDD Behavior Driven Development: Yow with a user interact with my program

function sum(a,b){
    if(typeof a !== "number" || typeof b !== "number"){
        return "Please provide numbers as inputs"
    } 
    return a + b
}
module.exports = sum 