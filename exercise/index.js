var shopper = {
    name: "Dane",
    age: 24,
    blackHair: true,
    help: function(anything){
        console.log(`Sure, I can help ${this.name} with ${anything} `)    
    },
    groceryCart: ["tomatoes", "shampoo", "petfood"]
}


console.log(shopper.help(shopper.groceryCart[1]));
console.log(shopper.groceryCart[0]);
