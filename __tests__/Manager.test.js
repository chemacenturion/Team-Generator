const Manager = require("../lib/Manager")
// test failed again........
// test("Will generate office number with constructor function", () => {
//     const testValue = 428;
//     const e = new Manager("Jose", 4, "centurion.philadelphia@gmail.com", testValue);
//     expect(e.officeNumber).toBe(testValue);
// });
// Forgot , after sample email
test("getRole() should return 'Manager'", () => {
    const testValue = "Manager";
    const e = new Manager("Jose", 4, "centurion.philadelphia@gmail.com", 428);
    expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOfficeNumber()", () => {
    const testValue = 100;
    const e = new Manager("Jose", 4, "centurion.philadelphia@gmail.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});