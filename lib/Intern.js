const Employee = require("./Employee");

// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Intern.
class Intern extends Employee {
    // constructor
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    
    // getters and setters
    getSchool() {
        return this.school;
    }

    getRole() {
        return Intern;
    }
}
module.exports = Intern;