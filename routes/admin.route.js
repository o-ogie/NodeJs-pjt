const express = require('express')
const router = express.Router()
const controll = require('../controllers/admin.controller')
router.get('/',controll.getIndex)

module.exports = router