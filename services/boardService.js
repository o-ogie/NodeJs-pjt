const board = require('../repository/boardRepository')

exports.postWrite = async ({subject,content}) =>{
    const writeInfo = {subject,content}
    const result = await board.findAll(writeInfo)
    return result
}