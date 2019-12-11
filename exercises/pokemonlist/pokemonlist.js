const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()


xhr.onreadystatechange = function() { 
    if(xhr.readyState === 4 && xhr.status === 200){ 
        const JSONData = xhr.responseText 
        let data = JSON.parse(JSONData)
        console.log(data.objects[0].pokemon[1].name)
        showData(data)
    }
}

function showData(arr){
    for(let i = 0; i < arr.objects[0].pokemon.length; i++){
        let pokemonNames = document.createElement('p')
        pokemonNames.textContent = arr.objects[0].pokemon[i].name
        document.body.appendChild(pokemonNames)
    }
}