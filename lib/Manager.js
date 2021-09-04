const Employee = require("./Employee");

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee {
    // constructor
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // getters and setters
    getName();
    getId();
    getEmail();
    getRole() {
        // overrides previous role
        return Manager;
    }
}