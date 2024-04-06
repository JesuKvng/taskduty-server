const express = require('express')
const router = express.Router();


const {registration, login, isLoggedIn} = require('../controller/userController')

// register router
router.post('/register',registration);

// login route
router.post('/login',login)

// isLoggedIn
router.get('/isloggedin',isLoggedIn)


 
module.exports = router;