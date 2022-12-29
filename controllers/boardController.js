const service = require('../services/boardService')

exports.list = async (req,res)=>{
    const list = await service.listBoard()
    console.log(list)
    res.render('board/list.html',{list})
}

exports.writeGet = (req,res)=>{
    const {token} = req.cookies

    res.render('board/write.html',{nickname: JSON.parse(token).nickname})
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