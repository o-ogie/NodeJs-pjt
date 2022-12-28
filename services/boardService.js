const board = require('../repository/boardRepository')

exports.postWrite = async ({subject,content}) =>{
    const writeInfo = {subject,content}
    const result = await board.findAll(writeInfo)
    return result
}

exports.viewBoard = async ({idx}) =>{
    
    const result = await board.findOne({idx})
    console.log("service result")
    console.log(result)
    console.log("service result")
    return result
}