// //console.dir(document)
// //console.dir(window) The whole browser 

// //grab that input
// var candyInput = document.getElementById('candyInput')
// // value => see what the user typed
// var candyText = candyInput.value
// console.log(candyText)

// //Grab the candyList 'ul'
// var candyList = document.getElementById('candyList')
// //Create new elenment 

/*var candyBars = document.getElementById('candy-bar');
candyBars.appendChild(newCandy);

var newCandy = document.createElement('li')
var newNode = document.createTextNode("Almond Hersey")
newCandy.appendChild(newNode);

var anotherNewCandy = document.createElement('li');
var anotherNewNode = document.createTextNode('Skittles')
anotherNewCandy.appendChild(anotherNewNode);
candyBars.appendChild(anotherNewCandy)
*/

// DOM -> DOCUMENT OBJECT MODEL
// console.dir(document)

// // Window ->
// console.dir(window)

// Grab that input
// var candyInput = document.getElementById('candyInput')
    // .value => see what the user typed

// // Grab the candyList 'ul'
// var candyList = document.getElementById('candyList')

// // Create the new HTML element 
// var newCandyItem = document.createElement('li')

// // Add Text to an element
//     // .textContent  &  .innerHTML
// newCandyItem.textContent = "Oreos"

// // Tell list to add a new child 'newCandyItem'
// candyList.appendChild(newCandyItem)
// // candyList.innerHTML = 'as<h1> Hello World </h1>'



// OTHER DOM SELECTORS
    // getElementById(id)
    // getElementsByClassName(className)
    // getElementsByTagName('div')


// First way of writing event listener
// document.getElementById('addCandy').addEventListener('click', function (){
//     var input = document.getElementById('candyInput').value
//     document.getElementById('candyList').innerHTML += `<li>${input}</li>`
// })

// Second way of writing event listener
// document.getElementById('addCandy').click(function (){
//     var input = document.getElementById('candyInput').value
//     document.getElementById('candyList').innerHTML += `<li>${input}</li>`
// })

// window.addEventListener('scroll', function () {
//     document.getElementById('box').style.backgroundColor = 'red'
// })

// document.getElementById('box').onmouseover(function(){
//     document.getElementById('box').style.backgroundColor = "blue";
// })

document.getElementById('box').addEventListener('mouseover', function(){
    document.getElementById('box').style.backgroundColor = "blue";
})

document.getElementById('box').addEventListener('mousedown', function(){
    document.getElementById('box').style.backgroundColor = "red";
})

document.getElementById('box').addEventListener('mouseleave',function(){
    document.getElementById('box').style.backgroundColor = "yellow";
})

document.getElementById('box').addEventListener('dblclick', function(){
    document.getElementById('box').style.backgroundColor = "green";
})

window.addEventListener('scroll', function(){
    document.getElementById('box').style.backgroundColor = "orange";
})

document.addEventListener("keydown", function(event){
    event.preventDefault();
    var keyColor = event.which
    if(keyColor === 82){
        document.getElementById('box').style.backgroundColor = "red"; 
    } else if(keyColor === 66){
        document.getElementById('box').style.backgroundColor = "black";
    } else if(keyColor === 71){
        document.getElementById('box').style.backgroundColor = "gray";
    }
});
