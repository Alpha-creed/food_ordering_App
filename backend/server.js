const mongoose = require("mongoose")
const express = require("express");
const bodyParser = require("body-parser")
const cors = require("cors");
const { db } = require("./db");
const app = express();
const productRouter = require('./routes/productRoutes');
const Order = require('./models/orderModel');
const userRouter = require('./routes/userRoutes');
 
require('dotenv').config()
const PORT = process.env.PORT||5000 
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const calculateOrderAmt = (orderItems)=>{
    const initialValue = 0;
    const itemPrice = orderItems.reduce(
        (previousValue,currentValue)=>
        previousValue + currentValue.price * currentValue.amount,initialValue
    );
    return itemPrice*100;
} 
 
//middleware
app.use(cors(corsOptions))
app.use(express.json())

app.use(bodyParser.urlencoded({extended:true}))


var corsOptions ={
    origin:"http://localhost:3000"  
}
app.use(
    express.json({
        verify:function(req,res,buf){
            if(req.originalUrl.startWith('/webhook')){
                req.rawBody = buf.toString();
            }
        },
    })
);

app.post('/webhook', async(req, res) => {
    let eventType,data;
    if(process.env.STRIPE_WEBHOOK_SECRET){
    const sig = request.headers['stripe-signature'];
    let event;
  
    try {
      event = stripe.webhooks.constructEvent(
        req.body, 
        sig, 
        process.env.STRIPE_WEBHOOK_SECRET);
    
    } catch (err) {
      console.log("Webhook signature verification failed");
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }
    data = event.data;
    eventType = event.type;
}else{
    data = req.body.data;
    eventType = req.body.type;
}

  
    // Handle the event
    switch (eventType) {
      case 'payment_intent.succeeded':
        // const paymentIntentSucceeded = event.data.object;
        console.log("Payment Captured");
        // Then define and call a function to handle the event payment_intent.succeeded
        break;
        case 'payment_intent.payment_failed':
            console.log("Payment failed");
      default:
        console.log(`Unhandled event type ${eventType}`);
    } 
  
    // Return a 200 response to acknowledge receipt of the event
    res.sendStatus(200);
  });

  app.use('/api/',productRouter); 
  app.use('/api/',userRouter);

const server = ()=>{
        db()
        app.listen(PORT,()=>{ 
            console.log('listening to port:',PORT)
        })
        app.on('error',console.error.bind(console,'MongoDB connection error:'))

    }

app.post('/create-payment-intent',async(req,res)=>{
    try {
        const {orderItems,shippingAddress,userId} = req.body;
        
        const totalPrice = calculateOrderAmt(orderItems);
        const taxPrice =0;
        const shippingPrice=0;
         
        const order = new Order({
            orderItems,
            shippingAddress,
            paymentMethod:'stripe',
            totalPrice,
            taxPrice,
            shippingPrice,
            user:'',
        }); 

        await order.save();

        //Temp 
        // const totalPrice = 100;
        const paymentIntent = await stripe.paymentIntents.create({
            amount:totalPrice,
            currency:'usd',
        });

        //TODO:Create Order


        res.send({
            clientSecret:paymentIntent.client_secret
        });
    } catch (e) {
        res.status(400).json({
            error:{
                message:e.message
            }
        })
    }
})

app.listen(4242, ()=>console.log('Running on port 4242'));


 
app.get("/",(req,res)=>{
    res.json({message:"Welcome to food Ordering"});
})


server()  
     
