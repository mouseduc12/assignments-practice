var travelForm = document.travelForm;
travelForm.addEventListener('submit', function(event){
    event.preventDefault();
    var firstName = travelForm.firstName.value;
    var lastName = travelForm.lastName.value;

    var age = travelForm.age.value;

    var dietaryRestrictions = []
    var checkedBoxes = document.querySelectorAll("input[name = dietaryRestrictions]:checked")
    for(var i = 0; i < checkedBoxes.length; i++){
        dietaryRestrictions.push(checkedBoxes[i].value);
    }
    alert(` FullName: ${firstName + " " + lastName}\n Age: ${age}\n Where to go: ${travelForm.location.value}\n Gender: ${travelForm.gender.value}\n Dietary Restriction: ${dietaryRestrictions}`)
})