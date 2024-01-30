const { Comment } = require('../models')

const commentData = [
	{
		content: 'Good look into for HTML5',
		post_id: 1,
		user_id: 2
	},
	{
		content: 'JavaScript is super powerful.',
		post_id: 2,
		user_id: 1
	},
	{
		content: 'Designs far better than CSS alone',
		post_id: 3,
		user_id: 3
	},
	{
		content: 'Node.js and Express.js backend takes some time to learn.',
		post_id: 4,
		user_id: 3
	}
]

const seedComments = () => Comment.bulkCreate(commentData)

module.exports = seedComments