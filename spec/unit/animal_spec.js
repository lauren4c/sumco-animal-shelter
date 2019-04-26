// const sequelize = require("../../src/db/models/index").sequelize;
// const Animal = require("../../src/db/models").Animal;
//
// describe("Animal", () => {
// beforeEach(done => {
//   this.animal;
//
//   Animal.create({
//     name: "Buddy",
//     type: "dog",
//     size: "large",
//     age: "adult",
//     gender: "male",
//     status: "available",
//     breed: "german shepard mix"
//   }).then(animal => {
//     this.animal = animal;
//     done();
//   });
// });
//
// describe("#create()", () => {
//   it("should create am animal object with a name, type, size, age, gender, status, and breed", done => {
//     //#1
//     animal
//       .create({
//         name: "Molly",
//         type: "cat",
//         size: "large",
//         age: "young",
//         gender: "female",
//         status: "available",
//         breed: "maine coon mix"
//       })
//       .then(animal => {
//         //#2
//         expect(animal.name).toBe("Molly");
//         expect(animal.type).toBe("cat");
//         expect(animal.size).toBe("large");
//         expect(animal.age).toBe("young");
//         expect(animal.gender).toBe("female");
//         expect(animal.status).toBe("available");
//         expect(animal.breed).toBe("main coon mix");
//
//         done();
//       })
//       .catch(err => {
//         console.log(err);
//         done();
//       });
//   });
//     it("should not create a animal with missing name, type, size, age, gender, status or breed", done => {
//       animal
//         .create({
//           name: "cat"
//         })
//         .then(animal => {
//           // the code in this block will not be evaluated since the validation error
//           // will skip it. Instead, we'll catch the error in the catch block below
//           // and set the expectations there
//
//           done();
//         })
//         .catch(err => {
//           expect(err.message).toContain("animal.type cannot be null");
//           expect(err.message).toContain("animal.size cannot be null");
//           done();
//         });
//     });
//   });
// });
