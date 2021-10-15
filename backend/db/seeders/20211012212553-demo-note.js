"use strict";
const faker = require("faker");
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Notes",
      [
        {
          userId: 1,
          notebookId: 1,
          title: faker.random.words(1),
          content: faker.random.words(25),
        },
        {
          userId: 1,
          notebookId: 2,
          title: faker.random.words(1),
          content: faker.random.words(25),
        },
        {
          userId: 1,
          notebookId: 3,
          title: faker.random.words(1),
          content: faker.random.words(25),
        },
        {
          userId: 1,
          notebookId: 4,
          title: faker.random.words(1),
          content: faker.random.words(25),
        },
        {
          userId: 1,
          notebookId: 5,
          title: faker.random.words(1),
          content: faker.random.words(25),
        },
        {
          userId: 1,
          notebookId: 1,
          title: faker.random.words(1),
          content: faker.random.words(25),
        },
        {
          userId: 1,
          notebookId: 2,
          title: faker.random.words(1),
          content: faker.random.words(25),
        },
        {
          userId: 1,
          notebookId: 3,
          title: faker.random.words(1),
          content: faker.random.words(25),
        },
        {
          userId: 1,
          notebookId: 4,
          title: faker.random.words(1),
          content: faker.random.words(25),
        },
        {
          userId: 1,
          notebookId: 5,
          title: faker.random.words(1),
          content: faker.random.words(25),
        },
        {
          userId: 1,
          notebookId: 1,
          title: faker.random.words(1),
          content: faker.random.words(25),
        },
        {
          userId: 1,
          notebookId: 2,
          title: faker.random.words(1),
          content: faker.random.words(25),
        },
        {
          userId: 1,
          notebookId: 3,
          title: faker.random.words(1),
          content: faker.random.words(25),
        },
        {
          userId: 1,
          notebookId: 4,
          title: faker.random.words(1),
          content: faker.random.words(25),
        },
        {
          userId: 1,
          notebookId: 5,
          title: faker.random.words(1),
          content: faker.random.words(25),
        },
        {
          userId: 1,
          notebookId: 1,
          title: faker.random.words(1),
          content: faker.random.words(25),
        },
        {
          userId: 1,
          notebookId: 2,
          title: faker.random.words(1),
          content: faker.random.words(25),
        },
        {
          userId: 1,
          notebookId: 3,
          title: faker.random.words(1),
          content: faker.random.words(25),
        },
        {
          userId: 1,
          notebookId: 4,
          title: faker.random.words(1),
          content: faker.random.words(25),
        },
        {
          userId: 1,
          notebookId: 5,
          title: faker.random.words(1),
          content: faker.random.words(25),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Notes", null, {});
  },
};
