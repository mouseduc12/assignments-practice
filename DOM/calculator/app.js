var addCalculator = document.add;
addCalculator.addEventListener('submit', function(event){
    event.preventDefault();
    var firstNumber = addCalculator.firstNumber.value;
    var secondNumber = addCalculator.lastNumber.value;
    var output = parseInt(firstNumber) + parseInt(secondNumber);
    document.getElementById('sum').innerHTML = `Total: ${output}`;   
})


var substractCalculator = document.subtract;
substractCalculator.addEventListener('submit', function(event){
    event.preventDefault();
    var firstNumber = substractCalculator.firstNumber.value;
    var secondNumber = substractCalculator.lastNumber.value;
    var output = firstNumber - secondNumber;
    document.getElementById('less').innerHTML = `Total: ${output}`;
})


var multiplyCalculator = document.multiply;
multiplyCalculator.addEventListener('submit', function(event){
    event.preventDefault();
    var firstNumber = multiplyCalculator.firstNumber.value;
    var secondNumber = multiplyCalculator.lastNumber.value;
    var output = firstNumber * secondNumber;
    document.getElementById('output').innerHTML = `Total: ${output}`;
})