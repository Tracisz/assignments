const todoForm = document.todoform
const completed = { 
    completed: true
}
function getData() { 
axios.get("https://api.vschool.io/travis_racisz/todo")
    .then(res => listToDos(res.data))
    .catch(err => console.log(err))
} 

getData()

function listToDos(data) { 
    for(let i = 0; i < data.length; i++){ 
        let parentDiv = document.createElement('div')
        let h1 = document.createElement("h1")
        let checkBox = document.createElement("input")
        let desc = document.createElement("h2")
        let img = document.createElement("img")
        let price = document.createElement('h3')
        let xButton = document.createElement('button')

        checkBox.setAttribute("type","checkbox")
        parentDiv.setAttribute("id", "parentDiv")
        xButton.textContent = 'X'
        price.textContent = data[i].price
        h1.textContent = data[i].title
        desc.textContent = data[i].description
        img.src = data[i].imgUrl
        checkBox.addEventListener("click", function(e){ 
            if(checkBox.checked ){ 
                axios.put("https://api.vschool.io/travis_racisz/todo/" + data[i]._id, completed)
                    .then(r => console.log(r))
                    .catch(err => console.log(err))

                console.log("fired")
               
                h1.setAttribute("style", "text-decoration: line-through")
        
            }
        })
       

        xButton.addEventListener("click", function(e){ 
            axios.delete("https://api.vschool.io/travis_racisz/todo/" + data[i]._id)
                .then(r => console.log(r))
                .catch(err => console.log(err))
            parentDiv.remove()
        })


       
        document.getElementById("to-do-list").appendChild(parentDiv)
        parentDiv.appendChild(h1)
        parentDiv.appendChild(desc)
        parentDiv.appendChild(price)
        parentDiv.appendChild(img)
        parentDiv.appendChild(checkBox)
        parentDiv.appendChild(xButton)
        if(data[i].completed){ 
            h1.setAttribute("style", "text-decoration: line-through")
        }
    }
  
}



todoForm.addEventListener("submit", function(e){ 
        e.preventDefault() 
        clearList()
    
        const newToDO = { 
            title: todoForm.title.value,
            description: todoForm.description.value,
            price: todoForm.price.value,
            imgUrl: todoForm.img.value 
        }
        postData(newToDO)
       
    })

   
    
    function postData(newToDO) { 
        console.log(newToDO)
        axios.post("https://api.vschool.io/travis_racisz/todo", newToDO)
            .then(res => getData(res))
            .catch(err => console.log(err))
    }

    function clearList(){ 
        let toDoList = document.getElementById("to-do-list")
        while(toDoList.firstChild){ 
            toDoList.removeChild(toDoList.firstChild)
        }
    }