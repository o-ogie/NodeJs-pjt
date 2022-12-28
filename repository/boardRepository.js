const db = require('./db')

exports.findAll = async ({writeInfo}) => {
    const payload = Object.entries(writeInfo).map(([k,v]) => `${k}='${v}'`).join(",")
    console.log("payload ::" + payload);
    const sql = `INSERT INTO boardWrite (subject, content) VALUES (${payload})`
    const [result] = await db.query(sql)
    console.log(result)
    return result
}
