const express = require('express');
const router = express.Router();
const {
    check,
    validationResult
} = require('express-validator');
const auth = require('../../middleware/auth');

const Post = require('../../models/Post');
const Profile = require('../../models/Profile');
const User = require('../../models/Users');
//@route  POST api/posts
//@desc   create a post
//@access Private 

router.get('/', [auth, [
    check('text', "text is required")
    .not()
    .isEmpty()

]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });




    }
    try {
        const user = await User.findById(req.user.id).select('-password');
        const newPost = new Post({
            text: req.body.text,
            name: user.name,
            avatar: user.avatar,
            user: req.user.id
        })
        const post = await newPost.save();
        res.json(post);

    } catch (err) {
        console.error(err.message)
        res.status(500).send(' Server error')
    }



});

//@route  GET api/posts
//@desc   Get all posts
//@access Private 

router.get('/', auth, (req, res) => {
    try {
        const posts = await Post.find().sort({
            date: -1
        });
        res.json(posts);

    } catch (err) {
        console.err(err.message);
        res.status(500).send('Server Error');
    }


});

//@route  GET api/posts/:id
//@desc   Get all posts
//@access Private 




router.get('/:id', auth, (req, res) => {
    try {
        const post = await Post.findById(req.params.id).sort({
            date: -1
        });
        if (!post) {
            return res.status(404).json({
                msg: 'post not found'
            });
        }

        res.json(post);

    } catch (err) {

        console.err(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({
                msg: 'post not found'
            });
        }

        res.status(500).send('Server Error');
    }


});

//@route  Delete api/posts
//@desc   Delete a posts
//@access Private 

router.delete('/:id', auth, (req, res) => {
    try {
        const post = await Post.findById(req.params.id)

        if (!post) {
            return res.status(404).json({
                msg: 'post not found'
            })
        }


        //check the user
        if (post.user.toString() !== req.user.id) {
            return res.status(401).json({
                msg: 'user not autjorized'
            });




        }
        await post.remove()

        res.json(msg: 'Post Removed');

    } catch (err) {
        console.err(err.message);
        res.status(500).send('Server Error');
    }


});



module.exports = router;