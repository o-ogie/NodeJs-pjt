const express = require("express")
const router = express.Router()
const userController = require("../controller/user.controller")

router.get("/login",userController.getLogin)
router.post("/login",userController.postLogin)
router.get("/join",userController.getJoin)
router.post("/join",userController.postJoin)

module.exports = router