const express = require('express')
const router = express.Router()

const user = require('./user.route')
const board = require('./board/boardRoute')
const admin = require('./admin.route')


router.get('/',(req,res)=>{
    const {token} = req.cookies
    res.render('index.html',{token})
})
router.use('/user', user)
router.use('/board', board)
router.use('/admin', admin)


module.exports = router
