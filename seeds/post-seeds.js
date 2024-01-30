const { Post } = require('../models')

const postData = [
	{
		title: 'Good look into for HTML5',
		content: 'Work with and learn the basics of HTML5 on how to build uses sites.',
		user_id: 1
	},
	{
		title: 'JavaScript is super powerful',
		content: 'Learn the building blocks of JavaScript to create some wonderful projects while diving deeped into what all it can do.',
		user_id: 2
	},
	{
		title: 'Designs far better than CSS alone',
		content: 'Find many different was to style some of your favorite sites using powerful building tools.',
		user_id: 3
	},
	{
		title: 'Node.js and Express.js backend takes some time to learn',
		content: 'Here we will cover Node.js as well as Express.js to help build your backend skills.',
		user_id: 1
	}
]

const seedPosts = () => Post.bulkCreate(postData)

module.exports = seedPosts