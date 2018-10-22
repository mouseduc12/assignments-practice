var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

const lettuce = vegetables.pop();
console.log(lettuce);

const banana = fruit.shift();
console.log(banana)

console.log(fruit.indexOf("orange"));

console.log(fruit.push(1));

console.log(vegetables.length);

vegetables.push(1);

let food = ["noodle", "banana"]

const twoArr = food.concat(fruit);

twoArr.splice(4, 2)
console.log(twoArr);

twoArr.reverse()
console.log(twoArr.join(','));
