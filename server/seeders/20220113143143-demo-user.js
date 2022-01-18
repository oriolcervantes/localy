'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Shops', [{
      name: "Muffins & Cakes",
      category: "Bakery",
      latitude: 41.39299930874908,
      longitude: 2.196181052425845,
      products: ["muffin", "cake"],
      address: "Carrer de Ramón Turró, 120, 08005 Barcelona",
      telephone: 123456789,
      email: 'muffin@cake.com',
      website: "www.muffinsandcakes.muffin",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu laoreet neque. Duis tortor mi, suscipit sit amet metus vel, rutrum varius velit. Quisque lorem dui, euismod ut interdum a, auctor non risus. Donec vel mollis varius rutrum mollis magna.",
      picture: ["https://res.cloudinary.com/drr74f5ty/image/upload/v1642516311/muffin_p9ovxo.jpg", "https://res.cloudinary.com/drr74f5ty/image/upload/v1642516380/muffin2_eona3i.jpg"],
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId: 1
    },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Shops', null, {});
  }
};
