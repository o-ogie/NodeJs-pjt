const db = require('./db')

exports.findAll = async (writeInfo) => {

    // 게시글 POST query
    const payload = Object.entries(writeInfo).map(([k,v]) => `"${v}"`).join(",")
    const sql = `INSERT INTO boardWrite (subject, content) VALUES (${payload})`
    const [result] = await db.query(sql)
    const sql2 = `SELECT * FROM boardWrite WHERE idx=(SELECT MAX(idx) FROM boardWrite)`
    const [result2] = await db.query(sql2)
    return result2
}

exports.findOne = async (idx) => {
    const payload = Object.entries(idx).map(([k,v])=>`"${v}"`)
    const sql = `SELECT * FROM boardWrite WHERE idx=${payload}`
    const [result] = await db.query(sql)
    return result
}

exports.viewAll = async ()=>{
    const sql = `SELECT * FROM boardWrite order by idx desc;`
    const [result] = await db.query(sql)
    return result
}

