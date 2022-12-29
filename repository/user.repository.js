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
    const sql2 = `SELECT * FROM user WHERE user_id="${joinInfo.user_id}";`
    await db.query(sql) 
    const [result] = await db.query(sql2)
    return result
}

exports.userProfile = async (userInfo) => {
    const payload = userInfo
    console.log('payload:::::::::::::',payload)
    const sql = `SELECT * FROM user WHERE user_id="${payload.id}";`
    const [result] = await db.query(sql)

    return result
}