// Task 1: Creating an Employee Class
class Employee {
    constructor(name, id, department, salary) {
        this.name = name; // name of employee
        this.id = id; // employee id
        this.department = department; // employee department
        this.salary = salary; // employee salary
    }; // employee constructor
    getDetails() {
        return `Name: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: ${this.salary}}`;
    }; // getting employee details
    calculateAnnualSalary() {
    return this.salary * 12; // calculate annual salary
}
}; // employee class

const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000); // new employee
console.log(emp1.getDetails()); // print employee details