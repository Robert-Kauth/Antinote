"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("People", [{}], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("People", null, {});
  },
};
