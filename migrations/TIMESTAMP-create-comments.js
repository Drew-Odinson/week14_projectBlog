// 'use strict';

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.createTable('comments', {
//       id: {
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//         allowNull: false
//       },
//       content: {
//         type: Sequelize.TEXT,
//         allowNull: false
//       },
//       userId: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//         references: {
//           model: 'users',
//           key: 'id'
//         },
//         onDelete: 'CASCADE'
//       },
//       postId: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//         references: {
//           model: 'posts',
//           key: 'id'
//         },
//         onDelete: 'CASCADE'
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
//     await queryInterface.dropTable('comments');
//   }
// };
