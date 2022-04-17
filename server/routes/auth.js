const router = require("express").Router();

const {
    register,
    login,
    getAllUsers
} = require("../controllers/auth")

router.route("/").get(getAllUsers)
router.route("/register").post(register)
router.route("/login").post(login);


module.exports = router;