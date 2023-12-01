const express = require('express');
const { Post, User, Comment } = require('../models');
 

const router = express.Router();


router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ model: User }], 
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('homepage', {
      loggedIn: req.session.loggedIn,
      posts
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/signup', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.userId = userData.id;
      req.session.loggedIn = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/post', async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      userId: req.session.userId 
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/comment', async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      userId: req.session.userId 
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.get('/post/:id', async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id, {
        include: [{ model: User }, { model: Comment }],
      });
  
      if (!postData) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
  
      const post = postData.get({ plain: true });
      res.render('single-post', { post, loggedIn: req.session.loggedIn });
    } catch (err) {
      res.status(500).json(err);
    }
  });




module.exports = router;
