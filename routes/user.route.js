const express = require('express');
const {handleSignup, handleLogin} = require('../controllers/user.controller');

const router = express.Router();

router.post('/login', handleLogin)
router.post('/signup', handleSignup)

module.exports = router;