const db = require('db')

exports.findOne = async({where})=>{
    try{
        console.log(where)
    } catch(e){
        throw new Error
    }
}