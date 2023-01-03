const express = require('express')
const router = express.Router()


const user = require('./user.route')
const board = require('./board/boardRoute')
const admin = require('./admin.route')

router.get('/',(req,res)=>{

    let cookies = Object.values(req.cookies).toString()
    cookies = cookies === '' ? undefined : JSON.parse(cookies).nickname

    res.render('index.html',{token: cookies})
})

router.use('/user', user)
router.use('/board', board)
router.use('/admin', admin)


module.exports = router
