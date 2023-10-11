'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Routes', [
      { start: '1.2.3',
        end: '2.4.6',
        img: 'https://www.volgadream.com/wp-content/uploads/2020/06/Four-Seasons-Hotel-Moscow-Kremlin-view-1000x559-1.jpg',
        distance: '100',
        location: 'Москва',
        name: 'Красная площадь',
        user_id: 1,
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
