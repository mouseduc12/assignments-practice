function sum(a, b){
    return a + b;
}

function largestNumber(a, b, c){
    var smallNumber = 0
    a > smallNumber ? smallNumber = a : false;
    b > smallNumber ? smallNumber = b : false;
    c > smallNumber ? smallNumber = c : false;
    return smallNumber;
}

function oddOrEven(a){
    if(typeof a === "string"){
        return "Please enter a number"
    }
    return a % 2 === 0 ? "Even" : "Odd";
}

function doubleStr(dString){
    if(typeof dString !== 'string'){
        return "Please enter a string to play"
    }
    return dString.length <= 20 ? dString + dString : dString.slice(0, dString.length/2) 
}

function fibonacci(n){
    if(n <= 1) return 1
    return fibonacci(n-1) + fibonacci(n-2)
}

function quadraticEquation(a, b, c){
    var newArr = []
    var firstX = -b + Math.sqrt(Math.pow(b, 2) - (4*a*c)) / (2*a)
    var secondtX = -b - Math.sqrt(Math.pow(b, 2) - (4*a*c)) /(2*a)
    newArr.push(firstX, secondtX);
    return newArr
}


function frequentLetter(str){
    var splitStr = str.split('')
    var biggest = 0
    var frequentChar = ""
    let containerObj = {}
    for(let char of splitStr){
        containerObj[char] = (containerObj[char] || 0) + 1
    }
    for(let each in containerObj){
        if(biggest < containerObj[each]){
            biggest = containerObj[each];
            frequentChar = each
        }
    }
    return frequentChar;
}

let removeA = function(str) {
    let splitStr = str.split('');
    let output = splitStr.filter(char => char !== "a")
    return output.join('');
  }

 //String Method.
 function countCharA(words){
    let count = 0
    let newArr = words.split('');
    for(let i = 0; i < newArr.length; i++){
        if(words[i].toLowerCase() === "a"){
            count += 1;
        }
    }
    return count
 }
 
 function findWordIndex(words, word){
    return words.indexOf(word)
 }
 
 function findIndexFromLast(words, word){
     return words.lastIndexOf(word);
 }

 var newStr = "Hello World, answer me"
 //console.log(findIndexFromLast(newStr, "me"));

 function theSubStringValue(words, start){
    return words.substring(start)
 }
 var yammy = "This one is so Yamyy, umm"
 //console.log(theSubStringValue(yammy, 4))

function sliceThePart(words, number){
    return words.slice(number).concat("UMMMMMM").toUpperCase()
}
//console.log(sliceThePart(yammy, 4))

function returnUpperCase(words){
    return words.match(/[A-Z]/)
}

console.log(returnUpperCase(yammy));

function replaceWord(words){
    return words.replace(/This/, "YOU'RE ARE BIG NOW")
}
console.log(replaceWord(yammy,));