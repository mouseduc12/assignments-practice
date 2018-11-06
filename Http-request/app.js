//Ajax 
    //Asynchronous Javascript ad XML 
        //It is the ability for a webpage to reaload a specific piece.
        // without having to refresh the entire page.

var xhr = new XMLHttpRequest()

// 4 states/steps for an http request 
    //1: the request is sent
    //4: The response came back 
 
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        var jasonData = xhr.responseText;
        var data = JSON.parse(jasonData);
        console.log(data);
        var pokemonData = data["objects"][0]["pokemon"].map(each => each);
        createBlock(pokemonData);
    }
}   
    

xhr.open("GET", "https://vschool-cors.herokuapp.com/?url=http://api.vschool.io/pokemon", true);
xhr.send();

var block = document.getElementById("block")
function createBlock(data){
    for(let i = 0; i < 20; i++){
        block.innerHTML += `
        <div class="blue">
            <h1>${data[i].name}</h1>
        </div>
        `
    }
}
