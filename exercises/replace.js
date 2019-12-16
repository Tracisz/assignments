
function replaceStr(word, sentence){    

    let pattern = new RegExp(word, "gi")
    let newSent = sentence.replace(pattern, " ")
    return newSent
}

console.log(replaceStr("hello", "hello World, hello World, hello World"))

var str = "Mr Blue has a blue house and a blue car";
var res = str.replace(/blue/gi, "red");


console.log(res)