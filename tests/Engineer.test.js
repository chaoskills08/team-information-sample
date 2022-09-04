const Engineer = require('../classes/Engineer');

describe('Access username', () => {
    it("should pull the github username", () => {
      const user = "githubuser"
      const obj = new Engineer("Nick", 0, "email@email.com", user);
      
      expect(obj.getUser()).toEqual(user);
    }) 
});

describe('Access position', () => {
    it("should pull title", () => {
      const user = "githubuser"
      const obj = new Engineer("Nick", 0, "email@email.com", user);
      
      expect(obj.getPos()).toEqual("Engineer");
    })
});