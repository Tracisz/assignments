function addition(num1, num2) { 
    var additionSum = num1 + num2
    return additionSum
}

function subtraction(num1, num2){ 
    var subtractionDifference = num1 - num2 
    return subtractionDifference
}

function multiplication(num1, num2){ 
    var multiplcationSum = num1 * num2 
    return multiplcationSum
}

var buttonPressed = document.getElementById("buttonpressaddition")
buttonPressed.addEventListener("click", function(e){ 
    e.preventDefault()
    var input1 = document.getElementById('addition1').value
    var input2 = document.getElementById('addition2').value
    var newElem = document.createElement('div')
    newElem.textContent = "the sum of your two numbers was: " + addition(Number(input1), Number(input2))
    var addEle = document.getElementById('addition')
    addEle.appendChild(newElem)
  
})

var subtractionButton = document.getElementById('buttonpresssubtraction')
subtractionButton.addEventListener("click", function(e){ 
    e.preventDefault()
    var input1 = document.getElementById('subtraction1').value
    var input2 = document.getElementById('subtraction2').value
    var newElem = document.createElement('div')
    newElem.textContent = "the difference of your two numbers was: " + subtraction(Number(input1), Number(input2))
    var addEle = document.getElementById('subtraction')
    addEle.appendChild(newElem)
    
})

var multiplicationButton = document.getElementById('multiplicationbutton')
multiplicationButton.addEventListener('click', function(e){ 
    e.preventDefault()
    var input1 = document.getElementById('multiplication1').value
    var input2 = document.getElementById('multiplication2').value
   var newElem = document.createElement('div')
   newElem.textContent = "the product of your two numbers was: " + multiplication(Number(input1), Number(input2))
   var addEle = document.getElementById('multiplication')
   addEle.appendChild(newElem)
   
} )