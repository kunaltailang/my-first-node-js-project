const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username:String,
    email:String,
    mobile:String,
    password:String,
    address:String,
})

const User = mongoose.model('user',userSchema);

module.exports={
    User
}