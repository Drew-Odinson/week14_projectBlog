const { User } = require('../models')

const userData = [
	{
		name: 'Wade Wilson',
		email: 'DP_rules_All@example.com',
		password: 'password123'
	},
	{
		name: 'Bruce Wayne',
		email: 'I-AM-BATMAN@example.com',
		password: '123password'
	},
	{
		name: 'John Holmes',
		email: 'bigman@example.com',
		password: 'IamTHEboss'
	},
	{
		name: 'Ozzy Osbourne',
		email: 'I-ate-the-bat@example.com',
		password: 'CrazyTrain'
	},
	{
		name: 'Charlie Sheen',
		email: 'Winning@example.com',
		password: 'keepuporshutup'
	}
]

const seedUsers = () => User.bulkCreate(userData)

module.exports = seedUsers