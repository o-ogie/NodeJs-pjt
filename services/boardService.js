const board = require('../repository/boardRepository')

exports.postWrite = async ({subject,content}) =>{
    const writeInfo = {subject,content}
    console.log("subject , content Service ::" + writeInfo);
    const result = await board.findAll({writeInfo})
    return result
}