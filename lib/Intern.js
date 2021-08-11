const Employee = require('./Employee');
// intern need's a school custom instance property
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email, school);
        // custom instance property
        this.school = school
    }
}

module.exports = Intern;