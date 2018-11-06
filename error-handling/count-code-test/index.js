function countCode(string){
    if(typeof string !== "string"){
        return "Please give me a string!"
    }
    var splitStr = string.split('');
    let count = 0;
    for(let i = 0; i < splitStr.length; i++){
      if(splitStr[i] === "c" && splitStr[i+1] === "o" && splitStr[i+3] === "e"|| (splitStr[i].toUpperCase() && splitStr[i+1] === "o" && splitStr[i+3] === "e")){
        count +=1;
      }
    }
    return count;
}

module.exports = countCode