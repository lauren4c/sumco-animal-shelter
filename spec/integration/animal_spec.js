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
        type: "dog",
        size: "large",
        age: "adult",
        breed: "german shepard mix",
        gender: "male",
        status: "available",
        name: "Buddy",
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
  describe("POST /api/animals/create", () => {
    const options = {
      url: `${base}create`,
      form: {
        type: "cat",
        size: "extra-small",
        age: "baby",
        breed: "domestic long-hair",
        gender: "male",
        status: "available",
        name: "Sunshine",
        description: "I am the best cat!",
        photo: "fake/file/string"
      }
    };

    it("should create a new animal and send back message of success.", done => {
      request.post(options, (err, res, body) => {
        Animal.findOne({ where: { name: "Sunshine" } })
          .then(animal => {
            expect(res.statusCode).toBe(200);
            expect(animal.size).toBe("extra-small");
            expect(animal.description).toBe("I am the best cat!");
            done();
          })
          .catch(err => {
            console.log(err);
            done();
          });
      });
    });
  });
  describe("POST /api/animals/:id/update", () => {
    it("should update the animal and send back message of success.", done => {
      const options = {
        url: `${base}${this.animal.id}/update`,
        form: {
          type: this.animal.type,
          size: "Medium",
          age: this.animal.age,
          breed: this.animal.breed,
          gender: this.animal.gender,
          status: "pending",
          name: this.animal.name,
          description: this.animal.description,
          photo: this.animal.photo
        }
      };

      request.post(options, (err, res, body) => {
        Animal.findOne({ where: { id: this.animal.id } })
          .then(animal => {
            expect(animal.size).toBe("Medium");
            expect(animal.status).toBe("pending");
            done();
          })
          .catch(err => {
            console.log(err);
            done();
          });
      });
    });
  });
});
