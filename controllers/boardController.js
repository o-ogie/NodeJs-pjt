const service = require('../services/boardService')

exports.list = async (req,res)=>{
    const list = await service.listBoard()
    const token = JSON.parse(req.cookies.token)
    console.log(token)
    if (token !== '') {
        res.render('board/list.html',{list,token})
    } else {
    res.send(`<script type="text/javascript">alert("로그인이 필요합니다")
    location.href="/index.html"</script>`)
    }
}

exports.writeGet = (req,res)=>{
    const {token} = req.cookies
    const nick = JSON.parse(req.cookies.token)
    res.render('board/write.html',{nickname: JSON.parse(token).nickname, nick})
}

exports.writePost = async (req,res)=>{

    const {nickname, subject, content} = req.body;
    if (subject === ''){
        res.send(`<script type="text/javascript">alert("제목을 입력해주세요")
        location.href="/board/write"</script>`)
    } else { 
    const writePost = await service.postWrite({nickname, subject,content})
    res.redirect(`/board/view?idx=${writePost.idx}`)
    } 
}

exports.view = async (req,res)=>{
    // const { subject, content} = req.body
    const cookies = JSON.parse(req.cookies.token)
    const nick = cookies.nickname
    const {idx} = req.query
    const [view] = await service.viewBoard({idx})
    const hit = ++(view.hit)
    service.hitCount({idx,hit})
    console.log(nick, view.writer)
    const bool = nick == view.writer
    const token = {
        view,
        bool,
        cookies
    }
    console.log('token:::::',token.cookies)
    res.render('board/view.html',{token})
}

exports.modifyGet = async (req,res)=>{
    const {idx} = req.query
    const [modifyGet] = await service.modifyBoard(idx)
    res.render(`board/modify.html`,{modifyGet})
}

exports.modifyPost = async (req,res) => {
    const {idx, writer, subject, content, date, hit} = req.body
    const modifyPost = await service.modifyBoardP(idx, writer, subject, content, date, hit)
    res.redirect(`/board/view?idx=${idx}`)
}

exports.delete = (req,res)=>{
    const index = req.query.idx
    service.deleteBoard({index})
    res.redirect('/board/list')
}