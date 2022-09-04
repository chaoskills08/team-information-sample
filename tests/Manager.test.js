const Manager = require('../classes/Manager');

describe('Get managers office number', () => {
  it("should pull office number", () => {
    const offNum = 21;
    const obj = new Manager("Nate", 8, "test@test.com", 21);

    expect(obj.getOffNum()).toEqual(offNum);
  })  
});

describe('Access Role', () => {
  it("should pull title", () => {
    const obj = new Manager("Nate", 8, "test@test.com", 21);

    expect(obj.getPos()).toEqual("Manager");
  }) 
});