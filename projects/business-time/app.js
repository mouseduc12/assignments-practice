var nav = document.getElementById('box');
//when you className it will say it is an array so we need to loop through it
var navLi = document.getElementsByClassName("change")
var words = ["BUSINESS GROWS SLOWLY?","NO PROFITS?", "STRESSED OUT?", "INQUIRY NOW!"];
var i = 0;
var count; 

function typingEffect(){
    let word = words[i].split('');
    var looping = function(){
        if(word.length > 0){
            document.getElementById('word').innerHTML += word.shift();
        } else {
            deletingEffect();
            return false;
        };
        count = setTimeout(looping, 300);
    };
    looping();
};

function deletingEffect(){
    var word = words[i].split('');
    var loopDeleting = function(){
        if(word.length > 0){
            word.pop();
            document.getElementById('word').innerHTML = word.join('');
        } else {
            if(words.length > (i+1)){
                i++;
            } else {
                i = 0;
            };
            typingEffect();
            return false;
        };
        count = setTimeout(loopDeleting, 100);
    };
    loopDeleting();
}
typingEffect();

function onScroll(){
    if(window.innerWidth <= 640){
        nav.style.width = "625px";
    } 
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        nav.style.background = "black";
        nav.style.position = "fixed" 
        nav.style.zIndex = 99;
        for(var i = 0; i < navLi.length; i++){
            navLi[i].style.color = "white";
            navLi[i].style.fontWeight = "bold";
        }
    } else {
        nav.style.backgroundColor = "rgba(128,128,128,1)";
        for(var i = 0; i < navLi.length; i++){
            navLi[i].style.color = "aquamarine";
            navLi[i].style.fontWeight = "bold";
        }
    }
}
//add event listener function will trigger first if they hey parenthesis, for example it should be onScroll instead onScroll() 
window.addEventListener("scroll", onScroll); 

var modal = document.getElementById('myModal')
var btn = document.getElementsByClassName('myBtn')
var close = document.getElementsByClassName('close')[0]

/*btn.addEventListener("click", function(){
    for(var i = 0; i < btn.length; i++){
        modal.style.display = "block";
    }
})*/

for(var i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", function(){
        modal.style.display = "flex";
    })
}

close.addEventListener("click", function(){
    modal.style.display = "none";
})

window.addEventListener('click', function(event){
    if(event.target === modal){
        modal.style.display = "none";
    }
    }
)