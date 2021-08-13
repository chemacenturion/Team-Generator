/* const Vehicle = require('./vehicle');

class Car extends Vehicle {
  constructor(id, color, passengers) {
    super(id, 4, 'beep');
    this.color = color;
    this.passengers = passengers;
  }
*extend example from class exercises */
// Engineer need's github per gitLab instructions
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github
    }
// add a method of getGitHub and getRole
    getGithub() {
      return this.github
    }

    getRole() {
      return "Engineer"
    }
}

module.exports = Engineer;