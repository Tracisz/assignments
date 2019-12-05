function doubleNum(arr) { 
    let newArr = arr.map(function(item){ 
        return item * 2
    })
    return newArr
}
console.log(doubleNum([2, 5, 100]))


function stringItUp(arr){
    let newString = arr.map(function(item){ 
        return item.toString()
    })
    return newString
  }
  console.log(stringItUp([2, 5, 100]));

  function capitalizeNames(arr){
        let capitalName = arr.map(function(string){ 
            return string[0].toUpperCase() +  string.slice(1)
        })
        return capitalName
  }
  
  console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));