var root = document.getElementById("root")

var buttonPressed = document.getElementById("button")
buttonPressed.addEventListener("click", function(){ 
    var userInput = document.getElementById("input").value
    for(var i = 0; i < userInput; i++){ 
        var box = document.createElement("div")
        box.id = "box" + Math.floor(Math.random()*10000000)
        box.className = "box"
        root.appendChild(box)
        box.addEventListener("mouseover", function(e){ 
            mouseHover(e.target.id)
        })
        box.addEventListener("mousedown", function(e){ 
            mouseHold(e.target.id)
        })
        box.addEventListener("mouseup", function(e){ 
            mouseRelease(e.target.id)

        })
        box.addEventListener("dblclick", function(e){ 
            dbClick(e.target.id)
        })
        document.addEventListener("wheel", function(e){ 
            mouseScroll()
        })
        
    }
   
  
  
})
function mouseScroll(boxId){ 
    boxId = document.querySelectorAll("div")
    var boxToChange = boxId[Math.floor(Math.random() * boxId.length)] 
    console.log(boxToChange) 
    boxToChange.style.backgroundColor = "orange"

}

function dbClick(boxId){ 
    var boxToChange = document.getElementById(boxId)
    boxToChange.style.backgroundColor = "green"
}


function mouseRelease(boxId){ 
    var boxToChange = document.getElementById(boxId)
    boxToChange.style.backgroundColor = "yellow"
}
function mouseHold(boxId){ 
    var boxToChange = document.getElementById(boxId)
    boxToChange.style.backgroundColor = "red"
    console.log("fired mousedown")
    
}

function mouseHover(boxId){ 
    var boxToChange = document.getElementById(boxId)
    console.log("fired")
    boxToChange.style.backgroundColor = "blue"
}