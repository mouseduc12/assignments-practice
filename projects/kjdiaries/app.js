var mySlideImg = document.getElementsByClassName("slides-img");
console.log(mySlideImg)

let y = 0
function slideImg(){
    if(y >= mySlideImg.length){
        y = 0;
    }
    for(let i = 0; i < mySlideImg.length; i++){
        if(i === 3){
            y++;
        }
        mySlideImg[i].style.display = "none";
    }
    mySlideImg[y-1].style.display = "flex";
}

setInterval(slideImg, 15000);