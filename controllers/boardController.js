const service = require('../services/boardService')

exports.list = (req,res)=>{
    res.render('board/list.html')
}

exports.writeGet = (req,res)=>{
    const {token} = req.cookies

    res.render('board/write.html',{nickname: JSON.parse(token).nickname})
}

exports.writePost = async (req,res)=>{
    const {nickname, subject,content} = req.body;
    const writePost = await service.postWrite({nickname, subject, content})
    res.redirect('/board/view')
}

exports.view = (req,res)=>{
    res.render('board/view.html')
}

exports.modify = (req,res)=>{
    res.render('board/modify.html')
}

exports.delete = (req,res)=>{
    // res.send('delete complete')
}