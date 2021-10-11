"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Tags",
      [
        {
          name: "Todo",
        },
        {
          name: "Shopping list",
        },
        {
          name: "Weekly goals",
        },
        {
          name: "Garden supplies",
        },
        {
          name: "Camping trip prep",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Tags", null, {});
  },
};
