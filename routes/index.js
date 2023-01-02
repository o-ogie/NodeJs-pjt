const express = require('express')
const router = express.Router()


const user = require('./user.route')
const board = require('./board/boardRoute')
const admin = require('./admin.route')


router.get('/', (req,res)=>{
    // if(res.cookies.token !== undefined){
    //     const cookies = req.cookies.token !== '' ? JSON.parse(req.cookies.token).nicknamed : undefined
    //     console.log(cookies)
    //     res.render('index.html', {token:cookies})
    // } else{
    //     res.render("index.html")
    // }
    const {token} = req.cookies
    console.log(token)
    res.render('index.html',{token})
})

router.use('/user', user)
router.use('/board', board)
router.use('/admin', admin)


module.exports = router
