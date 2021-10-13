"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Notebooks",
      [
        {
          userId: 1,
          title: "Spring Cleaning",
        },
        {
          userId: 1,
          title: "Groceries",
        },
        {
          userId: 1,
          title: "Camping supplies",
        },
        {
          userId: 1,
          title: "Archery",
        },
        {
          userId: 1,
          title: "Garden Projects",
        },
        {
          userId: 2,
          title: "Spring Cleaning",
        },
        {
          userId: 2,
          title: "Groceries",
        },
        {
          userId: 2,
          title: "Camping supplies",
        },
        {
          userId: 2,
          title: "Archery",
        },
        {
          userId: 2,
          title: "Garden Projects",
        },
        {
          userId: 3,
          title: "Spring Cleaning",
        },
        {
          userId: 3,
          title: "Groceries",
        },
        {
          userId: 3,
          title: "Camping supplies",
        },
        {
          userId: 3,
          title: "Archery",
        },
        {
          userId: 3,
          title: "Garden Projects",
        },
        {
          userId: 4,
          title: "Spring Cleaning",
        },
        {
          userId: 4,
          title: "Groceries",
        },
        {
          userId: 4,
          title: "Camping supplies",
        },
        {
          userId: 4,
          title: "Archery",
        },
        {
          userId: 4,
          title: "Garden Projects",
        },
        {
          userId: 5,
          title: "Spring Cleaning",
        },
        {
          userId: 5,
          title: "Groceries",
        },
        {
          userId: 5,
          title: "Camping supplies",
        },
        {
          userId: 5,
          title: "Archery",
        },
        {
          userId: 5,
          title: "Garden Projects",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Notebooks", null, {});
  },
};
