var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]
function sortedArr(arr){ 
    let sorted = arr.sort(function(a , b){ 
        if(a.lastName > b.lastName){
        return 1
    } else {
        return -1
     }
    })
         let over18 = arr.filter(function(item){ 
            if(item.age > 18){ 
                return item.age
            }
        })

        let asString = over18.map(function(each){ 
            return "<li> " + each.firstName.toString() + " " +  each.lastName.toString() + " is " + each.age + " </li>"
        })
    return sorted && over18 && asString
}




console.log(sortedArr(peopleArray))
