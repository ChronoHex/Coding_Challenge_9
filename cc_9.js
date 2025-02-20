// Task 1: Creating an Employee Class
class Employee {
    constructor(name, id, department, salary) {
        this.name = name; // name of employee
        this.id = id; // employee id
        this.department = department; // employee department
        this.salary = salary; // employee salary
    }; // employee constructor
    getDetails() {
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: ${this.salary}}`;
    }; // getting employee details
    calculateAnnualSalary() {
    return this.salary * 12; // calculate annual salary
}
}; // employee class

const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000); // new employee
console.log(emp1.getDetails()); // print employee details

// Task 2: Creating a Manager Class (Inheritance & Method Overriding)
class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary); // call employee constructor
        this.teamSize = teamSize; // Manager's team size
    }; // manager constructor
    getDetails() {
        return `Manager: ${this.name}, Id: ${this.id}, Department: ${this.department}, Salary: ${this.salary}, Team Size ${this.teamSize}`;
    } // manager details
    calculateBonus() {
        return this.salary * 12 * 0.10; // calculate bonus
    }
}; // manager class

const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5); // new manager
console.log(mgr1.getDetails()); // print manager details
console.log(mgr1.calculateBonus()); // print manager bonus