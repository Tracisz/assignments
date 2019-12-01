let employees = []


function Employee (name, jobTitle, salary, status = "Full-time") { 
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
}

Employee.prototype.status = "Fulltime"
Employee.prototype.printForm = function(){ 
        console.log(this.name, this.jobTitle, this.salary, this.status)
}

let john = new Employee("John", "Head of Sales", "3000 / hour", "full time" )
let mary = new Employee("Mary", "HR Manager", "60,000 / year", "contract")
let matthew = new Employee("Matthew", "intern", "35,000 / year", "part time")
let paul = new Employee("Paul", "CEO", "4000 / hour")
john.printForm()
mary.printForm()
paul.printForm()
