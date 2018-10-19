var container = [
    person = {
        name: "John",
        age: 23,
        isBlackHair: true,
        sayHi: function(){
            console.log(`Hi my name is ${this.name}`)
        }
    },

    animal = {
        name: "Dog",
        favorite: "Barking",
        isSheperd: false,
        barking: function(){
            console.log("Wo wo wo");
        }
    },

    tree = {
        name: undefined,
        age: 20,
        hasBranch: true,
        synthesis: function(){
            console.log("Wo hoo give me that sun shine")
        }
    },

    myBro = {
        name: "Tran",
        ethnicity: "Asian-Amercan",
        isSmart: true,
        playGame: function(game){
            console.log("I love this  " + game)
        }
    },

    bedLight = {
        name: "bedlight",
        isOn: true,
        height: 0.92,
        isToggle: function(onOrOff){
            console.log(onOrOff === "on" ? "It's on" : "It's off, sleep time")
        }
    },

    shoes = {
        name: {
            brand: ["Nike", "Addidas", "Converse"],
            call: function(){
                return this.overLook.takeNote();
            },
            overLook: {
                size: 32,
                color: "red",
                insideColor: "white",
                takeNote: function(){
                    console.log("Empty Note");
                }
            }
        },
        bigBrand: true,
        slogan: "JUST DO IT",
        motivate: () => {console.log("JUST DO IT, DO ITTTTT!!!!!")}
    },

    mybackPack = {
        name: undefined,
        brand: "Nine West",
        price: 59.99,
        carry: (weight) =>  {return weight > 100 ? "It's way too heavy" : "It's good enough"}
    },

    myWindow = {
        seeThrough : true,
        isEasyToBreak : false,
        open: () => {return "I want to break free" + this.seeThrough}
    },

    roomMate = {
        name: "Tyler",
        age: 24,
        isSmart: true,
        yoga: () =>{return this.name + " love to do YOGA"}
    },

    jobProspecting = {
        percentage: 50,
        workHard: true,
        netWork: true,
        teach: function(){
             function study(){
                console.log("You have to study harder");
            }   
           return study()
        }

    }
]
console.log(jobProspecting.teach());
console.log(container[jobProspecting.teach()]);
console.log(container[shoes.name.call()]);