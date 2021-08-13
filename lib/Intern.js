const Employee = require('./Employee');
// intern need's a school custom instance property
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        // custom instance property
        this.school = school
    }
// add method for school and particular getRole
    getSchool() {
        return this.school
    }

    getRole() {
        return "Intern"
    }
}

module.exports = Intern;