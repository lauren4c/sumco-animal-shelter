const request = require("request");
const server = require("../../server");
const base = "http://localhost:5000/api/animals/";
const sequelize = require("../../src/db/models/index").sequelize;
const Animal = require("../../src/db/models").Animal;

describe("routes : animals", () => {
  beforeEach(done => {
    this.animal;
    sequelize.sync({ force: true }).then(res => {
      Animal.create({
        name: "Buddy",
        type: "dog",
        size: "large",
        age: "adult",
        gender: "male",
        status: "available",
        breed: "german shepard mix",
        description: "I am the best dog!"
      })
        .then(animal => {
          this.animal = animal;
          done();
        })
        .catch(err => {
          console.log(err);
          done();
        });
    });
  });
  describe("GET /api/animals", () => {
    it("should return a status code 200 and all animals", done => {
      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(this.animal.name).toBe("Buddy");
        // expect(this.animal.type).toBe("dog");
        // expect(this.animal.size).toBe("large");
        // expect(this.animal.age).toBe("adult");
        // expect(this.animal.gender).toBe("male");
        // expect(this.animal.status).toBe("available");
        // expect(this.animal.breed).toBe("german shepard mix");
        // expect(this.animal.description).toBe("I am the best dog!");
        done();
      });
    });
  });
  describe("GET /api/animals/:id", () => {
    it("should return a status code 200 and return 1 animal", done => {
      request.get(`${base}${this.animal.id}`, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(this.animal.name).toBe("Buddy");
        expect(this.animal.type).toBe("dog");
        expect(this.animal.size).toBe("large");
        expect(this.animal.age).toBe("adult");
        expect(this.animal.gender).toBe("male");
        expect(this.animal.status).toBe("available");
        expect(this.animal.breed).toBe("german shepard mix");
        expect(this.animal.description).toBe("I am the best dog!");
        done();
      });
    });
  });
});
