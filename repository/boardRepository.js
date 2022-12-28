const db = require('./db')

exports.findAll = async (writeInfo) => {

    // 게시글 POST query
    const payload = Object.entries(writeInfo).map(([k,v]) => `"${v}"`).join(",")
    console.log("=====payload======")
    console.log(payload)
    console.log("=====payload======")
    const postWrite = `INSERT INTO board (writer, subject, content) VALUES (${payload})`
    db.query(postWrite)

    // 최신글 idx return
    const getIdx = `SELECT max(idx) FROM board`
    const [result] = await db.query(getIdx)
    console.log("======repository result========")
    console.log(result)
    console.log("======repository result========")
    return result
}
