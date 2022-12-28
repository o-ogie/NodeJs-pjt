const service = require('../services/boardService')

exports.list = (req,res)=>{
    res.render('board/list.html')
}

exports.writeGet = (req,res)=>{
    res.render('board/write.html')
}

exports.writePost = async (req,res)=>{
    try{
    const {subject,content} = req.body;
    const [writePost] = await service.postWrite({subject,content})
    // res.setHeader("Set-Cookie",`token=${writePost.idx}; path=/;`)
    res.redirect(`/board/view?idx=${writePost.idx}`)
    } catch (e) {
        console.err
    }
}

exports.view = async (req,res)=>{
    // const {idx, subject, content} = req.body
    const {idx} = req.query
    console.log(idx)
    const [view] = await service.viewBoard({idx})
    res.render('board/view.html',{view})
}

exports.modify = (req,res)=>{
    res.render('board/modify.html')
}

exports.delete = (req,res)=>{
    // res.send('delete complete')
}