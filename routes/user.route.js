const express = require("express")
const router = express.Router()
const userController = require("../controllers/user.controller")
const { route } = require("./admin.route")

router.get("/login",userController.getLogin)
router.post("/login",userController.postLogin)
router.get("/join",userController.getJoin)
router.post("/join",userController.postJoin)
router.get('/logout',userController.logout)
router.get("/profile",userController.getProfile)

module.exports = router