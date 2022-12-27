
exports.list = (req,res)=>{
    res.render('board/list.html')
}

exports.writeGet = (req,res)=>{
    res.render('board/write.html')
}

exports.writePost = (req,res)=>{
    // const {subject, content} = req.body
    // if(subject === ''){
    //     res.send(`
    //     <script type="text/javascript">
    //         alert("${'제목을 입력해주세요'}")
    //         location.href="${path}"
    //     </script>
    //     `)
    // } else {
    //     `INSERT INTO jung(subject, content) values('${subject}', '${content}')`
    // }
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