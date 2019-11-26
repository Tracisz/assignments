

function enemiesCrushed(num1,num2,num3){ 
    
    var sum = (num1 * 5) + (num2 * 7) + (num3 * 11) 
    
    return sum
}

var count = 0
var button = document.getElementById("button")
button.addEventListener("click", function(e){ 
    var goombaInput = document.getElementById("gommbasquashed").value 
    var bobombsInput = document.getElementById("bobombscrushed").value
    var cheepInput = document.getElementById("cheepscrushed").value
    var newEle = document.getElementById('childTotal')
    newEle.textContent = "The number of coins that mario has is: " + enemiesCrushed(Number(goombaInput), Number(bobombsInput), Number(cheepInput))
//     totalEle = document.getElementById("total")
//     if(count >= 1){ 
//         totalEle.removeChild(totalEle.childNodes[0])
//         count = 0;
//     } else { 
//         totalEle.appendChild(newEle)
//         count++
//     }
// })
})
