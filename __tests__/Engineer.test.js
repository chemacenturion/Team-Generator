const { TestWatcher } = require("jest");
const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

test("Can set GitHub address with constructor function", () => {
    const testValue = "https://github.com/chemacenturion";
    const e = new Engineer("Jose", 4, "centurion.philadelphia@gmail.com", "https://github.com/chemacenturion");
    expect(e.getGithub()).toBe(testValue);
});

test("getRole() with a return of Engineer", () => {
    const testValue = "Engineer";
    const e = new Engineer("Jose", 4, "centurion.philadelphia@gmail.com", "https://github.com/chemacenturion");
    expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub address with getGitHub()", () => {
    const testValue = "https://github.com/chemacenturion";
    const e = new Engineer("Jose", 4, "centurion.philadelphia@gmail.com", testValue);
    expect(e.getGithub()).toBe(testValue);
})

