import { styled } from "styled-components"
import {CardElement, Elements, useElements, useStripe} from '@stripe/react-stripe-js';
import { loadStripe } from "@stripe/stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getProducts, getProductsCart } from "../stores/menu/productSlice";
import { clearAddress, getAddress } from "../stores/userInfo/addressSlice";
import { useNavigate } from "react-router-dom";
import { cartProduct, clearCart } from "../stores/cart/cartSlice";
import Button from "./elements/Button";



const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

export const StripeWrapper=()=>{
    const options = {
        // passing the client secret obtained from the server
        clientSecret:process.env.REACT_APP_CLIENT_SECRET,

     };
    
    return ( 
        <Elements  stripe={stripePromise} options={options}>
            <PaymentForm/>
        </Elements>
    )
}

const PaymentForm=()=>{
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const dispatch = useDispatch();
    const cart = useSelector(cartProduct);
    const address = useSelector(getAddress);
    const navigate = useNavigate();
    const elements = useElements();
    const stripe = useStripe();

    const handleSubmit = async(e)=>{
        e.preventDefault();

        if(!stripe || !elements ||!cart?.length||!address){
            return;
        }
        console.log(cart);

        setLoading(true);
        
        try {
            const {error:backEndError,clientSecret} = await fetch('http://localhost:5000/create-payment-intent',{
              
            method:'POST',
                headers:{
                    'Content-type':'applicaton/json'
                },
                body:JSON.stringify({
                    paymentMethodType:'card',
                    orderItems:cart,
                    userId:'',
                    shippingAddress:address
                })
            }).then(r=>r.json());

            const {error:stripeError,paymentIntent} = await stripe.confirmCardPayment(
                clientSecret,{
                    payment_method:{
                        card:elements.getElement(CardElement),
                     },
                }
            ) 
            if(backEndError || stripeError){
                setError(backEndError || stripeError)
            }else if(paymentIntent.status === "succeeded"){
                dispatch(clearAddress());
                dispatch(clearCart());
                navigate('/payment-success');
            }

        } catch (err) {
            console.log(err);
        }

        setLoading(false);
    }

    return(
        <PaymentFormStyled id="payment-form" onSubmit={handleSubmit}>
            <label htmlFor="card-elements">Please enter your card details</label>
            <div className="cardElement">
                <CardElement id="card-element"/>
            </div>
            <div className="btn">
            <Button  name={loading?"Loading...":"Pay Now"} bMarg={"20px 10px"}  color={"white"} type="submit" width={"150px"} onClick={()=>navigate("/payment-success")}/>
            </div>
        </PaymentFormStyled>
    )
}

const PaymentFormStyled = styled.form`
background:white;
height:600px;
button{
    border:none;
    outline:none;
    padding:10px 20px;
    margin:20px 10px;
    background:orange;
    color:white;
    border-radius:12px;
}
`;
