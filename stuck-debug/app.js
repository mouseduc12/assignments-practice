var ask = require("readline-sync");

var options = ['pick flowers', 'shoot guns', 'fight bears'];
//var option = ask.keyInSelect(options, "What would you like to do today?: ");

while(options[option] !== 'fight bears'){ 
  var option = ask.keyInSelect(options, "What would you like to do today?: ");

  if(options[option] === 'pick flowers'){
    console.log("You pick some flowers. You make a bouquet.");
  } else if (options[option] === "shoot guns"){
    console.log("You shoot guns.");
  } else if(options[option] === "fight bears"){
    console.log("You fought a bear and got beat up!");
    options[option] = "fight bears";
  } else {
    console.log("Surender?")
    options[option] = "fight bears";
  }
}


