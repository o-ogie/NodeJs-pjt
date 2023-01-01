const userRepository = require("../repository/user.repository")

exports.getUser = async ({user_id,user_pw}) => {
    const where = {user_id,user_pw}
    const user = await userRepository.findOne({where})
    return user
}

exports.getUserJoin = async ({user_id,user_pw,user_name,nickname,birth,gender,phone,tel}) => {
    const joinInfo = {user_id,user_pw,user_name,nickname,birth,gender,phone,tel}
    const userJoin = await userRepository.userJoin({joinInfo})
    console.log("userJoin : ",userJoin)
    if (userJoin){
        // const [profile] = await userRepository.userProfile({id:user_id})
        // console.log(profile)
        return true
    }
    
    return undefined

}

exports.getUserProfile = async (user_id) => {
    const userInfo = user_id
    // console.log("service user_id")
    // console.log(userInfo)
    // console.log("service user_id")
    const userProfile = await userRepository.userProfile(userInfo)
    return userProfile
}
