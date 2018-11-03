/*function countCode(string) {  
  var splitStr = string.split('');
  let count = 0;
  var newArr = [];
  for(let i = 0; i < splitStr.length; i++){
    if(splitStr[i] === "c" && splitStr[i+1] === "o" && splitStr[i+3] === "e"|| (splitStr[i].toUpperCase() && splitStr[i+1] === "o" && splitStr[i+3] === "e")){
      count +=1;
    }
  }
  return count;
}*/

//Output: 
//countCode("aaacodebbb")// returns 1
 //countCode("codexxcode") returns 2
//countCode("cozexxcope") //returns 2
//countCode("Tozexxcope")
