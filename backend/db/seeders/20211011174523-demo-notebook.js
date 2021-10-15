"use strict";
const faker = require("faker");
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Notebooks",
      [
        {
          userId: 1,
          title: faker.random.word(),
        },
        {
          userId: 1,
          title: faker.random.word(),
        },
        {
          userId: 1,
          title: faker.random.word(),
        },
        {
          userId: 1,
          title: faker.random.word(),
        },
        {
          userId: 1,
          title: faker.random.word(),
        },
        {
          userId: 2,
          title: faker.random.word(),
        },
        {
          userId: 2,
          title: faker.random.word(),
        },
        {
          userId: 2,
          title: faker.random.word(),
        },
        {
          userId: 2,
          title: faker.random.word(),
        },
        {
          userId: 2,
          title: faker.random.word(),
        },
        {
          userId: 3,
          title: faker.random.word(),
        },
        {
          userId: 3,
          title: faker.random.word(),
        },
        {
          userId: 3,
          title: faker.random.word(),
        },
        {
          userId: 3,
          title: faker.random.word(),
        },
        {
          userId: 3,
          title: faker.random.word(),
        },
        {
          userId: 4,
          title: faker.random.word(),
        },
        {
          userId: 4,
          title: faker.random.word(),
        },
        {
          userId: 4,
          title: faker.random.word(),
        },
        {
          userId: 4,
          title: faker.random.word(),
        },
        {
          userId: 4,
          title: faker.random.word(),
        },
        {
          userId: 5,
          title: faker.random.word(),
        },
        {
          userId: 5,
          title: faker.random.word(),
        },
        {
          userId: 5,
          title: faker.random.word(),
        },
        {
          userId: 5,
          title: faker.random.word(),
        },
        {
          userId: 5,
          title: faker.random.word(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Notebooks", null, {});
  },
};
