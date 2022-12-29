const boardService = require("../services/board.service")

exports.getWrite = (req, res) => {
    const {token} = req.cookies
    const cookies = token
                    .split(' ')
                    .map(v=>v.split('='))
                    .reduce((acc,val)=>{
                        const [k,v] = val
                        acc[k]=v
                        return acc
                    }, {})
    res.render('board/write.html',{cookies})
}

exports.postWrite = (req, res)=>{
    boardService.postWrite({body:req.body})
}