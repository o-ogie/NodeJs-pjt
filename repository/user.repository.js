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

exports.userJoin = async ({joinInfo}) => {
    console.log("userJoin joinInfo : " + joinInfo)
    const payload = Object.entries(joinInfo).map(([k,v]) =>`'${v}'`).join(",")
    console.log("userJoin payload : " + payload)
    const sql = `INSERT INTO user (user_id,user_pw,user_name,user_pwcheck,user_email,user_gender) values (${payload});`
    return null
}
