const router = require('express').Router();
const {Post, User}= require('../models');


router.get('/', async (req, res) => {
    try {
        const allPost = await Post.findAll({
            include: [User],
        });
        const everyPost = allPost.map(post => post.get({ plain: true }));
        res.render('homepage', {post: everyPost});
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/login', async (req, res) => {
    try {
        res.render('login');
    } catch (error) {
        res.status(500).json(error);
    }
});


module.exports = router;