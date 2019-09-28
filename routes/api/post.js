const express = require('express');
const router = express.Router();
//@route  Get api/usersProfile
//@desc   Test route
//@access Public Value 

router.get('/', (req, res) => res.send('Hello Cito you are on your Post api'));




module.exports = router;