const express = require("express")
const {reqOtp,verifyOtp,RegisterUser,LoginUser,refreshAccessToken,logout,decryptApikey} = require("../controller/auth-controller")
const {ratelimitingOtp} = require("../middleware/rateLimiting")
const router = express.Router()


router.post("/reqotp",reqOtp)
// ratelimitingOtp() this is a function that returns a middleware thats why we call ratelimitingOtp() 
// if it was a middleware we just do ratelimitingOtp like this router.post("/verifyotp",ratelimitingOtp,verifyOtp)
router.post("/verifyotp",ratelimitingOtp(),verifyOtp)
router.post("/register",RegisterUser)
router.post("/login",LoginUser)
router.post("/refreshtoken",refreshAccessToken)
router.post("/logout",logout)
router.get("/userapikey/:userId",decryptApikey)




module.exports = router

