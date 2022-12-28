const db = require('./db')

exports.findAll = async (writeInfo) => {
    const payload = Object.entries(writeInfo).map(([k,v]) => `"${v}"`).join(",")
    console.log("=====payload======")
    console.log(payload)
    console.log("=====payload======")
    const sql = `INSERT INTO boardWrite (subject, content) VALUES (${payload})`
    const [insert] = await db.query(sql)
    const sql2 = `SELECT * FROM boardWrite (subject)`
    console.log("======repository result========")
    console.log(result)
    console.log("======repository result========")
    return result
}
