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
    console.log(joinInfo.user_id, payload)
    const sql = `INSERT INTO user (user_id,user_pw,user_name,nickname,birth,gender,phone,tel) values (${payload});`
    const sql2 = `SELECT * FROM user WHERE user_id="${joinInfo.user_id}";`
    const checkSql = `SELECT user_id , nickname FROM user WHERE user_id="${joinInfo.user_id}" or nickname="${joinInfo.nickname}";`
    const [[result2]] = await db.query(checkSql) // INSERT 전 user_id 있는지확인
    

    if(result2===undefined){
        db.query(sql)
        return true

    }else{
        return false
    }
    
}

exports.userProfile = async (userInfo) => {
    const payload = userInfo
    const sql = `SELECT * FROM user WHERE user_id="${payload.id}";`
    const [result] = await db.query(sql)

    return result
}

exports.userIdCheck = async (checkIdtest) => {
    const test = req.body
    const test1 = checkIdtest
    const sql = `SELECT * FROM user WHERE user_id = ${reqJson.user_id}`
    const result = await db.query(sql)
    return result
}

// const joinInfo = {
//     user_name: '6666',
//     user_id: '6666',
//     user_pw: 'tpdnr',
//     nickname: '6666',
//     birth: '2000-01-01',
//     gender: '남자',
//     phone: '010-1111-1111',
//     tel: '',

//   }

// this.userJoin({joinInfo})