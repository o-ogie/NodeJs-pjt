const userRepository = require("../repository/user.repository")

exports.getUser = async ({user_id,user_pw}) => {
    const where = {user_id,user_pw}
    console.log("where : " + where)
    const user = await userRepository.findOne({where})
    return user
}

exports.getUserJoin = async ({user_id,user_pw,user_name,user_pwcheck,user_email,user_gender}) => {
    const joinInfo = {user_id,user_pw,user_name,user_pwcheck,user_email,user_gender}
    const userJoin = await userRepository.userJoin({joinInfo})
    return userJoin
}