'use strict';
const truncate = require('../test/truncate.js');

// const { User, Session, Address, Order } = require('../models');
//
// const models = [Address, Session, User, Order];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert('Users', [{
        username: 'admin',
        password: 'password',
        lastName: 'Fox',
        firstName: 'John',
        type: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {}),
      queryInterface.bulkInsert('Users', [{
        username: 'emp',
        password: 'password',
        lastName: 'Rotten',
        firstName: 'Robbie',
        type: 'Employee',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {}),
      queryInterface.bulkInsert('Users', [{
        username: 'test@test.com',
        password: 'password',
        lastName: 'Jobs',
        firstName: 'Steve',
        type: 'Customer',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {}),
      queryInterface.bulkInsert('Textboxes', [{
        name: 'home1',
        text: 'Located in San Luis Obispo, we are the closest bike shop to Cal Poly, San Luis Obispo; a quick ride from downtown and an easy commute from Cuesta college, '
        + 'we place community first.',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {}),
      queryInterface.bulkInsert('Textboxes', [{
        name: 'home2',
        text: 'Voted 2018\'s Best Bike Shop by Mustang News, our goal is to provide a high level of expertise while being completely honest with you when '
        + 'it comes to advice, sales, fittings, and even guarantees.',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {}),
      queryInterface.bulkInsert('Textboxes', [{
        name: 'home3',
        text: 'We have been providing the Central Coast with great customer service since 1980.  From the beginning, we have put you and your bike first.',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {}),
      queryInterface.bulkInsert('Textboxes', [{
        name: 'location',
        text: 'Foxcycle Cyclery \n(805) 492-4821 5934 \nGrand Ave San Luis Obispo, CA 93410',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {}),
      queryInterface.bulkInsert('Textboxes', [{
        name: 'about',
        text: 'Our Mission: to provide the best bicycles, services, and gear selection backed by a staff of local experts that provide the'
        + ' knowledge and support to ignite and fuel your biking passion',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {}),
  ]);
},

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      // models.map(model =>
      //   model.destroy({
      //     where: {},
      //     force: true
      //   })
      // )
      queryInterface.bulkDelete('Sessions', null, {}),
      queryInterface.bulkDelete('Users', null, {}),
      queryInterface.bulkDelete('Textboxes', null, {})
    ])
  }
};
