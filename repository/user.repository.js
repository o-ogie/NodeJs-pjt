const db = require("./db")

exports.findOne = async ({where}) => {
    try{
        console.log("where : " + where)
        const payload = Object.entries(where).map(([k,v]) =>`${k}='${v}'`).join(" and ")
        console.log("repository payload : " + payload)
        const sql = `SELECT * FROM user WHERE ${payload};`
        console.log("sql : " + sql)
        const [[result]] = await db.query(sql)
        return result
    }catch(e){
        throw new Error(e)
    }
}
