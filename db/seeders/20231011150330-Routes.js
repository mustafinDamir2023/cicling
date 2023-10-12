/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Routes',
      [
        {
          start: '1.2.3',
          end: '2.4.6',
          img: 'https://www.volgadream.com/wp-content/uploads/2020/06/Four-Seasons-Hotel-Moscow-Kremlin-view-1000x559-1.jpg',
          distance: '100',
          location: 'Москва',
          name: 'Красная площадь',
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          start: '6.7.8',
          end: '8.10.12',
          img: 'https://architectureguru.ru/wp-content/uploads/2020/08/poklonnaya-gora-in-moscow-1.jpg',
          distance: '500',
          location: 'Москва',
          name: 'Поклонная гора',
          user_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          start: '10.12.14',
          end: '16.18.20',
          img: 'https://img.magput.ru/pics/large/316472f0-453e-4ab5-b053-59b84e2392bb.jpg',
          distance: '2000',
          location: 'Москва',
          name: 'Музей-заповедник "Царицыно"',
          user_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
