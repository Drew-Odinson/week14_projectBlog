const router = require('express').Router();

// Import routes
const apiRoutes = require('./api') 
const homeRoutes = require('./homeRoutes')
const dashboardRoutes = require('./dashboardRoutes') 


// Use the imported routes
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);


// Take the get routes and put them into blogRoutes
//Take everything else and put it the correct api file
// router.use('/login', loginRoutes);
// router.use('/posts', postRoutes);
// router.use('/comments', commentRoutes);


module.exports = router;