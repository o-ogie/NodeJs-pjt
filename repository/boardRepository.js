const db = require('./db')

exports.findAll = async ({writeInfo}) => {
    console.log(writeInfo)
    // 게시글 POST query
    const payload = Object.entries(writeInfo).map(([k,v]) => `"${v}"`).join(",")
    console.log('payload::::::',payload)
    const sql = `INSERT INTO board (writer, subject, content) VALUES (${payload})`
    db.query(sql)
    const sql2 = `SELECT * FROM board WHERE idx=(SELECT MAX(idx) FROM board)`
    const [result2] = await db.query(sql2)
    return result2
}


exports.findOne = async ({idx}) => {
    const sql = `SELECT * FROM board WHERE idx=${idx}`
    const [result] = await db.query(sql)
    return result
}

exports.viewAll = async ()=>{
    const sql = `SELECT * FROM board order by idx desc;`
    const [result] = await db.query(sql)
    return result
}

exports.deleteOne = ({index}) => {
    const sql = `DELETE FROM board WHERE idx=${index};`
    db.query(sql)
}


exports.hitCount = async({idx,hit})=>{
    const [result] = await this.findOne({idx})
    console.log(result)
    result.hit = hit
    const sql = `UPDATE board SET hit=${result.hit} WHERE idx=${idx}`
    db.query(sql)
}

const writeInfo = {
    nickname : '우기',
    subject : 'ㅎㅇ',
    content : 'ㅎㅇ'
}

this.findAll({writeInfo})