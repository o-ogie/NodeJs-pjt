const express = require('express')
const router = express.Router()

const user = require('./user.route')
// const board = require('./board.route')
// const admin = require('./admin')

router.use('/user', user)
// router.use('/board', board)
// router.use('/admin', admin)

module.exports = router
