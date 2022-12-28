const board = require('../repository/boardRepository')

exports.postWrite = async ({nickname, subject, content}) =>{
    const writeInfo = {nickname, subject, content}
    const result = await board.findAll(writeInfo)
    return result
}