const express = require('express');
const router = express.Router();
const { Post, User } = require('../models');

function isAuthenticated(req, res, next) {
    if (!req.session.loggedIn) {
        res.redirect('/login');
    } else {
        next();
    }
}

router.get('/', isAuthenticated, async (req, res) => {
    try {
        const userPostsData = await Post.findAll({
            where: { userId: req.session.userId },
            include: [{ model: User }],
        });

        const userPosts = userPostsData.map((post) => post.get({ plain: true }));

        res.render('dashboard', { userPosts, loggedIn: true });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/new', isAuthenticated, (req, res) => {
    res.render('new-post', { loggedIn: true }); 
});

router.post('/new', isAuthenticated, async (req, res) => {
    try {
        const newPostData = await Post.create({
            ...req.body,
            userId: req.session.userId,
        });

        res.redirect('/dashboard');
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;
