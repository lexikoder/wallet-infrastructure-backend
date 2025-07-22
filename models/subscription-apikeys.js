const mongoose = require("mongoose")


const apiTypeSchema = new mongoose.Schema({
    apitype:{
     type:String,
   
    },
    count:{
     type:Number,
     default:0
    },
    expiresat: {
    type: Number,
    // default: () => {
    //     // putting this in a function allows this to not run when the schema is defined it should only run when document is created
    //     return Date.now() + 30 * 24 * 60 * 60 * 1000} // 30 days from now
  }
},{ _id: false })

const subscriptionCountSchema = new mongoose.Schema({
    subscription:{
     type:String,
     enum:["free","premium"],
     default:"free"
    },
    apicount:[apiTypeSchema]  
},{ _id: false })

const encryptedkeySchema = new mongoose.Schema({
    iv:{
     type:String,
   
    },
    encryptedkey:{
     type:String,
    },
    hashedkey:{
     type:String
    }
},{ _id: false })

const subscriptionApikeySchema = new mongoose.Schema({
    user:{
         type: mongoose.Schema.Types.ObjectId, ref: "User",
         required:[true,"userId is  required"],
         unique:true
        },
    apikey:encryptedkeySchema,
    subscription:subscriptionCountSchema
},{timestamps:true})
 
const SubscriptionApikey =mongoose.model("SubscriptionApikey",subscriptionApikeySchema)

module.exports = SubscriptionApikey
 
     