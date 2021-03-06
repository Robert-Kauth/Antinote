"use strict";
const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "demo@user.io",
          username: "Demo-lition",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: faker.internet.email(),
          username: faker.internet.userName(),
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          email: faker.internet.email(),
          username: faker.internet.userName(),
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          email: faker.internet.email(),
          username: faker.internet.userName(),
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          email: faker.internet.email(),
          username: faker.internet.userName(),
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          email: faker.internet.email(),
          username: faker.internet.userName(),
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
