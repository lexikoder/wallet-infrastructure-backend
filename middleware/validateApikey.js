const SubscriptionApikey = require("../models/subscription-apikeys");
const crypto = require("crypto");
const apiKeyMiddleware = async (req, res, next) => {
  try {
    const apiKey = req.headers["x-api-key"];

    if (!apiKey) {
      return res.status(401).json({
        success: false,
        message: "access denied no apikey provided.please try again",
      });
    }

    const hashedapikey = crypto
      .createHash("sha256")
      .update(apiKey)
      .digest("hex");

    const subapikey = await SubscriptionApikey.findOne({
      "apikey.hashedkey": hashedapikey,
    });

    if (!subapikey) {
      return res.status(401).json({
        success: false,
        message: "data not found",
      });
    }
    req.apikey = apiKey;
    next();
  } catch (error) {
    next(error);
  }
};
module.exports = apiKeyMiddleware;
