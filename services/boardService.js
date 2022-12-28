const board = require('../repository/boardRepository')

exports.postWrite = async ({subject,content}) =>{
    const writeInfo = {subject,content}
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