const express = require("express")
const {decryptApikey} = require("../controller/apikey-controller")
const authMiddleware = require("../middleware/authentication-middleware")
const router = express.Router()



router.get("/userapikey/:userId",authMiddleware, decryptApikey)

 
  

module.exports = router