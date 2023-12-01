const express = require('express');
const router = express.Router();
const { Comment, User } = require('../models');

function isAuthenticated(req, res, next) {
    if (!req.session.loggedIn) {
        res.redirect('/login');
    } else {
        next();
    }
}


router.post('/', isAuthenticated, async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            userId: req.session.userId 
        });

        res.redirect('back'); 
    } catch (err) {
        res.status(500).json(err);
    }
});





module.exports = router;
