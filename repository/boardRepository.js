const db = require('./db')

exports.findAll = async (writeInfo) => {
    const payload = Object.entries(writeInfo).map(([k,v]) => `"${v}"`).join(",")
    console.log("=====payload======")
    console.log(payload)
    console.log("=====payload======")
    const sql = `INSERT INTO boardWrite (subject, content) VALUES (${payload})`
    const [result] = await db.query(sql)
    const sql2 = `SELECT * FROM boardWrite WHERE idx=(SELECT MAX(idx) FROM boardWrite)`
    const [result2] = await db.query(sql2)
    console.log(result2)
    return result2
}

exports.findOne = async (idx) => {
    console.log("=====repository viewInfo======")
    console.log(idx)
    console.log("=====repository viewInfo======")
    const payload = Object.entries(idx).map(([k,v])=>`"${v}"`)
    console.log('payload' + '=' + payload)
    const sql = `SELECT * FROM boardWrite WHERE idx=${payload}`
    console.log("findOne sql")
    console.log(sql)
    console.log("findOne sql")
    const [result] = await db.query(sql)
    console.log(result)
    return result
}

