const Employee = require("../classes/Employee");

describe('Access name', () => {
    it("should pull name", () => {
      const text = 'Nick';
      const val = new Employee(text);

      expect(val.name).toEqual(text);
    })    
});

describe('Access ID', () => {
    it("should pull ID", () => {
      const text = 0;
      const val = new Employee(text, 0);

      expect(val.id).toEqual(text);
    })
});

describe('Access email', () => {
    it("should pull email", () => {
      const text = "test@test.com";
      const val = new Employee(text, 0, "test@test.com");

      expect(val.email).toEqual(text);
    }) 
});

describe('Access title', () => {
    it("should pull title", () => {
      const text = "title";
      const val = new Employee(text, 0, "test@test.com", "title");

      expect(val.title).toEqual(text);
    })   
});