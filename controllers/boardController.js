exports.list = (req,res)=>{
    res.render('board/list.html')
}

exports.write = (req,res)=>{
    res.render('board/write.html')
}

exports.view = (req,res)=>{
    res.render('board/view.html')
}

exports.modify = (req,res)=>{
    res.render('board/modify.html')
}

exports.delete = (req,res)=>{
    res.send('delete complete')
}