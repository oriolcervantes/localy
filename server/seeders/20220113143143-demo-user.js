'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Shops', [{
      name: "Flower It Babe",
      category: "Flower Shop",
      latitude: 41.41930334966653,
      longitude: 2.199611497220223,
      products: ["flowers", "rose", "lily", "daisy", "tulip"],
      address: "Carrer de Ramón Turró, 120, 08005 Barcelona",
      telephone: 123456789,
      email: 'flower@it.babe',
      website: "www.flowerit.babe",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu laoreet neque. Duis tortor mi, suscipit sit amet metus vel, rutrum varius velit. Quisque lorem dui, euismod ut interdum a, auctor non risus. Donec vel mollis varius rutrum mollis magna.",
      picture: ["https://res.cloudinary.com/drr74f5ty/image/upload/v1642542174/redroses_thym6n.jpg", "https://res.cloudinary.com/drr74f5ty/image/upload/v1642542174/lilies1_gjetvm.jpg"],
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId: 1
    },
    {
      name: "Roses Are Red",
      category: "Roses Shop",
      latitude: 41.41794365815429,
      longitude: 2.1971009497619245,
      products: ["flowers", "rose", "red rose", "white rose", "rose plant"],
      address: "Carrer de Concili de Trento, 12, 08025 Barcelona",
      telephone: 123456789,
      email: 'roses@are.red',
      website: "www.rosesare.red",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu laoreet neque. Duis tortor mi, suscipit sit amet metus vel, rutrum varius velit. Quisque lorem dui, euismod ut interdum a, auctor non risus. Donec vel mollis varius rutrum mollis magna.",
      picture: ["https://res.cloudinary.com/drr74f5ty/image/upload/v1642542174/bouquet3_eo2dan.jpg", "https://res.cloudinary.com/drr74f5ty/image/upload/v1642542175/whiteroses_kiavfx.jpg", 'https://res.cloudinary.com/drr74f5ty/image/upload/v1642542174/bouquet_ha2ngq.jpg', 'https://res.cloudinary.com/drr74f5ty/image/upload/v1642542174/redroses_thym6n.jpg'],
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId: 1
    },
    {
      name: "Coding Late at Night",
      category: "Flower & Plant Shop",
      latitude: 41.416330496098226,
      longitude: 2.201499772231594,
      products: ["flowers", "rose", "geranium", "lily", "tulip", "monstera"],
      address: "Carrer de Guipúscoa, 80, 08005 Barcelona",
      telephone: 123456789,
      email: 'coding@late.atnight',
      website: "www.codinglateat.night",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu laoreet neque. Duis tortor mi, suscipit sit amet metus vel, rutrum varius velit. Quisque lorem dui, euismod ut interdum a, auctor non risus. Donec vel mollis varius rutrum mollis magna.",
      picture: ["https://res.cloudinary.com/drr74f5ty/image/upload/v1642542174/geranium_gbcibh.jpg", "https://res.cloudinary.com/drr74f5ty/image/upload/v1642542174/jasmine_x2gfun.jpg"],
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId: 1
    },
    {
      name: "Oh My Blossom",
      category: "Flower Shop & PLant Shop",
      latitude: 41.41471327094634,
      longitude: 2.196634245311573,
      products: ["flowers", "rose", "jasmine", "lavender", "geranium"],
      address: "Carrer d'Àvila, 24, 08005 Barcelona",
      telephone: 123456789,
      email: 'oh@my.blossom',
      website: "www.ohmy.blossom",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu laoreet neque. Duis tortor mi, suscipit sit amet metus vel, rutrum varius velit. Quisque lorem dui, euismod ut interdum a, auctor non risus. Donec vel mollis varius rutrum mollis magna.",
      picture: ["https://res.cloudinary.com/drr74f5ty/image/upload/v1642542175/tulips_vjkkhj.jpg", "https://res.cloudinary.com/drr74f5ty/image/upload/v1642542174/bouquet2_c9pvaj.jpg"],
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId: 1
    },
    {
      name: "Get Them Flowers",
      category: "Flower Shop",
      latitude: 41.42148764659256,
      longitude: 2.1971170428394426,
      products: ["flowers", "rose", "lilly", "daisy", "tulip"],
      address: "Carrer de Menorca, 50, 08005 Barcelona",
      telephone: 123456789,
      email: 'get@them.flowers',
      website: "www.gethtem.flowers",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu laoreet neque. Duis tortor mi, suscipit sit amet metus vel, rutrum varius velit. Quisque lorem dui, euismod ut interdum a, auctor non risus. Donec vel mollis varius rutrum mollis magna.",
      picture: ["https://res.cloudinary.com/drr74f5ty/image/upload/v1642542174/lillies2_zxtejj.jpg", "https://res.cloudinary.com/drr74f5ty/image/upload/v1642542174/bouquet3_eo2dan.jpg"],
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId: 1
    },
    {
      name: "Flowers United",
      category: "Flower Shop",
      latitude: 41.41208510223445,
      longitude: 2.198048067348841,
      products: ["flowers", "hibiscus", "rose", "red rose", "daffodil", "violet"],
      address: "Carrer de Ramón Turró, 120, 08005 Barcelona",
      telephone: 123456789,
      email: 'flowers@united',
      website: "www.flowers.united",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu laoreet neque. Duis tortor mi, suscipit sit amet metus vel, rutrum varius velit. Quisque lorem dui, euismod ut interdum a, auctor non risus. Donec vel mollis varius rutrum mollis magna.",
      picture: ["https://res.cloudinary.com/drr74f5ty/image/upload/v1642542505/hibiscus_kngzqs.jpg", "https://res.cloudinary.com/drr74f5ty/image/upload/v1642542174/jasmine_x2gfun.jpg"],
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
