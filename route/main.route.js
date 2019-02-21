const express = require('express')
const router = express.Router()
const main_controller = require('../controllers/main.controller')
const search_controller = require('../controllers/search_controller')
const registration_controller = require('../controllers/registration_controller')
router.get('/', main_controller.index)
router.post('/', main_controller.login)
router.post('/profile', main_controller.detail)
router.post('/register',main_controller.register)
router.post('/regular',main_controller.regular)
router.post('/regular/course',search_controller.search)
router.post('/registercourse',registration_controller.registercourse)
router.post('/registercourseteacher',registration_controller.registercourseteacher)
module.exports=router
