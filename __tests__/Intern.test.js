const { TestWatcher } = require("jest");
const Intern = require("../lib/Intern");
// Test intially failed??
test("Can generate school with constructor function", () => {
    const testValue = "Temple";
    const e = new Intern("Jose", 4, "centurion.philadelphia@gmail.com", testValue);
    expect(e.school).toBe(testValue);
});

test("getRole() should return 'Intern'", () => {
    const testValue = "Intern";
    const e = new Intern("Jose", 4, "centurion.philadelphia@gmail.com", "Temple");
    expect(e.getRole()).toBe(testValue);
});
// Missing closing ()!!!
test("Can get school via getSchool()", () => {
    const testValue = "Temple";
    const e = new Intern("Jose", 4, "centurion.philadelphia@gmail.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});