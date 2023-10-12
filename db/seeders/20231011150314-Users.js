'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      { name: 'Андрей',
        email: 'babka@Ats.ru',
        password: '123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { name: 'Евгений',
        email: 'PierreDunn@Ucoz.ru',
        password: 'qwerty',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { name: 'Василий',
        email: 'VasyaPupkin@MMM.ru',
        password: 'pupkinRulez1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
