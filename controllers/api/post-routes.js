const router = require('express').Router();

router.put('/:id', async (req, res) => {
    try {
      const updatedPostData = await Post.update(req.body, {
        where: {
          id: req.params.id,
          // Optionally, ensure the post belongs to the logged-in user
          // userId: req.session.userId 
        },
      });
  
      if (!updatedPostData[0]) {
        res.status(404).json({ message: 'No post found with this id or not authorized!' });
        return;
      }
  
      res.json({ message: 'Post updated successfully!' });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  
  router.delete('/:id', async (req, res) => {
    try {
      const postData = await Post.destroy({
        where: {
          id: req.params.id,
          // Optionally, ensure the post belongs to the logged-in user
          // userId: req.session.userId
        },
      });
  
      if (!postData) {
        res.status(404).json({ message: 'No post found with this id or not authorized!' });
        return;
      }
  
      res.json({ message: 'Post deleted successfully!' });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;