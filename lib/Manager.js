const Employee = require('./Employee');
// intern need's a office number custom instance property
class teamManager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, officeNumber);
        // custom instance property
        this.office = officeNumber
    }
}

module.exports = teamManager;