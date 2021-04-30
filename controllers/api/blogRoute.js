const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req,res) => {
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