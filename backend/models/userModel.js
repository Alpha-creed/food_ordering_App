const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
            unique:true,
        },
    },{
        timestamp:true,
    }
);

module.export  = mongoose.model("user",userSchema);