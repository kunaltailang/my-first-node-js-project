const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name:String,
    description:String,
    price:Number,
    userID:String
})

const Product = mongoose.model('product',productSchema);

module.exports={
    Product
}
