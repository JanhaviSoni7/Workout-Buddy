const express = require('express');

//controllers functions
const { loginUser, signupUser } = require('../controllers/userController');

const router = express.Router();

//login route
router.post('/login', loginUser);

//signuproute
router.post('/signup', signupUser);

module.exports = router;