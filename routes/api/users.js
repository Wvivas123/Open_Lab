const express = require("express");
const router = express.Router()
const {
    check,
    validationResult
} = require('express-validator');

//@route POST api/user
//@desc Register User
//@acess Public

router.post('/', [
    //name is required for user
    check('name', 'name is requiered')
    .not()
    .isEmpty(),
    //Checks email
    check('email', 'please include valid email').isEmail(),
    //check password
    check('password', 'Please enter valid password').isLength({
        min: 6
    })
], (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });




    }
    res.send("User route");
})




module.exports = router;