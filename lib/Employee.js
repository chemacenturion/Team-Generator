/* class Shape {
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  printInfo() {
    console.log(`Area: ${this.area}`);
    console.log(`Perimeter: ${this.perimeter}`);
  }
}

module.exports = Shape;

Class example from unit exercise
Use Class to define objects for general employee */
// Start w/ Employee general with:
// *name
// *ID 
// *email
// Add Manager, Engineer, and Intern specific objects with extend
// super
class Employee {
    constructor (name, ID, emailAddress) {
    this.name = name;
    this.id = ID;
    this.email = emailAddress;
    }
}
// Question for tutor - Do I need functions for each constructor?

module.exports = Employee;