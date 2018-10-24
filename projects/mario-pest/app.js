var addMoney = document.add;
addMoney.addEventListener('submit', function(event){
    event.preventDefault();
    var goombaValue = 5;
    var bobombValue = 7;
    var cheepcheepsValue = 11;
    var goomba = addMoney.Goomba.value;
    var bobomb = addMoney.Bobomb.value;
    var cheepcheeps = addMoney.Cheepcheeps.value;
    var total = (goombaValue * goomba) + (bobombValue * bobomb) + (cheepcheepsValue * cheepcheeps)
    document.getElementById('amount').innerHTML = `Here is the amount you need to pay "DEAR PRINCESSS" - $${total}`
})

var firstButton = document.getElementById('on-click');
firstButton.addEventListener('click', function(){
    document.getElementById('goomba-talk').innerHTML = `I will eat you GRUH GRUH!`
})

var secondButton = document.getElementById('second-on-click');
secondButton.addEventListener('click', function(){
    document.getElementById('bobomb-talk').innerHTML = `shh shh shh shh shh...BOOM!`
})

var thirdButton = document.getElementById('third-on-click');
thirdButton.addEventListener('click', function(){
    document.getElementById('cheep-talk').innerHTML = `I belive I can fly....`
})