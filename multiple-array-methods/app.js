var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    },
    {
        firstName: "John",
        lastName: "Nathan",
        age: 29
    },
    {
        firstName: "Tyler",
        lastName: "Nathan",
        age: 28
    }
]

function sortedOfAge(arr){
    var output = arr.filter(each => each.age > 18)
    return output
}
//console.log(sortedOfAge(peopleArray));

function sortedByLastName(arr){
    arr.sort((a,b) => (a.lastName > b.lastName) ? 1 : (b.lastName > a.lastName) ? -1 : 0)
    return arr;
}
//console.log(sortedByLastName(peopleArray));
/*
var liBlock = document.getElementById("container")
function makeBlock(arr){
    for(let i = 0; i < arr.length; i++){
        liBlock.innerHTML += `<li>
        ${arr[i].firstName} ${arr[i].lastName} is ${arr[i].age}
        </li>`
    }
}

makeBlock(peopleArray);
*/

function filterAAndYOut(arr){
    var filterA = arr.filter(each => !each.lastName.endsWith("a"));
    var filterY = filterA.filter(each => !each.lastName.endsWith("y"))
    var storeA = arr.filter(each => each.lastName.endsWith("a"))
    var storeY = arr.filter(each => each.lastName.endsWith("y"))
    var newArr =[]
    newArr.push(storeA, storeY);
    console.log(newArr)
}
//console.log(filterAAndYOut(peopleArray));

function removeSecondIndividual(arr){
    for(let i = 0; i < arr.length; i++){
        if(i === 1){
            arr.splice(i, 1)
        }
    }
    return arr
}
//console.log(removeSecondIndividual(peopleArray))

function reverseOrder(arr){
    arr.reverse();
    return arr
}
console.log(reverseOrder(peopleArray));