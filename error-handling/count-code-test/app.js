 function sum(x , y){
    if(typeof x !== "number" || typeof y !== "number"){
        throw new Error("Please enter number type")
    }
    return x + y
}

try{
    console.log(sum("1", "2"));
}

catch(error){
    console.log(error);
}

var user = {username: "sam", password: "123abc"};
function login(username, password){
  if(username !== user.username || password !== user.password){
      throw new Error("It did not match the record");
  } else {
      console.log("Login successful!");
  }
}
try{
    login("sam", "123abc");
    login("Sam", "123abc")
} catch(error){
    console.log(error);
}