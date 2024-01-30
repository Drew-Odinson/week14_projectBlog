// 'use strict';

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.createTable('users', {
//       id: {
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//         allowNull: false
//       },
//       username: {
//         type: Sequelize.STRING,
//         allowNull: false
//       },
//       email: {
//         type: Sequelize.STRING,
//         allowNull: false,
//         unique: true,
//         validate: {
//           isEmail: true
//         }
//       },
//       password: {
//         type: Sequelize.STRING,
//         allowNull: false,
//         validate: {
//           len: [8]
//         }
//       },
//       createdAt: {
//         allowNull: false,
//         type: Sequelize.DATE,
//         defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
//       },
//       updatedAt: {
//         allowNull: false,
//         type: Sequelize.DATE,
//         defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
//       }
//     });
//   },
//   down: async (queryInterface, Sequelize) => {
//     await queryInterface.dropTable('users');
//   }
// };
