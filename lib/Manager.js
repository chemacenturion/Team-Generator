const Employee = require('./Employee');
// intern need's a office number custom instance property
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        // custom instance property
        this.officeNumber = officeNumber
    }
// add method for officeNumber and particular getRole
    getOfficeNumber() {
        return this.officeNumber
    }

    getRole() {
        return "Manager"
    }
}

module.exports = Manager;