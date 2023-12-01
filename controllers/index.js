const router = require('express').Router();

// Import routes
const homeRoutes = require('./homeRoutes')
const blogRoutes = require('./blog-routes'); 
const loginRoutes = require('./api/login-routes');
const postRoutes = require('./api/post-routes');
const dashboardRoutes = require('./dashboard-routes');
const commentRoutes = require('./comment-routes');
const apiRoutes = require('./api');

// Use the imported routes
router.use('/', blogRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);


// Take the get routes and put them into blogRoutes
//Take everything else and put it the correct api file
// router.use('/login', loginRoutes);
// router.use('/posts', postRoutes);
// router.use('/comments', commentRoutes);


module.exports = router;