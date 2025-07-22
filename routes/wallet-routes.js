const express = require("express")
const router = express.Router()
const {createWallet,getAllAddress,getDefaultAddress,getBalance,transferDefault} = require("../controller/wallet-controller")
const apiKeyMiddleware = require("../middleware/validateApikey")
const sublimitMiddleware = require("../middleware/subscriptionLimit")

router.post("/createwallet",apiKeyMiddleware,sublimitMiddleware, createWallet);
router.post("/createtransferdefault",apiKeyMiddleware,sublimitMiddleware,transferDefault);
router.get("/getaddresses/:walletId",apiKeyMiddleware,sublimitMiddleware,getAllAddress);  
router.get("/getdefaultaddress/:walletId",apiKeyMiddleware,sublimitMiddleware,getDefaultAddress); 
router.get("/getbalance",apiKeyMiddleware,sublimitMiddleware,getBalance); 
   
module.exports = router    