//Reference type:
// var arr1 = []
// var arr2 = []
// //return false because we create 2 containers of arr so when ever you compare it, it will return false
// console.log(arr1 === arr2)


// var obj1 = {value: 15}
// //pointer to obj1 
// //obj2 is obj1
// var obj2 = obj1
// //created new obj
// var obj3 = {value: 15}

// //compare container from obj1 === obj3 which is return false because they have their own container;
// console.log(obj1 === obj3);

//Context and scope:

// const person = {
//   name: "boom",
//   age: 15,
//   callOut: function(){
//     console.log(this.name)
//   }
// }

// //this usually reference to window but if it's in scope of object or class or constructor, it will reference it instead of window or document.

// console.log(person.callOut());
//Instantiation

// class Player  {
//   constructor(name, age){
//     this.name = name;
//     this.age = age;
//   }
//   callOut(){
//     console.log(this.name, this.age)
//   }
// }

//Need to look up:

// const player1 = new Player("Songoku", 16)
// player1.callOut();
// const arr = []
//object because arr is a contructor that built in and have all the proptotype which contructor is an object
// console.log(typeof arr)
//same thing as array
// console.log(typeof null)
//same as array contructor;
// var hello = new String("hello")
// console.log(typeof hello)
