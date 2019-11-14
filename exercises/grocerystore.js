var shopper = { 
    name: "John",
    age:"45",
    hasMoney: true,
    greeting: function() { 
        console.log("Hello my name is " + this.name)
    },
    groceryCart: ["apples", "oranages", "celery", "brocoli", "soup", "tomatoes", "bread"]

}

shopper.greeting() 
console.log(shopper.groceryCart[3])