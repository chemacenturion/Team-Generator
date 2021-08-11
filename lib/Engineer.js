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
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        // custom instance property
        this.github = gitHub
    }
}

module.exports = Engineer;