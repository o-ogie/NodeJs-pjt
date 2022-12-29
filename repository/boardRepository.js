const db = require('./db')

exports.findAll = async (writeInfo) => {

    // 게시글 POST query
    const payload = Object.entries(writeInfo).map(([k,v]) => `"${v}"`).join(",")
    const sql = `INSERT INTO board (subject, content) VALUES (${payload})`
    const [result] = await db.query(sql)
    const sql2 = `SELECT * FROM board WHERE idx=(SELECT MAX(idx) FROM board)`
    const [result2] = await db.query(sql2)
    return result2
}

exports.findOne = async (idx) => {
    const payload = Object.entries(idx).map(([k,v])=>`"${v}"`)
    const sql = `SELECT * FROM board WHERE idx=${payload}`
    const [result] = await db.query(sql)
    return result
}

exports.viewAll = async ()=>{
    const sql = `SELECT * FROM board order by idx desc;`
    const [result] = await db.query(sql)
    return result
}

