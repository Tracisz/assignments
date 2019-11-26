var forms = document["forms"]

forms.addEventListener("submit", function(e){ 
    e.preventDefault()
    var firstName = forms["firstname"].value
    var lastName = forms["lastname"].value
    var age = forms["age"].value 
    var gender = forms["gender"].value
    var location = forms["location"].value
    var dietRestriction = forms["dietrestriction"]
    var newArr = [] 
    for (i = 0; i < dietRestriction.length; i++){ 
        if (dietRestriction[i].checked){ 
            newArr.push(dietRestriction[i].value)
            console.dir(newArr)
        }
    }
    alert("First name: "  + firstName + "\r\n" + " Last name: " + lastName + "\r\n" +" Age: " + age + "\r\n" +" Gender: " + gender + "\r\n" +" Destination: " + location + "\r\n" +" Dietary restriction: " + newArr.join(", "))

})