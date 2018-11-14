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
        text: 'This is a very nice homepage.',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {}),
      queryInterface.bulkInsert('Textboxes', [{
        name: 'home2',
        text: 'You could say it is the greatest.',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {}),
      queryInterface.bulkInsert('Textboxes', [{
        name: 'home3',
        text: 'It makes homepages great again.',
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
        text: 'We are the greatest. Buy our bikes. They will not disapoint you!',
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
