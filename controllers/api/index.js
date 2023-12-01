const router = require('express').Router();

// Import routes
const postRoutes = require('./post-routes');

// Use the imported routes
router.use('/post', postRoutes);



module.exports = router;