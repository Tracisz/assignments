const form = document.buttonclick 
let clickCount = localStorage.getItem("clickcount")
if(clickCount <= 0){
    clickCount++
    localStorage.setItem("clickcount", clickCount)
    } else { 
        let displayClicks = document.getElementById("counter")
        form.addEventListener("submit", function(e){ 
        e.preventDefault()
        localStorage.setItem("clickcount", clickCount)
        clickCount = localStorage.getItem("clickcount")
        clickCount++
        displayClicks.textContent = clickCount
        console.log(clickCount)
    })
}

        
    

