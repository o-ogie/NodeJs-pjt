const userService = require("../services/user.service")


exports.getLogin = (req,res) => {
    res.render("index.html")
}