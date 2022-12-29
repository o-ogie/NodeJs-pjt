const express = require('express')
const router = express.Router()

const user = require('./user.route')
const board = require('./board/boardRoute')
const admin = require('./admin.route')

router.get('/',(req,res)=>{
    const cookies = req.cookies.token
    // const cookies = req.cookies.token === '' ? undefined : JSON.parse(req.cookies.token).nickname
    console.log(cookies)
    res.render('index.html', {token:cookies})
})

router.use('/user', user)
router.use('/board', board)
router.use('/admin', admin)


module.exports = router
