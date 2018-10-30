var employees = ["John", "Scott", "Tyler", "Tim", "Eric"]
var newEmployess = []
function Employee(name, jobTitle, salary){
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = "Full Time";
    this.printEmployeeForm = function(){
        console.log(`Name: ${this.name}, Job Title: ${this.jobTitle}, Salary: ${this.salary}, Status: ${this.status}`)
    }
    this.generateEmployees = function(){
        
    }
}
var john = new Employee(employees[0], "Student", 0)
console.log(john.printEmployeeForm())
var tyler = new Employee(employees[2], "Physician", "$600/hour")
tyler.status = "Part Time";
console.log(tyler.printEmployeeForm());
var scott = new Employee(employees[1], "Web Developer", "800/hour")
scott.status = "Contract";
console.log(scott.printEmployeeForm());
var tim = new Employee(employees[3], "Software Engineer", "820/hour");
console.log(tim.printEmployeeForm());
var eric = new Employee(employees[4], "Full Stack Javascript", "800/hour");
console.log(eric.printEmployeeForm());

