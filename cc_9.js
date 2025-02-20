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
    
    // task 4 modification
    calculateAnnualSalary() {
    if (this instanceof Manager) {
        return this.salary * 12 + this.calculateBonus(); // annual mananger salary
    } else {
        return this.salary * 12; // annual employee salary
    }; // calculate annual salary
    }; // task 4 modify for bonus
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
        return `Manager: ${this.name}, Id: ${this.id}, Department: ${this.department}, Salary: ${this.salary}, Team Size: ${this.teamSize}`;
    } // manager details
    calculateBonus() {
        return this.salary * 12 * 0.10; // calculate bonus
    }
}; // manager class

const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5); // new manager
console.log(mgr1.getDetails()); // print manager details
console.log(mgr1.calculateBonus()); // print manager bonus

// Task 3: Creating a Company Class
class Company {
    constructor(name) {
        this.name = name; // company name
        this.employees = []; // company employees
    }; // company constructor
    addEmployee(employee) {
        this.employees.push(employee); // adding employees to comapny
    }
    listEmployees() {
        this.employees.forEach(employee => console.log(employee.getDetails())); // list of employees
    }
    // Task 4 modify payroll system
    calculateTotalPayroll() {
        let total = 0; // total payroll
        return this.employees.reduce((total, employee) => {
            return total + employee.calculateAnnualSalary(); // total payroll
        }, 0); // calculate total payroll
    }; // payroll system

    // Task 5: Implementing Promotions modification
    promoteToManager (employee, teamSize) {
       const index = this.employees.indexOf(employee);
        this.employees[index] = new Manager(employee.name, employee.id, employee.department, employee.salary, teamSize); // promotion to manager
    }
}; // company class

const company = new Company("TechCorp"); // new company
company.addEmployee(emp1); // adding employee
company.addEmployee(mgr1); // adding manager
company.listEmployees(); // list of employees

console.log(company.calculateTotalPayroll()); // print total payroll

company.promoteToManager(emp1, 3); // promote employee
company.listEmployees(); // new employee list