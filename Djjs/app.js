var firstBox = document.getElementById("f-box");
var secondBox = document.getElementById("second-box")
var thirdBox = document.getElementById("third-box");
var fourthBox = document.getElementById("fourth-box");
var fifthBox = document.getElementById("fifth-box")
var sixthBox = document.getElementById("s-box");

var firstMusic = document.getElementById("f-sound")

window.addEventListener("keydown", function(event){
    console.log(event);
    var unicode = event.which || event.keyCode; 
    if(unicode === 82){
            firstMusic.play();
            firstBox.style.backgroundImage = "linear-gradient(to right, rgba(255,0,0,0.3), rgb(255,0,0))";
            firstBox.style.boxShadow = "10px 5px 5px violet"; 
            firstBox.style.borderRadius = "5%";
            setTimeout(function(){
                firstBox.style.background = "rgba(0, 0, 0, 0.2)";
                firstBox.style.boxShadow = "10px 5px 5px black";
            }, 1000)
    } else if(unicode === 84){
            secondBox.style.backgroundImage = "linear-gradient(to right, rgba(176,224,230,0.3), rgb(176,224,230))";
            secondBox.style.boxShadow = "10px 5px 5px lime"; 
            secondBox.style.borderRadius = "5%";
            setTimeout(function(){
                secondBox.style.background = "rgba(0, 0, 0, 0.2)";
                secondBox.style.boxShadow = "10px 5px 5px black";
            }, 1000)
    } else if(unicode === 89){ 
            thirdBox.style.backgroundImage = "linear-gradient(to right, rgba(123,104,238, 0.3), rgb(123,104,238))";
            thirdBox.style.boxShadow = "10px 5px 5px salmon"; 
            thirdBox.style.borderRadius = "5%";
            setTimeout(function(){
                thirdBox.style.background = "rgba(0, 0, 0, 0.2)";
                thirdBox.style.boxShadow = "10px 5px 5px black";
            }, 1000)
    } else if(unicode === 85){ 
            fourthBox.style.backgroundImage = "linear-gradient(to right, rgba(65,105,225,0.3), rgb(65,105,225))";
            fourthBox.style.boxShadow = "10px 5px 5px aqua"; 
            secondBox.style.borderRadius = "5%";
            setTimeout(function(){
                fourthBox.style.background = "rgba(0, 0, 0, 0.2)";
                fourthBox.style.boxShadow = "10px 5px 5px black";
            }, 1000)
    } else if(unicode === 73){ 
            fifthBox.style.backgroundImage = "linear-gradient(to right, rgba(255,255,102,0.3), rgb(255,255,102))";
            fifthBox.style.boxShadow = "10px 5px 5px fuchsia"; 
            fifthBox.style.borderRadius = "5%";
            setTimeout(function(){
                fifthBox.style.background = "rgba(0, 0, 0, 0.2)";
                fifthBox.style.boxShadow = "10px 5px 5px black";
            }, 1000)
    } else if(unicode === 79){ 
            sixthBox.style.backgroundImage = "linear-gradient(to right, rgba(173,255,47,0.3), rgb(173,255,47))";
            sixthBox.style.boxShadow = "10px 5px 5px firebrick"; 
            sixthBox.style.borderRadius = "5%";
            setTimeout(function(){
                sixthBox.style.background = "rgba(0, 0, 0, 0.2)";
                sixthBox.style.boxShadow = "10px 5px 5px black";
            }, 1000)
    }
  }
)


