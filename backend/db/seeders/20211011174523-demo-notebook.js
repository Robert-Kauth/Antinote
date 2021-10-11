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
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Notebooks", null, {});
  },
};
