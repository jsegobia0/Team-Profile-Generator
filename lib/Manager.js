const Employee = require("./Employee");

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee {
    // constructor
    constructor(name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }

    // getters and setters
    getRole() {
        // overrides previous role
        return Manager;
    }
}

module.exports = Manager;