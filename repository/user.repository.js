const db = require("./db")

exports.findOne = async ({where}) => {
    try{
        const payload = Object.entries(where).map(([k,v]) =>`${k}='${v}'`).join(" and ")
        const sql = `SELECT * FROM user WHERE ${payload};`
        const [[result]] = await db.query(sql)
        return result
    }catch(e){
        throw new Error(e)
    }
}

exports.userJoin = async ({joinInfo}) => {
    const payload = Object.entries(joinInfo).map(([k,v]) =>`'${v}'`).join(",")
    const sql = `INSERT INTO user (user_id,user_pw,user_name,nickname,birth,gender,phone,tel) values (${payload});`
    const result = await db.query(sql) 

    return result
}

exports.userProfile = async (userInfo) => {
    const payload = userInfo.user_id
    console.log("before reform payload")
    console.log(payload)
    console.log("before reform payload")
    const sql = `SELECT * FROM user WHERE user_id="${payload}";`
    console.log("=repository=")
    console.log(sql)
    console.log("=repository=")
    const [result] = await db.query(sql)

    return result
}