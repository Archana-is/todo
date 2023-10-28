const User = require('../controllers/User.controller')
const UserMiddleware = require('../middleware/User.middleware')
const express=require('express')
const router =express.Router()


router.post('/createUser',UserMiddleware.validateCreateUser,User.createUser)

module.exports = router