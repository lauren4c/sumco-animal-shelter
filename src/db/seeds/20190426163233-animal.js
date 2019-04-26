"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Animals",
      [
        {
          name: "Piper",
          type: "dog",
          size: "medium",
          age: "adult",
          gender: "female",
          status: "available",
          breed: "Brown Australian Kelpie and German Shepherd Dog",
          photo: "/images/piper.jpg",
          description:
            "Hey there! My name is Piper I'm a 2 year old, 57#, Australian Kelpie/Australian Shepherd mix. I am a young, spunky, and playful doggie. I would do best in an active home I am a very smart dog who can shake, sit and lay down. I will be a very loyal dog, who may have some guardy behavior once I know you're my person. I am very affectionate and LOVE to be close to people. Please come spend some time with me!",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Maggie",
          type: "dog",
          size: "large",
          age: "adult",
          gender: "female",
          status: "available",
          breed: "black and tan German Shepherd Dog mix",
          description:
            "Hi I'm Maggie! I am a 65#, 2 year old spayed female shepherd mix! I was transferred to Colorado with my 3 puppies and man, did we luck out! My babies all found homes so now it's my turn! I am a COMPLETE love! I lean in for cuddles, walk great on a leash, meet new people very easily, and I am just the best. I'd move into your life and heart seamlessly. Come meet me!",
          photo: "/images/maggie.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Hershey",
          type: "dog",
          size: "medium",
          age: "puppy",
          gender: "male",
          status: "available",
          breed: "Rottweiler",
          description:
            "I am just 8 weeks old and ready for a home of my own. All of my siblings have found home, so it's my turn now. Come meet me!",
          photo: "/images/hershey.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Romeo",
          type: "dog",
          size: "small",
          age: "adult",
          gender: "male",
          status: "available",
          breed: "Chihuahua - Smooth Coated",
          description:
            "Why hello, I'm Romeo! I'm a 2.5 year old, 8#, neutered, Chihuahua. I was transferred here from a shelter in Kansas to find a family as sweet as I am! I am reported to be good with dogs, cats, and children…and just love affection and attention. I do like to burrow and hide in blankets, under beds, or in a kennel to feel safe so if you can't find me, I'm probably taking a nap. Will you be my new person?",
          photo: "/images/romeo.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Larry",
          type: "cat",
          size: "medium",
          age: "adult",
          gender: "male",
          status: "available",
          breed: "orange and white Domestic Longhair",
          description:
            "Hi! My name is Larry and I am a super affectionate long haired neutered male cat. I'll need to live with someone who is cat-savvy as I can be a testy one. I looooove affection and to be close, but on my terms. I am energetic and like to be the life of the party. I've made great progress with my other feline friends - I tolerate them now. Please come spend some time with me...I am really a good boy!",
          photo: "/images/larry.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Zara",
          type: "cat",
          size: "small",
          age: "adult",
          gender: "female",
          status: "available",
          breed: "white and gray Domestic Mediumhair",
          description:
            "Meow! My name is Zara and I am a 7 year old domestic long haired beauty! I am a petite spayed female who loves to be in your lap. I am okay with other friendly cats, but because of a previous attack from a dog, I might be happiest without a stress of being around a dog. Please come spend some time with me! I was just transferred from a shelter in Craig, CO and cannot wait to find myself in a loving home. Maybe yours?",
          photo: "/images/zara.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Devon",
          type: "cat",
          size: "medium",
          age: "young",
          gender: "male",
          status: "available",
          breed: "gray tab Domestic Shorthair",
          description:
            "Hi there. I'm Devon. I am a neutered male kitten who was found as a stray elsewhere in Colorado. I am reserved and it will take me some time to warm up to you. But if you're a patient person, I will surely learn to trust you! And what's better than earning the trust of an insecure kitty?? Not much! Please take me home with you and let me learn to be the playful kitten I deserve to be!",
          photo: "/images/devon.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Animals", null, {});
  }
};
