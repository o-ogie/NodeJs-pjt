
const board = require('../repository/boardRepository')

exports.postWrite = async ({nickname, subject, content}) =>{
    const writeInfo = {nickname, subject, content}
    const result = await board.findAll(writeInfo)
    return result
}

exports.viewBoard = async ({idx}) =>{
    
    const result = await board.findOne({idx})
    return result
}

exports.listBoard = async () => {
    const result = await board.viewAll()
    return result
}

exports.modifyBoard = async (idx) => {
    const result = await board.modifyOne(idx)
    return result
}

exports.modifyBoardP = async (subject, content, idx) => {
    const modifyInfo = {subject, content, idx}
    const result = await board.modifyPost(modifyInfo)
    return result
}