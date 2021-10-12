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
          title: faker.lorem.sentence(),
          content: faker.lorem.sentences(),
        },
        {
          userId: 1,
          notebookId: 2,
          title: faker.lorem.sentence(),
          content: faker.lorem.sentences(),
        },
        {
          userId: 1,
          notebookId: 3,
          title: faker.lorem.sentence(),
          content: faker.lorem.sentences(),
        },
        {
          userId: 1,
          notebookId: 4,
          title: faker.lorem.sentence(),
          content: faker.lorem.sentences(),
        },
        {
          userId: 1,
          notebookId: 5,
          title: faker.lorem.sentence(),
          content: faker.lorem.sentences(),
        },
        {
          userId: 1,
          notebookId: 1,
          title: faker.lorem.sentence(),
          content: faker.lorem.sentences(),
        },
        {
          userId: 1,
          notebookId: 2,
          title: faker.lorem.sentence(),
          content: faker.lorem.sentences(),
        },
        {
          userId: 1,
          notebookId: 3,
          title: faker.lorem.sentence(),
          content: faker.lorem.sentences(),
        },
        {
          userId: 1,
          notebookId: 4,
          title: faker.lorem.sentence(),
          content: faker.lorem.sentences(),
        },
        {
          userId: 1,
          notebookId: 5,
          title: faker.lorem.sentence(),
          content: faker.lorem.sentences(),
        },
        {
          userId: 1,
          notebookId: 1,
          title: faker.lorem.sentence(),
          content: faker.lorem.sentences(),
        },
        {
          userId: 1,
          notebookId: 2,
          title: faker.lorem.sentence(),
          content: faker.lorem.sentences(),
        },
        {
          userId: 1,
          notebookId: 3,
          title: faker.lorem.sentence(),
          content: faker.lorem.sentences(),
        },
        {
          userId: 1,
          notebookId: 4,
          title: faker.lorem.sentence(),
          content: faker.lorem.sentences(),
        },
        {
          userId: 1,
          notebookId: 5,
          title: faker.lorem.sentence(),
          content: faker.lorem.sentences(),
        },
        {
          userId: 1,
          notebookId: 1,
          title: faker.lorem.sentence(),
          content: faker.lorem.sentences(),
        },
        {
          userId: 1,
          notebookId: 2,
          title: faker.lorem.sentence(),
          content: faker.lorem.sentences(),
        },
        {
          userId: 1,
          notebookId: 3,
          title: faker.lorem.sentence(),
          content: faker.lorem.sentences(),
        },
        {
          userId: 1,
          notebookId: 4,
          title: faker.lorem.sentence(),
          content: faker.lorem.sentences(),
        },
        {
          userId: 1,
          notebookId: 5,
          title: faker.lorem.sentence(),
          content: faker.lorem.sentences(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Notes", null, {});
  },
};
