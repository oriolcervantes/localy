'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Shops', [{
      id: '1',
      name: "Muffins & Cakes",
      latitude: 41.39299930874908,
      longitude: 2.196181052425845,
      products: ["muffin", "cake"],
      address: "Some address",
      telephone: 123456789,
      website: "www.muffinsandcakes.muffin",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '2',
      name: "The Best Cakes",
      latitude: 41.39566412795631,
      longitude: 2.1975160374039477,
      products: ["cake"],
      address: "Carrer de Ramón Turró, 120, 08005 Barcelona",
      telephone: 123456789,
      website: "www.onlycakes.cake",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '3',
      name: "Ca l'Antoniu",
      latitude: 41.39646360811545,
      longitude: 2.2004408792020183,
      products: ["muffin", "cake"],
      address: "Carrer de Badajoz, 35, 08005 Barcelona",
      telephone: 123456789,
      website: "www.calantoniu.antoniu",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '4',
      name: "Get them Muffins",
      latitude: 41.396954763700506,
      longitude: 2.19688041001848,
      products: ["muffin"],
      address: "Carrer de Ramón Turró, 120, 08005 Barcelona",
      telephone: 123456789,
      website: "www.getthemgoddamnit.muffin",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '5',
      name: "We Gon Bananas",
      latitude: 41.39397192225699,
      longitude: 2.1999342889539943,
      products: ["banana"],
      address: "Av. d'Icària, 183, 08005 Barcelona",
      telephone: 123456789,
      website: "www.wegonbananaaaaaaaas.ban",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Shops', null, {});
  }
};
