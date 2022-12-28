const service = require('../services/boardService')

exports.list = (req,res)=>{
    res.render('board/list.html')
}

exports.writeGet = (req,res)=>{
    res.render('board/write.html')
}

exports.writePost = async (req,res)=>{
    const {subject,content} = req.body;
    console.log("subject , content ::" + req.body.subject);
    const writePost = await service.postWrite({subject,content})
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