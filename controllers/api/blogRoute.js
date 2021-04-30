const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req,res) => {
    try {
        const newBlogPost = await Blog.create({
            ...req.body,
            user_id: req.session.user_id,
        })
        res.status(200).json(newBlogPost);
    } catch(err) {
        res.status(400).json(err)
    }
})

router.delete('/:id', withAuth, async(req,res) => {
    try {
        const blogData = await Blog.destroy({
          where: {
            id: req.params.id,
            user_id: req.session.user_id,
          },
        });
    
        if (!blogData) {
          res.status(404).json({ message: 'No blog found' });
          return;
        }
    
        res.status(200).json(blogData);
      } catch (err) {
        res.status(500).json(err);
      }

})

module.exports = router;