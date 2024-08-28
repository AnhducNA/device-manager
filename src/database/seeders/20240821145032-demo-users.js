"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        name: "admin",
        email: "admin@gmail.com",
        role: "admin",
        password: "123456",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "le anh duc",
        email: "duc@gmail.com",
        role: "user",
        password: "123456",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
