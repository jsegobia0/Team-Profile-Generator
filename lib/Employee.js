// TODO: Write code to define and export the Employee class
class Employee {
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
        return Employee;
    }
}

module.exports = Employee;