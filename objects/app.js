/*var container = [
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
console.console.log(container[shoes.name.call()]);
log(jobProspecting.teach());
console.log(container[jobProspecting.teach()]); */

var asiaCountries = {
    location: "Southern East",
    isWorkingHard: true,
    isShort: true,
    study: () => {return console.log("I've got to study harder")},
    country:[
    {
        name: "China",
        population: "1,5 billion",
        economicRank: 2,
        languages: { 
            mainLanguge: "Mandarin",
            secondLanguage: "Cantonesse"
             }
        },
     {
        name: "VietNam",
        population: "94 million",
        economicRank: 197,
        languages: "Vietnamese"
        },
      {
        name: "Laos",
        population: "32 million",
        economicRank: 201,
        evironmentRank: 92,
        languages: "Arabic"
        }, 
      {
        name: "Indonesia",
        population: "120 million",
        economicRank: 74,
        evironmentRank: 10,
        languages: {
            mainLanguage: "English",
            secondLanguage: "Native languges"
        }
         },
       {
        name: "Singapore",
        population: "64 million",
        economicRank: 13,
        evironmentRank: 1,
        languages: "English"
         },        
    ]    
}

console.log(asiaCountries.country[3].languages['mainLanguage'])
