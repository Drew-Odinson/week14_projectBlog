require('dotenv').config();

const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const path = require('path')
const sequelize = require('./config/connection')
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const routes = require('./controllers')
const helpers = require('./utils/helpers')

// Create an Express application
const app = express()

// Set the port to either the environment's port or 3001
const PORT = process.env.PORT || 3001

// Create an instance of Handlebars with custom helpers


const sess = {
	secret: 'Secret', 
	cookie: {
		maxAge: 120000, 
		httpOnly: true, 
		secure: false, 
		sameSite: 'strict' 
	},
	resave: false, 
	saveUninitialized: true, 
	store: new SequelizeStore({
		db: sequelize 
	})
}


app.use(session(sess))
const hbs = exphbs.create({ helpers })
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'public')))

app.use(routes)


sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => console.log(`App now listening on port ${PORT}`))
})