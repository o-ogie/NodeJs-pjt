const express = require('express')
const router = express.Router()

const user = require('./user.route')
const board = require('./board/boardRoute')
const admin = require('./admin.route')


router.get('/',(req,res)=>{
    const {token} =req.cookies
    const cookies = JSON.parse(token)

    res.render('index.html',{token:cookies.nickname})

})

router.use('/user', user)
router.use('/board', board)
router.use('/admin', admin)


module.exports = router
