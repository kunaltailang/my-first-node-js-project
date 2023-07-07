const mongoose = require('mongoose') //include mongoose

const Connection = mongoose.connect("mongodb+srv://kunal:kunal@cluster0.gsecbwl.mongodb.net/my-first-nodejs-project") //connrction with mongoose database

module.exports={
    Connection
}