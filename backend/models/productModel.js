const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema(
    {
        name:{type:String,required:true}
    }
)

const ProductSchema = new Schema(
    {
        name:{type:String,required:true},
        adjective:{type:String,reqired:true},
        description:{type:String,required:true},
        price:{type:String,required:true},
        category:{type:String,required:true},
    }
)

module.exports = mongoose.model('Product',ProductSchema);
// module.exports = mongoose.model('Categories',categorySchema);