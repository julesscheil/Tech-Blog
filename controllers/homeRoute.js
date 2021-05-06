const router = require('express').Router();
const {
    User,
    Blog
} = require('../models');
const withAuth = require('../utils/auth');

// get blog data
router.get('/', async (req, res) => {
    try {
      // Get all projects and JOIN with user data
      const blogData = await Blog.findAll({
        include: [
          {
            model: User,
            attributes: ['username'],
          },
        ],
      });
  
      // Serialize data so the template can read it
      const blogs = blogData.map((blog) => blog.get({ plain: true }));
  
      // Pass serialized data and session flag into template
     res.render("dashboard", {blogs})
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
module.exports = router;