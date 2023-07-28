const mongoose = require("mongoose")
const express = require("express");
const bodyParser = require("body-parser")
const cors = require("cors");
const { db } = require("./db");
const app = express();
const productRouter = require('./routes/productRoutes')


require('dotenv').config()
const PORT = process.env.PORT||5000 

var corsOptions ={
    origin:"http://localhost:3000"  
}

//middleware
app.use(cors(corsOptions))
app.use(express.json())

app.use(bodyParser.urlencoded({extended:true}))


 
app.get("/",(req,res)=>{
    res.json({message:"Welcome to food Ordering"});
})

app.use('/api/',productRouter); 


const server = ()=>{
        db()
        app.listen(PORT,()=>{
            console.log('listening to port:',PORT)
        })
        app.on('error',console.error.bind(console,'MongoDB connection error:'))

    }
server()  
    
