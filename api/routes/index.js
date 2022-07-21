const express = require("express")
const router = express.Router()

const userRoute = require("./user")
const contRoute = require("./cont")


router.use("/user", userRoute)
router.use("/cont", contRoute)

module.exports = router