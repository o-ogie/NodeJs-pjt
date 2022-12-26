const userRepository = require("../repository/user.repository")

exports.getUser = async ({user_id,user_pw}) => {
    const where = {user_id,user_pw}
    console.log("where : " + where)
    const user = await userRepository.findOne({where})
    return user
}