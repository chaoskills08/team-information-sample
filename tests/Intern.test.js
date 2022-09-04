const Intern = require('../classes/Intern');

describe('Get the interns school info', () => {
  it("should pull school", () => { 
    const school = "school";
    const obj = new Intern("Brad", 30, "test@test.com", "school");

    expect(obj.getSchool()).toEqual(school);
  })  
});

describe('Get the role', () => {
  it("should pull title", () => {
    const obj = new Intern("Brad", 30, "test@test.com", "school");

    expect(obj.getPos()).toEqual("Intern");
  })  
});