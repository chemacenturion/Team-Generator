// Tutor assisted and added jest --coverage via Web Dev simplified
const { TestWatcher } = require("jest");
const Employee = require("../lib/Employee");

test("Can set name with a constructor function", () => {
    const name = "Jose";
    const e = new Employee(name);
    expect(e.name).toBe(name);
})

test("Can set employee ID with constructor function", () => {
    const testValue = 100;
    const e = new Employee("Jose", testValue);
    expect(e.id).toBe(testValue);
})

test("Can set email with constructor function", () => {
    const testValue = "centurion.philadelphia@gmail.com";
    const e = new Employee("Jose", 4, testValue);
    expect(e.email).toBe(testValue);
});
// Call/test functions from lib classes now 
test("Can get name via getName()", () => {
    const testValue = "Jose";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("Can get employee ID via getId()", () => {
    const testValue = 100;
    const e = new Employee("Jose", testValue);
    expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
    const testValue = "centurion.philadelphia@gmail.com";
    const e = new Employee("Foo", 4, testValue);
    expect(e.getEmail()).toBe(testValue);
});