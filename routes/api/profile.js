const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Profile = require('../../models/Profile');
const User = require('../../models/User');
//@route  Get api/profile/myprofile 
//@desc   Get Current users Profile 
//@access Private   

router.get('/', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({user: req.user.id}).populate();

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')

    }
});




module.exports = router;