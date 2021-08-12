const Employee = require('./Employee');
// intern need's a office number custom instance property
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, officeNumber);
        // custom instance property
        this.office = officeNumber
    }
// add method for officeNumber and particular getRole
    getOfficeNumber() {
        return this.office
    }

    getRole() {
        return "Manager"
    }
}

module.exports = Manager;